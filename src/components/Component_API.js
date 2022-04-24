import React, {Component} from "react";
import ReactDOM from "react-dom";
 class Component_API extends Component {
     constructor(props) {
         super(props);
         this.state = {
             index: 1,
             title:"Mai Huy Hoat đang học ReactJs"
         }
     }

     countDown() {
         this.setState({
             index: this.state.index - 1
         })
     }

     countUp() {
         this.setState(function (prevState, props) {
             return {
                 index: prevState.index+1
             }
         })
     }
    changeColor(){
         var title=document.getElementById('title')
        ReactDOM.findDOMNode(title).style.color='blue'
    }
    changeTitle(){
         this.setState({
             title:"Mai Huy Hoạt vô địch thiên hạ"
         })
    }
     render() {
         return (
             <div>
                 <p>Giá trị :{this.state.index}</p>
                 <button onClick={()=>this.countUp()}>Up</button>
                 <button onClick={()=>this.countDown()}>Down</button>
                 <div>
                     <p> Giá trị random:{Math.random()}</p>
                     <button onClick={()=>{
                         this.forceUpdate()
                     }}>Update Random</button>
                 </div>
                 <div>
                     <h1 id='title'>Tiêu đề</h1>
                     <button onClick={()=>this.changeColor()}>Change color</button>
                 </div>
                 <div>
                     <h1>{this.state.title}</h1>
                     < button onClick={()=>this.changeTitle()}>Change Title</button>
                 </div>
             </div>
         )
     }
 };
 export default Component_API