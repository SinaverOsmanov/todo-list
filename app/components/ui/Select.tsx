import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<SelectProps> = ({ ...props }) => {
  return <select {...props} />;
};

export default Select;
