import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Spinner } from "react-bootstrap";

const CategoryList = ({ category }) => {
  // const [categoryList, setCategoryList] = useState([]);

  // useEffect(() => {
  //   loadCategory();
  // }, []);

  // loadCategory().then((res) => {
  //   if (res.data.subCategoryList) {
  //     const allCat = res.data.subCategoryList[0].subCategoryList;
  //     setCategoryList(allCat);
  //   }
  // });
  const { categoryList, error, loading } = category;
  const renderSubCategory = (props) => (
    <div className="subCategoryPopup" {...props}>
      {props.map((sub, i) => (
        <div className="subCateFlexItem">
          <Link to={`/course/search?id=${sub.id}`} key={i}>
            {sub.name}
          </Link>
        </div>
      ))}
    </div>
  );
  const showCategory = () => {
    return (
      categoryList && (
        <div>
          <ListGroup variant="flush">
            {categoryList.map((item, i) => {
              if (i < 10) {
                return (
                  <Link to={`/course/search?id=${item.id}`}>
                    <ListGroup.Item className="categoryItem" key={i}>
                      <span>{item.name}</span>
                      {renderSubCategory(item.subCategoryList)}
                    </ListGroup.Item>
                  </Link>
                );
              }
            })}
          </ListGroup>
        </div>
      )
    );
  };
  const showLoading = () => {
    {
      console.log("loading...");
    }
    return <Spinner animation="border" variant="primary" />;
  };

  return <>{loading ? showLoading() : showCategory()}</>;
};

export default CategoryList;
