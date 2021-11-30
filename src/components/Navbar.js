import React, { Component } from 'react'
import Logo from '../Images/LOGO kamo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state ={
            openLinks : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState(prevState => ({
            openLinks : !prevState.openLinks
        }));
    }




    render() {
        return (
            <div className= "navbar">
                <div className= "leftSide" id={this.state.openLinks ? "open" : "close"}>
                <Link className="logo" to = '/'>
                 <img src={Logo} alt= "logo"/>
                    </Link>
                  <div className="hiddenLinks">
                     <Link to='/'>Home</Link>
                    <Link to='/blogPosts'>Blogs</Link>
                    <Link to='/netArt'>Net Art</Link>
                    
                  </div>
                </div>
                <div className= "rightSide">
                    <Link to='/'>Home</Link>
                    <Link to='/blogPosts'>Blogs</Link>
                    <Link to='/netArt'>Net Art</Link>
                    <button onClick={this.toggleNav}><ReorderIcon/> </button>
                </div>
               
            </div>
        )
    }
}

