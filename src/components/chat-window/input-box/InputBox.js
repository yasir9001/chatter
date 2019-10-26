import React, { Component } from 'react'

export class InputBox extends Component {
    render() {
        return (
            <div className="input-box">
                <div>
                    <div className="search-input"><input type="text" placeholder="Search here" /></div>
                </div>
            </div>
        )
    }
}

export default InputBox
