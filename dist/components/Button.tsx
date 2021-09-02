import React from 'react';


interface ButtonProps {
  kind: string;
  label: string;
}
const Button = (props: ButtonProps) => {
  return (
    <button
      className={`btn btn--${props.kind} CTA`}
    >
      <h4>{props.label}</h4>
    </button>
  );
};
export default Button;