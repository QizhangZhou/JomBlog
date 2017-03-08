/**
 * Created by Administrator on 3/8/2017.
 */
import React from "react";
import Chip from "material-ui/Chip";

class ChipBar extends React.Component{
    render(){
        let label = this.props.label
        return(
            <div style={this.props.style}>
            {label.map(function(item){
                return(
                    <Chip
                        style={{margin:"4px",float:"right"}}
                        backgroundColor={"#acbfff"}
                        labelColor={"#ffffff"}
                    >
                        {item}
                    </Chip>);
            })}
            </div>
        );
    }
}

export {ChipBar as default};