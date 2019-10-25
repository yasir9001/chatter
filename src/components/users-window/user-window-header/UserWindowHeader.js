import React, { Component } from 'react'

import { Avatar } from 'antd'

export class UserWindowHeader extends Component {
    render() {
        return (
            <div className="user-window-wrapper">
                <div>
                    <Avatar size="large" src="https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg" />
                </div>
            </div>
        )
    }
}

export default UserWindowHeader
