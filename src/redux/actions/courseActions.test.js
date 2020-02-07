import * as courseActions from './courseActions';
import * as types from './actionTypes';
import { courses } from "../../../tools/mockData";

describe("createCourseSuccess", ()=>{
  it('should create a CREATE_COURSE_SUCCESS action', ()=>{
    const course=courses[0];
    const expectedAction={
      type: types.CREATE_COURSE_SUCCESS,
      course
    };

    const action=courseActions.createCourseSuccess(course);

    expect(action).toEqual(expectedAction);
  });
});
