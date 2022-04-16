import React, {Component} from "react";
const Notification=(props)=>{
    //kiểm tra giá trị của props
    if (props.isShow){
        return(
            <ul>
                <li>Thông báo 1</li>
                <li>Thông báo 2</li>
            </ul>
        )
    }
    else {
        return null
    }
}
class Render_with_condition extends Component{
    // render() {
    //     var isLogin=true
    //     // if (isLogin){
    //     //     return(
    //     //         <div>
    //     //             <h3>Freetuts.net</h3>
    //     //         </div>
    //     //     )
    //     // }
    //     // else {
    //     //     return (
    //     //         <div>
    //     //             <h3>Vui lòng đăng nhập</h3>
    //     //         </div>
    //     //     )
    //     // }
    //     // const notification=(isLogin)?<h3>Freetuts.net</h3>:<h3>Vui lòng đăng nhập</h3>
    //     return (
    //         // <div>
    //         //     {(isLogin)?<h3>Freetuts.net</h3>:<h3>Vui lòng đăng nhập</h3>}
    //         // </div>
    //         null
    //     )
    // }
    constructor(props) {
        super(props);
        this.state={
            isShowNotification:false
        };
    }
    render() {
        const {isShowNotification}=this.state
        return(
            <div style={{margin:20}}>
                <p>freetuts.net - Lập trình ReactJS</p>
                <button onClick={()=>{
                    this.setState({
                        isShowNotification:!isShowNotification
                    })
                }}>
                    {isShowNotification?"Hiển thị":"Ẩn"}
                </button>
                {/*Gọi component Notification*/}
                <Notification isShow={isShowNotification}/>
            </div>
        )
    }
}
export default Render_with_condition