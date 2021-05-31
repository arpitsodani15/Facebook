import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./css/MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // some clever db stuff

    // setInput("");
    // setImageUrl("");

    return (
        <div className = 'message_sender'>
            <div className = "message_sender_top">
                <Avatar />
                <form>
                    <input value = { input } 
                    onChange = {(e) => setInput(e.target.value )}
                    className = 'message_sender_input' 
                    type = "type" placeholder = "What's on your mind?" />

                    <input value = { imageUrl } 
                    onChange = {(e) => setImageUrl(e.target.value )}
                    type = "type" placeholder = 'Image URL (Optional)' />

                    <button onClick = {handleSubmit} type = "submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className = "message_sender_bottom">
                <div class = "message_sender_option">
                    <VideocamIcon style = {{color : "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div class = "message_sender_option">
                    <PhotoLibraryIcon style = {{color : "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div class = "message_sender_option">
                    <InsertEmoticonIcon style = {{color : "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
