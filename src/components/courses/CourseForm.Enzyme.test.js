import React from "react";
import CourseForm from "./CourseForm";
import {shallow} from "enzyme";
import { courses, authors } from "../../../tools/mockData";

function renderCourseForm(args){
  const defaultProps={
    authors:[],
    course:{},
    saving:false,
    errors:{},
    onSave:()=>{},
    onChange:()=>{},
  };

  const props={...defaultProps, ...args};
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper=renderCourseForm();
  // console.log(wrapper.debug());

  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h2').text()).toEqual('Add Course');
});
