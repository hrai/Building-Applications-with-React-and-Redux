import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

it('should add course when passed CREATE_COURSE_SUCCESS', ()=>{
  const initialState=[
    {title:'A'},
    {title:'B'}
  ];

  const newCourse={title:'C'};

  const action=actions.createCourseSuccess(newCourse);

  const newState=courseReducer(initialState, action);

  expect(newState.length).toBe(3);
  expect(newState[0].title).toBe('A');
  expect(newState[1].title).toBe('B');
  expect(newState[2].title).toBe('C');
});

it('should update course when passed UPDATE_COURSE_SUCCESS', ()=>{
  const initialState=[
    {id:1,title:'A'},
    {id:2,title:'B'},
    {id:3,title:'C'},
  ];

  const updatedCourse={id:2,title:'new updated title'};

  const action=actions.updateCourseSuccess(updatedCourse);

  const newState=courseReducer(initialState, action);

  expect(newState.length).toBe(3);
  expect(newState[0].title).toBe('A');
  expect(newState[1].title).toBe('new updated title');
  expect(newState[2].title).toBe('C');
});

