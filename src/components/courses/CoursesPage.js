import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import CourseList from './CourseList';

class CoursesPage extends React.Component {

    componentDidMount(){
        const {actions}=this.props;

        actions.loadCourses().catch(error=>{
            alert('loading courses failed ' + error);
        });

        actions.loadAuthors().catch(error=>{
            alert('loading authors failed ' + error);
        });
    }

    render() {
        return (
            <>
                <h2>Courses</h2>
            <CourseList courses={this.props.courses} />
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses.length===0?[]:
            state.courses.map(course=>{
                return {
                    ...course,
                    authorName: state.authors.find(auth=>auth.id==course.authorId).name
                };
            }),
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
           loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
           loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
        }
    };
}

CoursesPage.propTypes={
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
