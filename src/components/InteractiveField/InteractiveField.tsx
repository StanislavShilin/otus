import React from "react";

interface InteractiveFieldProps {
  xSize: number;
  ySize: number;
}

export const InteractiveField: React.FC<InteractiveFieldProps> = ({
  xSize,
  ySize,
}) => {
  return <h1>{xSize * ySize}</h1>;
};
