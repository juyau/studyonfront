import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/actions";

import { makeStyles } from "@material-ui/core/styles";

import { useForm, Form } from "../../../components/Form/useForm";
import Input from "../../../components/Form/controls/Input";
import RadioGroup from "../../../components/Form/controls/RadioGroup";
import Select from "../../../components/Form/controls/Select";
import {
  Box,
  LinearProgress,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "../../../components/Form/controls/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const CourseInfo = ({ setTapValue }) => {
  const classes = useStyles();

  // SnackBar functionality
  const [open, setOpen] = useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const showSnackbar = () => {
    return (
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={response.code === 10000 ? "success" : "error"}
        >
          {response.message}
        </Alert>
      </Snackbar>
    );
  };

  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const dictionary = useSelector((state) => state.dictionary);
  const courseBasicAdd = useSelector((state) => state.courseBasicAdd);

  const { categoryList, loading: cateLoading } = category;
  const { dictionaryList, loading: dictLoading } = dictionary;
  const { response, loading: courseAddLoading } = courseBasicAdd;

  // transform data format to match the category list input
  let mainCategoryList = [];
  categoryList.forEach((item) =>
    mainCategoryList.push({ id: item.id, title: item.name })
  );

  // transform data format to match the radio group input
  let gradeOptions = [];
  if (dictionaryList.Grade) {
    dictionaryList.Grade.dvalue.forEach((item) =>
      gradeOptions.push({ id: item.sdId, label: item.sdName })
    );
  }

  // transform data format to match the radio group input
  let studyModeOptions = [];
  if (dictionaryList.StudyMode) {
    dictionaryList.StudyMode.dvalue.forEach((item) =>
      studyModeOptions.push({ id: item.sdId, label: item.sdName })
    );
  }

  const getSubCategoryList = () => {
    const beforeSubList = categoryList.filter(
      (item) => item.id === values.mt
    )[0].subCategoryList;

    let tranformedSubList = [];
    beforeSubList.forEach((item) =>
      tranformedSubList.push({ id: item.id, title: item.name })
    );
    return tranformedSubList;
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Course name is required.";
    if ("mt" in fieldValues)
      temp.mt = fieldValues.mt ? "" : "Course main category is required.";
    if ("st" in fieldValues)
      temp.st = fieldValues.st ? "" : "Course sub category is required.";
    if ("users" in fieldValues)
      temp.users = fieldValues.users ? "" : "Target users is required.";
    if ("grade" in fieldValues)
      temp.grade = fieldValues.grade ? "" : "Grade is required.";
    if ("studymode" in fieldValues)
      temp.studymode = fieldValues.studymode ? "" : "Study Mode is required.";
    if ("requirements" in fieldValues)
      temp.requirements = fieldValues.requirements
        ? ""
        : "requirements is required.";
    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "description is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values)
      return Object.values(temp).every((x) => x === "");
  };

  let initialFValues = {
    name: "",
    mt: "",
    st: "",
    grade: "", //
    users: "", // target learner
    studymode: "",
    teachmode: "", // ignore this field
    requirements: "",
    description: "",
    companyId: "",
    user_id: "",
  };

  // if (Object.keys(response).length !== 0) {
  //   console.log(response.data);
  //   initialFValues = response.data;
  // }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, false, validate);

  const handleSaveAndContinue = () => {
    console.log("handleSaveClicked");
    if (validate(values)) {
      dispatch(actions.courseActions.courseBasicAdd(values));
      if (response.message) {
        console.log(response.data);
        setOpen(true);
        setTapValue(1);
        // resetForm();
      }
    }
  };

  return (
    <div className={classes.root}>
      <Form>
        <Box margin="8px 0">
          <Input
            name="name"
            value={values.name}
            label="Course Name"
            onChange={handleInputChange}
            error={errors.name}
          />
        </Box>
        {cateLoading && <LinearProgress />}
        <Box display="flex" minWidth="320px" maxWidth="400px" margin="8px 0">
          <Select
            name="mt"
            label="Main Category"
            value={values.mt}
            onChange={handleInputChange}
            options={mainCategoryList}
            error={errors.mt}
          />
          <Select
            name="st"
            label="Sub Category"
            value={values.st}
            onChange={handleInputChange}
            options={values.mt && getSubCategoryList()}
            disabled={values.mt === "" ? true : false}
            helpperText="Select main category first"
            error={errors.st}
          />
        </Box>
        <Box margin="8px 0">
          <Input
            name="users"
            value={values.users}
            label="Target audients"
            onChange={handleInputChange}
            error={errors.users}
          />
        </Box>
        <Box margin="8px 0">
          <RadioGroup
            name="grade"
            label="Grade"
            value={values.grade}
            onChange={handleInputChange}
            options={gradeOptions}
            error={errors.grade}
          />
        </Box>
        <Box margin="8px 0">
          {dictLoading && <LinearProgress />}
          <RadioGroup
            name="studymode"
            label="Study Mode"
            value={values.studymode}
            onChange={handleInputChange}
            options={studyModeOptions}
            error={errors.studymode}
          />
        </Box>
        <Box margin="8px 0">
          <Input
            name="requirements"
            value={values.requirements}
            label="requirements for studying"
            onChange={handleInputChange}
            error={errors.requirements}
            multiline
            rows={2}
            rowsMax={8}
            variant="outlined"
          />
        </Box>
        <Box margin="8px 0">
          <Input
            name="description"
            value={values.description}
            label="Course Description"
            onChange={handleInputChange}
            error={errors.description}
            multiline
            rows={4}
            rowsMax={30}
            variant="outlined"
          />
        </Box>
      </Form>
      <Box marginTop="2rem" display="flex" justifyContent="flex-end">
        {courseAddLoading && <LinearProgress />}
        <Button text="Clear" onClick={resetForm} variant="outlined"></Button>
        <Button
          text="Save and Continue"
          onClick={handleSaveAndContinue}
        ></Button>
      </Box>
      {showSnackbar()}
      <br />
    </div>
  );
};

export default CourseInfo;
