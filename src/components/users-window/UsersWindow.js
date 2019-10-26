import React, { Component } from 'react'

import UserWindowHeader from './user-window-header/UserWindowHeader'
import './../../assets/scss/components/UsersWindow.scss'
import SearchBar from './search-bar/SearchBar'
import ChatThumb from './chat-thumb/ChatThumb'

import { connect } from "react-redux"
// import { MainMiddleware } from './../../store/middlewares'

class UsersWindow extends Component {
    render() {
        return (
            <div className="user-window-wraper">
                <div className="user-window">
                    <UserWindowHeader />
                    <SearchBar />

                    <div className="recent-chats">
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="DJ Khalid" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Jhon cena" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Mali Boy" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Shit lady" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                        <ChatThumb avatar={'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg'} name="Abou Sin" time="2 AM" />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {

    }
};
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersWindow);

