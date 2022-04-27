import React, {Component} from "react";
const Freetuts=(props)=>{
    return(
        <div>
            {props.render({
                value:"Freetuts.net"
            })}
        </div>
    )
}
class Render_Props extends Component{
    render() {
        return(
            <Freetuts render={(data)=>(
                <p>welcome to {data.value}</p>
            )}/>
        )
    }
}
export default Render_Props