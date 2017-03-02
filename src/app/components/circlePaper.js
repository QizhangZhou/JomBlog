/**
 * Created by myzqz on 2017/2/19.
 */
'use strict'
import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class CirclePaper extends React.Component {
    render() {
        style.backgroundImage = this.props.img;
        style.height = this.props.radius;
        style.width = this.props.radius;
        return (
            <div radius={this.props.radius} className={this.props.className}>
                <Paper style={style} zDepth={2} circle={true}></Paper>
            </div>
        );
    }
}

export {CirclePaper as default};