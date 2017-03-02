/**
 * Created by Administrator on 2/21/2017.
 */
import React from 'react';
import CirclePaper from './circlePaper';
import styleAvatar from './avater.css';

class Avatar extends React.Component{
    render(){
        let radius = 110;
        if(this.props.radius != null){
            radius = this.props.radius;
        }
        return(
            <div className={styleAvatar.Avatar}>
                <CirclePaper img={("url('src/img/avatar.jpg')")} radius={radius} />
                <h3>Calvin Zhou</h3>
            </div>
        );
    }
}

export {Avatar as default};