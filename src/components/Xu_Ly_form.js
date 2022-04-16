import React, {Component} from "react";
class Xu_Ly_form extends Component{
   constructor(props) {
       super(props);
       this.state={
           email:''
       }
   }
   changeEmail(event){
       this.setState(
           {
               email: event.target.value
           }
       )
   }
   submitForm(event){
       event.preventDefault();
       alert(this.state.email)
   }
   render(){
       return(
           <div>
               <p>Xử lý form</p>
               <form onSubmit={(event)=>this.submitForm(event)}>
                   <input onChange={(event)=>this.changeEmail(event)} type={"email"} placeholder={"input email"}/>
                   <p>Giá trị nhập vào ô email:{this.state.email}</p>
                   <button type={"submit"}>Submit</button>
               </form>
           </div>
       )
   }
}
export default Xu_Ly_form