// import React, {useContext} from "react";

// export const CourseAppContext = React.createContext();
// export const CourseAppProvider = CourseAppContext.Provider;



import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducers/courseReducer";

const customMiddleware = store => next => action => {
  console.log("Action Triggered");
  console.log(action);
  next(action);
};

const Store = createContext();

const compose = (...funcs) => x =>
  funcs.reduceRight((composed, f) => f(composed), x);

const createStore = (state, dispatch , middlewares) => {
  if (typeof middlewares !== "undefined") {
    // return middlewares(createStore)(reducer, initialState);
    const middlewareAPI = {
      getState: () => state,
      dispatch: action => dispatch(action)
    };
    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    const enhancedDispatch = compose(...chain)(dispatch);
    return { state, dispatch: enhancedDispatch };
  }

  return { state, dispatch };
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = createStore(state, dispatch, [customMiddleware]);
  return <Store.Provider value={store}>{children}</Store.Provider>;
};


const connect = (
  mapStateToProps = () => {},
  mapDispatchToProps = () => {}
) => WrappedComponent => {
  return props => {
    const { dispatch, state } = useContext(Store);
    return (
      <WrappedComponent
        dispatch={dispatch}
        {...mapStateToProps(state, props)}
        {...mapDispatchToProps(dispatch)}
      />
    );
  };
};

export { connect, Store, Provider };
