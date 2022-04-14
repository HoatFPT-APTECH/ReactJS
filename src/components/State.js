import React, {Component} from "react";
class State extends Component{
    constructor(props) {
        super(props);
        // chỉ định một state
        this.state={index:1};
        }
        render() {
        console.log(this.state.index)
        return(
            <div>

                <p>Giá trị {this.state.index}</p>
                <button onClick={()=>{
                    this.setState({
                        index: this.state.index +1
                    })
                }}>Tăng</button>
                <button onClick={()=>{
                    this.setState({
                      index: this.state.index-1
                    })
                }}>Giảm</button>
            </div>
        )
        }
}
export default State