import { Avatar } from '@material-ui/core';
import React from 'react';
import './css/Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';



function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className = 'post'>
            <div className = 'post_top'>
                <Avatar src = {profilePic} className = "post_avatar" />
                <div className = 'post_top_info'>
                    <h3>{ username }</h3>
                    <p>{ new Date(timestamp?.toDate()).toUTCString() }</p>
                </div>
            </div>

            <div className = 'post_bottom'>
                <p>{ message }</p>
            </div>

            <div className = 'post_image'>
                <img src = {image} alt="" />
            </div>

            <div className = "post_options">
                <div className = "post_option">
                    <ThumbUpIcon />
                </div>
                <div className = "post_option">
                    <ChatBubbleOutlineIcon />
                </div>
                <div className = "post_option">
                    <NearMeIcon />
                </div>
                <div className = "post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
