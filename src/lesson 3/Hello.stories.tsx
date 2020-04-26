import React from "react";
import { Hello } from "./Hello";

export default {
  title: "Hello",
};

export const withRealField: React.FC<{}> = () => <Hello name={"Сауль"} />;
