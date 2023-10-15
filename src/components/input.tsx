import React, { CSSProperties } from "react";
import './input.scss';

export type InputProps = {
    headIcon?: string,
    placeHolder: string,
    validators?: Array<Function>
    onClick?: Function,
    onClickHeaderIcon?: Function,
    onChange: Function,
    value: any,
    type: string,
    name?: string,
    containerStyle: CSSProperties
}


export const Input: React.FC<InputProps> = (props) => {
    return <div className="default_input" style={props.containerStyle}>
        <img src={props.headIcon} className = "head_icon"></img>
        <input type={props.type} value={props.value} placeholder={props.placeHolder} name={props.name} />
    </div>
}