import React, { Component } from 'react'
import ChatHeader from './chat-header/ChatHeader'

export class ChatWindow extends Component {
    render() {
        return (
            <div className="chat-window-wrapper">
                <ChatHeader />
            </div>
        )
    }
}

export default ChatWindow
