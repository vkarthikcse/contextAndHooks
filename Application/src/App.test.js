import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./storeConfig";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {act} from "react-test-renderer";

configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  let div;
    act(() => {
      
        div = mount(
            <Provider>
                <App />
            </Provider>
        );
    });

    // expect(div.props().courses).toEqual([
    //     {
    //         id: 1,
    //         name: "course1"
    //     },
    //     {
    //         id: 2,
    //         name: "course2"
    //     },
    //     {
    //         id: 3,
    //         name: "course3"
    //     }
    // ]);
});
