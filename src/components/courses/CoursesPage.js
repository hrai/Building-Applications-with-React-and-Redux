import React from 'react';

class CoursesPage extends React.Component {
    state={
        course: {
            title: ''
        }
    };

    handleChange= (event)=>{
        const course={...this.state.course, title:event.target.value};
        this.setState({course});
    }

    handleSubmit=()=>{alert(this.state.course.title);}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save" />
            </form>
        );
    }
}

export default CoursesPage;
