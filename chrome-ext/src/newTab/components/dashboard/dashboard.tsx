import React from 'react'
import './dashboard.css'
import useDisplayStore from '../../../stores/displayStore';

function Dashboard(props: React.PropsWithChildren) {

    const { display, isDashBoardActive } = useDisplayStore();

    return (isDashBoardActive() &&
        <div className="box">
            {props.children}
        </div>
    ) 
}

export default Dashboard