import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div>
                    <div className="mg-icon"><img src={require('./../../../assets/images/icons/magnifying-glass.png')} /></div>
                    <div className="search-input"><input type="text" placeholder="Search here" /></div>
                </div>
            </div>
        )
    }
}

export default SearchBar
