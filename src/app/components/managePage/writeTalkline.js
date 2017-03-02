/**
 * Created by Administrator on 2/25/2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styleWtl from './writeTalkline.css';

const style = {
    width:"100%",
    margin: 12,
};

class WrtieTalkline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            talkline:''
        };
    }
    handleChange(evnt){

        this.setState({talkline:evnt.target.value});
    }

    handleSubmit(){
        fetch('/ntl',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'data':this.state.talkline})
        }).then(res=>res.json())
            .then(json =>console.log(json))
            .catch(error=>console.log(error));
    }

    render(){
        return(
            <div className={styleWtl.TalklineArea}>
                <TextField
                    hintText="Write a TalkLine"
                    floatingLabelText="this is the blog body"
                    style={style}
                    multiLine={true}
                    rows={1}
                    value = {this.state.talkline}
                    onChange={this.handleChange.bind(this)}
                />
                <RaisedButton label="submit" primary={true}  type="submit" onClick = {this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

export {WrtieTalkline as default};