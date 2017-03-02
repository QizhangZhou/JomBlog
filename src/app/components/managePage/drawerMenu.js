/**
 * Created by myzqz on 2017/2/25.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Paper from "material-ui/Paper";
import MenuItem from 'material-ui/MenuItem';
import CirclePaper from '../circlePaper';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router';

class DrawerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <IconButton
                    label="Menu"
                    onTouchTap={this.handleToggle.bind(this)}>
                    <CirclePaper radius={40} />
                </IconButton>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Link to='/mag'><MenuItem onTouchTap={this.handleClose.bind(this)}>Setting Index</MenuItem></Link>
                    <Link to='/mag/wBlog'><MenuItem onTouchTap={this.handleClose.bind(this)}>Write a Blog</MenuItem></Link>
                    <Link to='/mag/wTalkline'><MenuItem onTouchTap={this.handleClose.bind(this)}>Write a TalkLine</MenuItem></Link>
                    <Link to='/mag/blogList'><MenuItem onTouchTap={this.handleClose.bind(this)}>Blog List</MenuItem></Link>
                    <Link to='/mag/tlList'><MenuItem onTouchTap={this.handleClose.bind(this)}>TalkLine List</MenuItem></Link>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Setting</MenuItem>
                </Drawer>

            </div>
        );
    }
}

export {DrawerMenu as default};
