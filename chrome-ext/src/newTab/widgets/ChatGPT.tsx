import React from 'react'

function ChatGPT() {
  return (
    <iframe src="https://chat.openai.com" title="ChatGPT"
      style={{
        height: 'calc(100% - 60.8px)', width: 'calc(100% + 1px)',
        overflow: 'hidden', borderRadius: '0 0 10px 0',
      }}
      seamless
    >
    </iframe>
  )
}

export default ChatGPT