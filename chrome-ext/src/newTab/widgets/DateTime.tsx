import React, { useState, useEffect } from 'react'

export default function DateTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const time = `${currentTime.getHours() % 12 || 12}:${currentTime.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
    const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
    const date = currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', });

    return (
        <div style={{
            color: '#FFF',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            textShadow: '0 0 2px rgba(0, 0, 0, 0.8)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div>
                <span style={{
                    fontSize: '100px',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '2px',
                }}>
                    {time}
                </span>

                <span style={{
                    fontSize: '50px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    letterSpacing: '0.4px',
                    paddingLeft: '5px'
                }}>
                    {ampm}
                </span>
            </div>


            <span
                style={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    letterSpacing: '0.4px',
                }}>
                {date}
            </span>
        </div>
    )
}
