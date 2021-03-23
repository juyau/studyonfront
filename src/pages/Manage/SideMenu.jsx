import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SideMenuData from "../../config/SideMenuConfig";

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
    backgroundColor: "#E0E6FF",
  },
  summaryExpanded: {
    // backgroundColor: "#F6F6F6",
    minHeight: "24px",
  },
  iconRoot: {
    fontSize: "1.2rem",
    marginRight: "8px",
    marginBottom: "-4px",
  },
}));

const SideMenu = () => {
  const classes = useStyles();

  const showMenuList = () => {
    return SideMenuData.map((firstLeve, i) => (
      <Accordion
        key={i}
        classes={{ root: classes.accordionRoot }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{
            root: `${classes.summaryRoot} ${classes.accordionRoot}`,
            expanded: classes.summaryExpanded,
          }}
        >
          <Typography variant="h6" className={classes.heading}>
            {firstLeve.label}
          </Typography>
        </AccordionSummary>
        {firstLeve.children &&
          firstLeve.children.map((secondLevel, i) => (
            <AccordionDetails key={i} className={classes.subList}>
              <Typography className={classes.subListTitle}>
                {secondLevel.label}{" "}
              </Typography>
            </AccordionDetails>
          ))}
      </Accordion>
    ));
  };

  return <div className={classes.root}>{SideMenuData && showMenuList()}</div>;
};

export default SideMenu;
