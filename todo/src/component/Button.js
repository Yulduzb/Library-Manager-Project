import React from "react";

export const DELETE_TYPE = 'bg-danger text-light px-5 '
export const UPDATE_TYPE = 'bg-primary text-light px-4'
export const READ_TYPE = 'bg-success text-light px-4'
export const ADD_TYPE = 'bg-warning  px-4'
export const SAVE_TYPE = 'bg-primary text-light '

const Button = ({ title, onClick, type }) => {
    return (
        <div className="btn-group">
            <button onClick={onClick} className={`btn ${type}`}>{title}</button>
        </div>
    )

}

export default Button 