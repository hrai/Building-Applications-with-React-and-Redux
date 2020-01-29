import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { newCourse } from '../../../tools/mockData';
import CourseForm from "./CourseForm";

function ManageCoursePage ({ courses, authors, loadCourses, loadAuthors, ...props }) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("loading courses failed " + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("loading authors failed " + error);
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  return <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} />;
}

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
