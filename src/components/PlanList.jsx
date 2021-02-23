import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const PlanList = ({ course }) => {
  const [list, setlist] = useState("initial list");
  const [categoryList, setCategoryList] = useState("initial list");

  const loadList = () => {
    const url =
      "http://localhost:31200/course/teachplannode/4028e581617f945f01617f9dabc40000";
    axios
      .get(url, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setlist(JSON.stringify(res.data.children));
        console.log(res.data.children);
      });
  };

  const loadCategory = () => {
    const url = "http://localhost:31200/course/categoryList";
    axios
      .get(url, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCategoryList(JSON.stringify(res.data.subCategoryList));
        console.log(res.data.subCategoryList);
      });
  };
  return (
    <div>
      <Button onClick={loadList}>Load List</Button>
      {list}
      <div>
        <Button onClick={loadCategory}>Load Category</Button>
        {categoryList}
      </div>
    </div>
  );
};

export default PlanList;
