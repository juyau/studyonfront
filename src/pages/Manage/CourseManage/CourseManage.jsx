import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import actions from "../../../redux/actions";
import TeachPlanList from "./TeachPlanList";
import PageHeader from "../PageHeader";
import Button from "../../../components/Form/controls/Button";
import CourseInfo from "./CourseInfo";
import CourseImage from "./CourseImage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const showTeachPlan = () => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row-reverse"
        margin="8px 0"
      >
        <Button text="Add Teachplan" startIcon={<AddCircleIcon />} />
      </Box>
      <TeachPlanList />
    </Box>
  );
};

const CourseManage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const courseId = "4028e581617f945f01617f9dabc40000";

  useEffect(() => {
    dispatch(actions.courseActions.getTeachPlanByCourseId(courseId));
    dispatch(actions.categoryActions.getCategoryList());
    dispatch(actions.dictionaryActions.getDictionaryByDname("Grade"));
    dispatch(actions.dictionaryActions.getDictionaryByDname("StudyMode"));
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ marginBottom: "1rem" }}>
      <PageHeader
        title="Course Manage"
        subTitle="eidt your exist course"
        icon={<VideoLibraryIcon />}
      />
      {/* <Paper style={{ padding: "16px", backgroundColor: "#E0E6FF" }}> */}
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Course Info" {...a11yProps(0)} />
            <Tab label="Marketing Info" {...a11yProps(1)} />
            <Tab label="Course Image" {...a11yProps(2)} />
            <Tab label="Teach Plan" {...a11yProps(3)} />
            <Tab label="Preview" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CourseInfo value={value} setTapValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Marketing Info
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CourseImage />
        </TabPanel>
        <TabPanel value={value} index={3}>
          {showTeachPlan()}
        </TabPanel>
        <TabPanel value={value} index={4}>
          Preview
        </TabPanel>
      </div>
    </Container>
  );
};

export default CourseManage;
