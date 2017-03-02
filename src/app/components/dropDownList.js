/**
 * Created by Administrator on 2/24/2017.
 */
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class DropDownList extends React.Component{
    render(){
        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Write a Blog!" />
                <MenuItem primaryText="Write a TalkLine" />
                <MenuItem primaryText="Settings" />
            </IconMenu>
        );
    }
}

export {DropDownList as default};