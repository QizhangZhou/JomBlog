/**
 * Created by Administrator on 2/28/2017.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import LabelPoor from '../labelPoor';

class LabelDialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            selected:[],
            addLabel:""
        }
    }

    handleOpen(){
        this.setState({open: true});
    };

    handleClose(){
        let slc = this.state.selected;
        this.setState({open: false});
        this.props.handleSelected(slc);
    };

    handleSelected(selectArray){
        this.setState({selected:selectArray});
    }

    handleChange(name,evnt) {
        var newstate = {};
        newstate[name] = evnt.target.value;
        this.setState(newstate);
    }

    handleSubmit(){
        fetch('/addlabel',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "label":this.state.addLabel
            })
        }).then(res=>res.json())
            .then(json =>console.log(json))
            .catch(error=>console.log(error));
    }

    render(){
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];
        return(
            <div>
                <RaisedButton label="Add Label" primary={true}  type="submit" onTouchTap={this.handleOpen.bind(this)}/>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    <Tabs>
                        <Tab label="Select Tabs" >
                            <div>
                                <LabelPoor handleSelected={this.handleSelected.bind(this)}></LabelPoor>
                            </div>
                        </Tab>
                        <Tab label="Add new Tab" >
                            <div>
                                <TextField
                                    hintText=""
                                    floatingLabelText="Input label what you want to add!"
                                    floatingLabelFixed={true}
                                    value = {this.state.addLabel}
                                    onChange={this.handleChange.bind(this,'addLabel')}
                                /><br />
                                <RaisedButton label="Add" backgroundColor="#a4c639" onTouchTap = {this.handleSubmit.bind(this)}/>
                            </div>
                        </Tab>
                    </Tabs>
                </Dialog>
            </div>
        );
    }
}

export {LabelDialog as default};