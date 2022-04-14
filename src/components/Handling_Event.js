import React, {Component} from "react";
class Handling_Event extends Component{
    constructor(props) {
        super(props);
        //Khởi tạo inital state
        this.state={
            isShow:true,
            textareaChange:"",
            buttonClick:"",
            mouseOver:""
        }
        //bind thí cho functions mouseOver để tránh gặp lỗi
        //không tồn tại biến this
        // this.mouseOver=this.mouseOver.bind(this)
    }
    //function hidden or show
    toggleMSG(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    changeText(e){
        this.setState({
            textareaChange:e.target.value
        })
    }
    mouseOver(){
        this.setState({
            mouseOver:this.state.mouseOver+"Bạn vừa di chuột vào tôi hả ?"
        })
    }
    render() {
        return(
            <div>
                <p>Handling_Event</p>

                    <h2 style={{color:"red"}}>{this.state.isShow?"Đây là nội dung đang được hiển thị":""}</h2>
                    <button onClick={()=>this.toggleMSG()}>{
                        this.state.isShow?"HIDDEN":"SHOW"
                    }</button>
                <div style={{marginTop:'20px'}}>
                    <button onClick={()=>{
                        this.setState({
                            buttonClick:this.state.buttonClick+"onclick..."
                        })
                    }}>Click me...</button>
                    <p>
                        button:<code>{this.state.buttonClick}</code>
                    </p>
                    <hr></hr>
                    <textarea onChange={(e)=>this.changeText(e)} placeholder={"Nhập cái gì đó"}></textarea>
                    <p>
                        Textarea:{this.state.textareaChange}
                    </p>
                    <hr></hr>
                    <h6 onMouseOver={()=>this.mouseOver()}>Di chuột vào đây nè người anh em ak!</h6>
                    <p>
                        mouseOver:{this.state.mouseOver}Mai huy hoat
                    </p>
                </div>
            </div>
        )
    }
}
export default Handling_Event