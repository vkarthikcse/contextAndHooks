import axios from "axios";



const fetchOptions = method => ({
    method: method,
    mode: "no-cors",
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchCourseAPI = () => {
    // const response = await fetch("http://localhost:3000/courses", fetchOptions("GET"));
    // const data = await response.json();
    // return data;

    return axios.get("http://localhost:3001/courses", {
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    });
};

export const submitCourseAPI = payload => {
    return axios.post("http://localhost:3001/courses", {
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        data: payload
    });
};

export const removeCourseAPI = payload => {
    return axios.delete("http://localhost:3001/courses/remove", {
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        data: payload
    });
}
