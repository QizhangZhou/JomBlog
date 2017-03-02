/**
 * Created by myzqz on 2017/2/19.
 */
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import CirclePaper from "../circlePaper";
import style from "./circleMenu.css";
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
                <Link to="/blog">{iconMenu("url('src/img/indexBlogIcon.png')")}</Link>
                <Link to="/blog/pageblog">{iconMenu("url('src/img/indexTalkIcon.png')")}</Link>
                <Link to="/mag">{iconMenu("url('src/img/indexLabIcon.png')")}</Link>
            </div>
        );
    }
}

export {CircleMenu as default};