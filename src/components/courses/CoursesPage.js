import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
    render() {
        return (
            <>
                <h2>Courses</h2>
                {this.props.courses.map(course=>(
                    <div key={course.title}>{course.title}</div>
                ))}
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return { createCourse: course => dispatch(courseActions.createCourse(course)) };
}

CoursesPage.propTypes={
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CoursesPage);
