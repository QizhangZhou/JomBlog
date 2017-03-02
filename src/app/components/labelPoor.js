/**
 * Created by myzqz on 2017/2/25.
 */
import React from 'react';
import Chip from 'material-ui/Chip';
import styleLp from './labelPoor.css';

class LabelPoor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chips: []
        }
    }
    componentWillMount(){
        const Cothis = this;
        fetch('/getlabel', {
            method: 'GET',
            mode: 'cors',// 避免cors攻击
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                let i=0;
                data.map(function (item) {

                    item.index = i++;
                    item.checked = false;
                })
                Cothis.setState({chips: data});
            });
        })
            .catch(function (e) {
                console.log("Oops, error");
            });
    }
    handleTouchTap(val,index) {
        let chipstate = this.state.chips;
        let selectArray = [];
        chipstate[index].checked = !chipstate[index].checked;
        this.state.chips.map((item)=>{
            if(item.checked){
                selectArray.push(item.Label);
            }
        })
        this.setState({chips:chipstate});
        this.props.handleSelected(selectArray);
    }

    render() {
        var styles = {
            margin: 10,
            float:"left"
        }
        let i = 0;
        return (
            <div className={styleLp.labelArea}>
                { this.state.chips.map(item => {
                    let color,fontColor;
                    if(item.checked){
                        color = "#03A9F4";
                        fontColor="#ffffff"
                    }else{
                        color="#B3E5FC";
                        fontColor="#000000"
                    }
                    return (
                        <Chip
                            onTouchTap={this.handleTouchTap.bind(this, item.Label,item.index)}
                            style={styles}
                            backgroundColor={color}
                            labelColor={fontColor}
                        >
                            {item.Label}
                        </Chip>
                    );
                })}
            </div>
        );
    }
}


export {LabelPoor as default};