import React from 'react'
import './dashboard.css'

function Dashboard(props) {
    return (props.display != null) ? (
        <div className="box">
            {props.children}
        </div>
    ) : <></>;
}

export default Dashboard