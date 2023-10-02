import React, { SyntheticEvent } from "react";

export interface ButtonProps {
    children: any;
    onClick: (e: SyntheticEvent) => {};
}

const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
