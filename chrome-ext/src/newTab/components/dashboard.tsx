import React from 'react'
import './dashboard.css'

function Dashboard(props) {
    return (props.trigger) ? (
        <div className="box">
            {props.children}
        </div>
    ) : <></>;
}

export default Dashboard