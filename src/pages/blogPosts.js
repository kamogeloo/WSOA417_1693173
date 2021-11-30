import React, { Component } from 'react';
import { blogList } from '../helpers/blogList';
import BlogItem from '../components/blogItem';
import '../styles/BlogPost.css';
import { Link } from 'react-router-dom';

export default class blogPosts extends Component {

    render() {
        return (
            <div className="blog">
                <h1 className="blogTitle">Blog Posts</h1>
                <div className="blogList">
                    {blogList.map((blogItem, value) =>{
                        return(
                            <BlogItem value={value} name={blogItem.name} image={blogItem.image} text={blogItem.text}/>
                           
                        )
                    })}
                   
                </div>
                
            </div>
        )
    }
}

