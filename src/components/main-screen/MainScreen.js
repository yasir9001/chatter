import React, { Component } from 'react'

import UserWindow from './../users-window/UsersWindow'
import ChatWindow from './../chat-window/ChatWindow'

export class MainScreen extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <UserWindow />
                <ChatWindow />
            </div>
        )
    }
}

export default MainScreen
