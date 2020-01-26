import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {

    componentDidMount(){
        const {actions}=this.props;

        actions.loadCourses().catch(error=>{
            alert('loading courses failed ' + error);
        });
    }

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
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
}

CoursesPage.propTypes={
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
