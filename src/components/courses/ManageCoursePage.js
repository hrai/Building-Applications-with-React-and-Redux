import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {loadCourses, saveCourse} from "../../redux/actions/courseActions";
import {loadAuthors} from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { newCourse } from '../../../tools/mockData';
import CourseForm from "./CourseForm";
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors,
  history,
  saveCourse, ...props }) {

  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("loading courses failed " + error);
      });
    }
    else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("loading authors failed " + error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;

    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event){
    event.preventDefault();
    setSaving(true);

    saveCourse(course).then(() => {
      toast.success('Course saved.');
      history.push('/courses');
    }).catch(error => {
      setSaving(false);
      setErrors({ onSave: error.message });
    });
  }

  return courses.length === 0 || authors.length === 0 ?
    <Spinner /> :
    <CourseForm
      course={course} errors={errors} authors={authors} onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />;
}

function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug)||null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course = slug && state.courses.length>0 ? getCourseBySlug(state.courses, slug):newCourse;

  return {
    course,
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  history:  PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
