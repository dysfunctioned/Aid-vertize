import React from 'react'

export default function WidgetsBarInactive(props) {
    return (
        // Temporary
        <button onClick={() => { props.setDisplay("History") }}>Open Widgets</button>
    )
}
