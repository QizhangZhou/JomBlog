/**
 * Created by Administrator on 2/21/2017.
 */
import React from 'react';
import CirclePaper from './circlePaper';
import styleAvatar from './avater.css';
import avatar from '../../img/avatar.jpg'

class Avatar extends React.Component{
    render(){
        let radius = 110;
        if(this.props.radius != null){
            radius = this.props.radius;
        }
        return(
            <div className={styleAvatar.Avatar} style={this.props.style}>
                <CirclePaper img={avatar} radius={radius} />
                <h3>Calvin Zhou</h3>
            </div>
        );
    }
}

export {Avatar as default};