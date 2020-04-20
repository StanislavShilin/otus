import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';

import { Hello } from "./Hello";

configure({adapter: new Adapter()});

describe("Hello render check", () => {
   it("Default render with prop", () => {
       expect(
           shallow(<Hello name={'Сауль'} />).matchesElement(
               <h1>Hello Сауль</h1>
           )
       ).toBe(true);
   })
});