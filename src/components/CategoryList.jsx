import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { CircularProgress, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: "1.1rem",
    position: "relative",
    color: theme.palette.primary,
  },
  container: {
    height: "100%",
  },
  mainCategory: {
    // backgroudColor: "pink",
  },
  categoryItem: {
    padding: "8px 16px",
    "&:hover": {
      backgroundColor: "#E4C9FF",
    },
    "&:hover $subCategory": {
      display: "block",
      backgroundColor: "rgba(255,255,255,0.95)",
      width: "500px",
      position: "absolute",
      left: "200px",
      top: "-16px",
      zIndex: "999",
    },
  },
  subCategory: {
    display: "none",
  },
  subCategoryItem: {
    minWidth: "150px",
    // height: "40px",
    padding: "8px 8px",
    margin: "8px 8px",
    "&:hover": {
      backgroundColor: "#D6AEFE",
    },
  },
}));

const CategoryList = ({ category }) => {
  const classes = useStyles();
  const { categoryList, loading } = category;

  const preventDefault = (event) => event.preventDefault();

  const renderSubCategory = (props) => (
    <Box className={classes.subCategory}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        {...props}
      >
        {props.map((sub, i) => (
          <Grid item className={classes.subCategoryItem}>
            <Link underline="none" href={`/course/search?id=${sub.id}`} key={i}>
              {sub.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
  const showCategory = () => {
    return (
      <Box style={{ height: "100%" }}>
        {categoryList && (
          <Grid
            container
            direction="column"
            justify="space-between"
            className={classes.container}
          >
            {categoryList.map((item, i) => {
              if (i < 10) {
                return (
                  <Grid item className={classes.categoryItem}>
                    <Link
                      underline="none"
                      href={`/course/search?id=${item.id}`}
                      // onClick={preventDefault}
                    >
                      <Typography
                        classes={{ root: classes.root }}
                        variant="body1"
                        key={i}
                        color="initial"
                      >
                        {item.name}
                        {renderSubCategory(item.subCategoryList)}
                      </Typography>
                    </Link>
                  </Grid>
                );
              }
            })}
          </Grid>
        )}
      </Box>
    );
  };
  const showLoading = () => {
    return <CircularProgress />;
  };

  return <>{loading ? showLoading() : showCategory()}</>;
};

export default CategoryList;
