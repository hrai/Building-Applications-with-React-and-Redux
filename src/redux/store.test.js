import { createStore} from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as actions from './actions/courseActions';

it('should handle creating courses', ()=>{
  const store=createStore(rootReducer, initialState);
  const course={
    title:'react tutorial'
  };

  const action=actions.createCourseSuccess(course);
  store.dispatch(action);

  const newCourse=store.getState().courses[0];
  expect(newCourse).toEqual(course);
})
