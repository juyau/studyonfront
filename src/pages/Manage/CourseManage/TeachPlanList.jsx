import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DescriptionIcon from "@material-ui/icons/Description";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subList: {
    paddingLeft: "32px",
    paddingBottom: "8px",
    verticalAlign: "bottom",
    borderBottom: "1px solid rgba(0,0,255, 0.1)",
    "&:last-child": {
      borderBottom: "none",
    },
    width: "100%",
  },
  subListTitle: {
    flexGrow: "1",
  },

  accordionRoot: {
    margin: "0px !important",
  },
  summaryRoot: {
    fontSize: "1.5rem !important",
    margin: "0px",
    minHeight: "24px",
    backgroundColor: "#F6F6F6",
  },
  summaryExpanded: {
    backgroundColor: "#F6F6F6",
    minHeight: "24px",
  },
  iconRoot: {
    fontSize: "1.2rem",
    marginRight: "8px",
    marginBottom: "-4px",
  },
}));

const TeachPlanList = () => {
  const classes = useStyles();

  const { teachplanList, loading } = useSelector(
    (state) => state.teachplanList
  );

  const showTeachPlanList = () => {
    console.log(teachplanList);
    return teachplanList.map((plan, i) => (
      <Accordion key={i} classes={{ root: classes.accordionRoot }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{
            root: `${classes.summaryRoot} ${classes.accordionRoot}`,
            expanded: classes.summaryExpanded,
          }}
        >
          <Typography className={classes.heading}>{plan.pname}</Typography>
        </AccordionSummary>
        {plan.children &&
          plan.children.map((subList, i) => (
            <AccordionDetails key={i} className={classes.subList}>
              <Typography className={classes.subListTitle}>
                {subList.ptype === "1" ? (
                  <PlayCircleOutlineIcon classes={{ root: classes.iconRoot }} />
                ) : (
                  <DescriptionIcon classes={{ root: classes.iconRoot }} />
                )}
                {subList.pname}{" "}
              </Typography>

              <IconButton aria-label="edit icon" size="small" color="primary">
                <EditIcon />
              </IconButton>

              <IconButton
                aria-label="delete icon"
                size="small"
                color="secondary"
              >
                <DeleteForeverIcon />
              </IconButton>
            </AccordionDetails>
          ))}
      </Accordion>
    ));
  };

  return (
    <div className={classes.root}>{teachplanList && showTeachPlanList()}</div>
  );
};

export default TeachPlanList;
