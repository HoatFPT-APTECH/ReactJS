import React, {Component} from "react";
export default class React_Refs extends Component{
    constructor(props) {
        super(props);
        this.hoatRef=React.createRef();
    }
    handleClick=()=>{
        this.hoatRef.current.style.borderColor='blue'
    }
    render() {
        return(
            <div>
            <input
            name={"email"}
            ref={this.hoatRef}
            type={"text"}
            />
            <button
                onClick={this.handleClick}
                >Focus Input</button>
            </div>
        )
    }
}