import React from 'react';
import "./css/Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <SidebarRow src = 'https://yt3.ggpht.com/yti/ANoDKi64Vc4oif8TI1BU_uCeC0HKfkN64OtoM6dKwotz=s88-c-k-c0x00ffffff-no-rj-mo' title = 'Arpit Sodani' />
            <SidebarRow Icon = {LocalHospitalIcon} title = 'COVID-19 Information Center' />
            <SidebarRow Icon = {EmojiFlagsIcon} title = 'Pages' />
            <SidebarRow Icon = {PeopleIcon} title = 'Friends' />
            <SidebarRow Icon = {ChatIcon} title = 'Messenger' />
            <SidebarRow Icon = {StorefrontIcon} title = 'Marketplace' />
            <SidebarRow Icon = {VideoLibraryIcon} title = 'Videos' />
            <SidebarRow Icon = {ExpandMoreOutlinedIcon} title = 'Marketplace' />

        </div>
    )
}

export default Sidebar
