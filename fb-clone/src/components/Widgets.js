import React from 'react';
import './css/Widgets.css';

function Widgets() {
    return (
        <div className = 'widgets'>
            <iframe src = ""
            width = "340" height = "100%" 
            style = {{ border: "none", overflow: 'hidden' }}
            scrolling = 'no' frameborders = '0'
            allowTransparency = 'true' 
            allow = 'encrypted-media'>
            </iframe>
        </div>
    )
}

export default Widgets
