import * as actionCreators from "./../actions/actionCreators";

export const initialState = {
    courses: []
  };

const courseReducer = (state, action) => {
    switch (action.type) {
        case actionCreators.RECEIVE_COURSES:
            let courses = action.payload.data ? action.payload.data : [];
            return {
                ...state,
                courses: courses
            };
        case actionCreators.SUBMIT_COURSE:
            return {
                ...state
            };
        case actionCreators.SUBMIT_COURSE_SUCCESS:
            return {
                ...state,
                courses: action.payload.data
            };
        case actionCreators.REMOVE_COURSE_SUCCESS:
            return {
                ...state,
                courses: action.payload.data
            };
        default:
            break;
    }

    return state;
};

export default courseReducer;
