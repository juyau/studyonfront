import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import LinearProgress from "@material-ui/core/LinearProgress";
import FormHelperText from "@material-ui/core/FormHelperText";

import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectCategory = ({ getCategoryList, category }) => {
  const classes = useStyles();
  const { categoryList, error, loading } = category;
  const [mainCategory, setMainCategory] = useState("");
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => getCategoryList(), []);

  const handleMainCategoryChange = (event) => {
    const mainCateogryId = event.target.value;
    setMainCategory(mainCateogryId);
    console.log(event.target.value);
    const selectedMain = categoryList.filter(
      (item) => item.id == mainCateogryId
    );
    setSubCategoryList(selectedMain[0].subCategoryList);
  };
  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
    console.log(event.target.value);
  };

  const showCategroyForm = () => {
    return (
      <Box>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Main Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mainCategory}
            onChange={handleMainCategoryChange}
          >
            {categoryList &&
              categoryList.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl
          className={classes.formControl}
          {...(mainCategory == "" && { disabled: true })}
        >
          <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subCategory}
            onChange={handleSubCategoryChange}
          >
            <MenuItem>Sub Category</MenuItem>
            {subCategoryList &&
              subCategoryList.map((subItem) => (
                <MenuItem key={subItem.id} value={subItem.id}>
                  {subItem.name}
                </MenuItem>
              ))}
          </Select>
          {mainCategory == "" && (
            <FormHelperText>Please select main category first</FormHelperText>
          )}
        </FormControl>
      </Box>
    );
  };

  return loading ? <LinearProgress /> : showCategroyForm();
};

export default connect((state) => ({ category: state.category }), {
  getCategoryList: actions.categoryActions.getCategoryList,
})(SelectCategory);
