import React, { Component } from 'react'

import UserWindowHeader from './user-window-header/UserWindowHeader'
import './../../assets/scss/components/UsersWindow.scss'
import SearchBar from './search-bar/SearchBar'
import ChatThumb from './chat-thumb/ChatThumb'

import { connect } from "react-redux"
import { Actions } from './../../store/actions'

class UsersWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Kiran khan',
                    time: '2 AM'
                },
                {
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Lol',
                    time: '2 AM'
                },
                {
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'CI CD',
                    time: '2 AM'
                },
                {
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Iqra Muneer',
                    time: '2 AM'
                },
                {
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Bhai Log',
                    time: '2 AM'
                },
                {
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Yasir Hussain',
                    time: '2 AM'
                },
                {
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Yasir Hussain',
                    time: '2 AM'
                },

            ]
        }
    }
    render() {
        console.log(this.props.currentUserChat)
        const { data } = this.state;
        return (
            <div className="user-window-wraper">
                <div className="user-window">
                    <UserWindowHeader />
                    <SearchBar />
                    <div className="recent-chats">
                        {
                            data.map((e, i) => {
                                return (
                                    <div onClick={() => this.props.showChat(e)} key={i}>
                                        <ChatThumb data={e} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentUserChat: state.Main.currentUserChat
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showChat: (e) => dispatch(Actions.showChat(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersWindow);

