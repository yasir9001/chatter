import React, { Component } from 'react'

import { Avatar } from 'antd'

export class ChatHeader extends Component {
    render() {
        return (
            <div className="chat-header">
                <div className="chat-info">
                    <div><Avatar size="large" src="https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg" /></div>
                    <div className="name-last-seen">
                        <p>Muhammad Atif</p>
                        <p>last seen yesterday at 9:15 PM</p>
                    </div>
                </div>
                <div className="serach-icon">
                    <img src={require('./../../../assets/images/icons/magnifying-glass-dark.png')} />
                </div>
            </div>
        )
    }
}

export default ChatHeader
