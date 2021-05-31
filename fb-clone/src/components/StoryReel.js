import React from 'react';
import "./css/StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className = 'story_reel'>
            <Story image = ""  />
            <Story />
            <Story />
            <Story />
            <Story />
        </div>
    )
}

export default StoryReel
