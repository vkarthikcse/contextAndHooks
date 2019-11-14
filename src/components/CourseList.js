import React, { useEffect } from "react";
//import {connect} from "react-redux";
import { fetchCourseApi, removeCourseApi } from "./../actionDispatcher";
import { connect } from "./../storeConfig";

const CourseList = props => {
    //const { courses } = props;
    //const fetchCourse = fetchCourseApi(dispatch);
    //const [courses, setCourses] = useState(state.courses);
    useEffect(() => {
        props.fetchCourse();
    }, []);

    const removeCourseHandler = (event, data) => {
        props.removeCourse(data);
    };

    return props.courses.map(courseDetail => {
        return (
            <div
                key={courseDetail.id}
                className="Course-list"
                onClick={event => removeCourseHandler(event, courseDetail)}
            >
                <p>
                    <span>Course name: </span> <span> {courseDetail.name}</span>
                </p>
                <p>
                    <span>Course id: </span> <span> {courseDetail.id}</span>
                </p>
            </div>
        );
    });
};

const mapStateToProps = state => ({ courses: state.courses });
const mapDispatchToProps = dispatch => ({
    fetchCourse: payload => fetchCourseApi(dispatch, payload),
    removeCourse: payload => removeCourseApi(dispatch, payload)
});
//export default connect()(CourseList);
//const ConnectedCourseList = connect(mapStateToProps,mapDispatchToProps)(CourseList);
//export default ConnectedCourseList;
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseList);
export default connectedComponent;
