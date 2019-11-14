import * as actions from "./actions/actionCreators";
import * as courseAPI from "./courseAPI";
//import { submitCourse } from "../../course_finder_saga_example/src/actionCreators";
// export const [state, dispatch] = useReducer(reducer, initialState);

export const fetchCourseApi = async dispatch => {
    try {
        const response = await courseAPI.fetchCourseAPI();
        dispatch(actions.onReceiveCourses(response));
    } catch (error) {
        console.log(error);
    }
};

export const submitCourseApi = async (dispatch, courseData) => {
    try {
        const response = await courseAPI.submitCourseAPI(courseData);
        dispatch(actions.submitCourseSuccess(response));
    } catch (error) {
        console.log(error);
    }
};

export const removeCourseApi = async (dispatch, courseData) => {
    try {
        const response = await courseAPI.removeCourseAPI(courseData);
        dispatch(actions.removeCourseSuccess(response));
    } catch (error) {
        console.log(error);
    }
};
