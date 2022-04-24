import React, {Component} from "react";
// export default class React_Refs extends Component{
//     constructor(props) {
//         super(props);
//         this.hoatRef=React.createRef();
//     }
//     handleClick=()=>{
//         this.hoatRef.current.style.borderColor='blue'
//     }
//     render() {
//         return(
//             <div>
//             <input
//             name={"email"}
//             ref={this.hoatRef}
//             type={"text"}
//             />
//             <button
//                 onClick={this.handleClick}
//                 >Focus Input</button>
//             </div>
//         )
//     }
// }
/*Component Con*/
const MyInput=React.forwardRef((props,ref)=>{
    return(
        <input name={props.name} ref={ref}/>
    )
})
//Component Cha
const MyComponent=()=>{
    const ref=React.createRef();
    const handleClick=()=>{
        ref.current.focus()
    }
    return(
        <div>
            <MyInput name="email"
                     ref={ref}/>
            <button onClick={handleClick}>Focus Input</button>
        </div>
    )
}
export default MyComponent