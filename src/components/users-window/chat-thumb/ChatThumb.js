import React, { Component } from 'react'

import { Avatar } from 'antd'

export class ChatThumb extends Component {
    render() {
        const { avatar, name, time } = this.props;
        return (
            <div className="chat-thumb">
                <div className="avatar">
                    <Avatar src={avatar} size={52} />
                </div>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="time">{time}</div>
                </div>
            </div>
        )
    }
}

export default ChatThumb
