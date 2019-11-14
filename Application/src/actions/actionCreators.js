export const FETCH_COURSES = "FETCH_COURSES";
export const SUBMIT_COURSE = "SUBMIT_COURSE";
export const SUBMIT_COURSE_SUCCESS = "SUBMIT_COURSE_SUCCESS";
export const FETCH_COURSE_WITH_ID = "FETCH_COURSE_WITH_ID";
export const RECEIVE_COURSES = "RECEIVE_COURSES";
export const REMOVE_COURSE_SUCCESS = "REMOVE_COURSE_SUCCESS";

export const onFetchCourses = () => {
  return {
    type: FETCH_COURSES
  };
};

export const onReceiveCourses = (payload) => {
  return {
    type: RECEIVE_COURSES,
    payload
  };
}

export const onFetchCourseWithId = (id) => {
    return {
      type:FETCH_COURSE_WITH_ID,
      id
    };
  };

  export const submitCourse = (payload) => {
    return {
      type: SUBMIT_COURSE,
      payload
    };
  };

  export const submitCourseSuccess = (payload) => {
    return {
      type: SUBMIT_COURSE_SUCCESS,
      payload
    };
  };

  export const removeCourseSuccess = (payload) => {
    return {
      type: REMOVE_COURSE_SUCCESS,
      payload
    };
  };
