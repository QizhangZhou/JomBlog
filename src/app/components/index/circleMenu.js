/**
 * Created by myzqz on 2017/2/19.
 */
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import CirclePaper from "../circlePaper";
import style from "./circleMenu.css";
import blogIcon from "../../../img/indexBlogIcon.png";
import talkIcon from "../../../img/indexTalkIcon.png";
import labIcon from "../../../img/indexLabIcon.png";
import {Link} from 'react-router';

const iconMenu = (image) => {
    return (
    <CirclePaper img={image} radius={80} className={style.menuItem}/>
    )
    ;
}

class CircleMenu extends React.Component {
    render() {
        return (
            <div className={style.menu}>
                <Link to="/blog">{iconMenu(blogIcon)}</Link>
                <Link to="/talkline">{iconMenu(talkIcon)}</Link>
                <Link to="/introduction">{iconMenu(labIcon)}</Link>
            </div>
        );
    }
}

export {CircleMenu as default};