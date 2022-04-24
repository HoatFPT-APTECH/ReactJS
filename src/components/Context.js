import React, {Component} from "react";
// const ComponentChau=(props)=>{
//     return <h1>Ông bảo là :"{props.message}"</h1>
// }
// const ComponentCha=(props)=>{
//     return <ComponentChau {...props}/>
// }
// const ComponentOng=()=>{
//     const message="vào học lập trình Reactjs";
//     return(
//     <ComponentCha message={message}/>)
// }
// export default ComponentOng;
// const MessageContext= React.createContext();
// export default class Context extends Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.}</h1>
//             </div>
//         );
//     }
// // }
const MessegeContext=React.createContext("hoat");
class ComponentChau extends Component{

    render() {
        return ( <h1>Ông bảo là:"{this.context.defaul}"</h1>)
        console.log(this.context.defaul)
    }
}
ComponentChau.contextType=MessegeContext;
class Input extends Component{
    render() {
        return(
            <input type={"text"} name={"change"} onChange={(event )=>{
            this.context.update(event.target.value)
            }}/>
        )
    }
}
Input.contextType=MessegeContext
class ComponentOng extends Component{
    constructor(props) {
        super(props);
        this.state={
         tinNhan:""
        }
    }
    changeMessage(props){
        this.setState({
            tinNhan: props
        })
    }
    render() {
        return(
            <div>
            <MessegeContext.Provider value={{
                defaul:this.state.tinNhan,
                update:this.changeMessage.bind(this)
            }}>
                <MessegeContext.Consumer>
                    {(value)=>(
                        <>
                            <ComponentChau/>
                            <Input/>
                        </>
                    )}
                </MessegeContext.Consumer>
                {/*<ComponentChau/>*/}
            </MessegeContext.Provider>
            </div>
        )
    }

}
export default ComponentOng
// const NumberContext=React.createContext();
// class UpdateNumber extends Component{
//     render() {
//         return(
//             <button onClick={()=>{
//                 console.log(this.context.update())
//             }}>Update Number</button>
//         )
//     }
// }
// UpdateNumber.contextType=NumberContext;
// class ShowNumber extends Component{
//     render() {
//         return(
//             <p>{this.context.number}</p>
//         )
//     }
// }
// ShowNumber.contextType=NumberContext;
// export default class ContextComponent extends Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             number:0,
//         }
//     }
//     updateNumber=()=>{
//         this.setState({
//             number:Math.random(),
//         })
//     }
//     render(){
//         return(
//             <NumberContext.Provider
//                 value={{
//                     number:this.state.number,
//                     update:this.updateNumber.bind(this)
//                 }}
//                 >
//                 <NumberContext.Consumer>
//                     {(value)=>(
//                         <>
//                         <ShowNumber/>
//                             <UpdateNumber/>
//                         </>
//                     )}
//                 </NumberContext.Consumer>
//             </NumberContext.Provider>
//         )
//     }
// }