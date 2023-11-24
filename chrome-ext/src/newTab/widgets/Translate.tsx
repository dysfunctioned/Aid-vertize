import React from 'react'

function Translate() {
    return (
        <iframe src="https://www.bing.com/translator" title="Bing Translator"
            style={{
                height: 'calc(100% - 60.8px)', width: 'calc(100% + 1px)',
                overflow: 'hidden', borderRadius: '0 0 10px 0',
            }}
            seamless
        >
        </iframe>
    )
}

export default Translate