import React, { useState } from "react";
// import {bindActionCreators} from "redux";
import { connect } from "./../storeConfig";
import { submitCourseApi } from "./../actionDispatcher";
function FormComponent(props) {
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const nameChangeHandler = event => {
        setName(event.target.value);
    };

    const idChangeHandler = event => {
        setId(parseInt(event.target.value));
    };

    const submitCourseHandler = event => {
        event.preventDefault();
        console.log("Submitted form");
        props.submitCourse({ name, id });
        setName("");
        setId(0);
    };

    return (
        <div className="form-header">
            <form onSubmit={submitCourseHandler}>
                <div>
                    <label htmlFor="coursename" className="course-name">
                        Course name
                    </label>
                    <input
                        type="text"
                        id="coursename"
                        value={name}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="courseid" className="course-id">
                        Course id
                    </label>
                    <input
                        type="number"
                        id="courseid"
                        value={id}
                        onChange={idChangeHandler}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

//const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    submitCourse: payload => submitCourseApi(dispatch, payload)
});

// export default connect(null, mapDispatchToProps)(FormComponent);
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);
export default connectedComponent;
