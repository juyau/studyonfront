import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Course = ({ name, description, mt, st, company, pic }) => {
  return (
    <>
      <Header></Header>

      <main>Course Page</main>

      <Footer></Footer>
    </>
  );
};

Course.defaultProps = {
  id: 1234,
  name: "Java Microservices with SpringCloud beginnger course",
  user: "New learner with 0 experience.",
  grade: "Intermediat",
  mt: "Java",
  st: "Microservice",
  studymode: "online",
  teachmode: "realtime broadcast",
  description:
    "a comprehansive project base course that teach you everything about SpringCloud and SpringBoot microservices.",
  timestamp: "2021-01-29",
  company: "Miles Guo",
  charge: "Paypal",
  valid: true,
  whatsapp: "+6100660066",
  price: 19.99,
  price_old: 100.0,
  expires: "2025-01-29",
  pic: "../../images/01.jpg",
  teachplan: "Chapter1 Java basics",
};

export default Course;
