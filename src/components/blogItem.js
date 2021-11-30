import React, { Component } from 'react';





export default class blogItem extends Component {
    render() {

        return (
            <div className="blogItem">
               
                
                <div style={{ backgroundImage: `url(${this.props.image})` }} ></div>
                <h1>{this.props.name}</h1>
                <p>{this.props.text}</p>
                
                
            </div>
        )
    }
}


