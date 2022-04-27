import React, {Component} from "react";
const Image=()=> {
    return (
        <img src={"https://ohman.vn/storage/community/comments/anh-con-gai-xinh-de-thuong-12.jpg"} alt={"Freetuts"}/>
    )
 }
const withHoverOpacity=(QmageComponent)=>{
    return(
        class HoverComponent extends Component{
            constructor(props) {
                super(props);
                this.state={
                    opacity:1,
                }
                this.onMouseLeave=this.onMouseLeave.bind(this);
                this.onMouseEnter=this.onMouseEnter.bind(this);
            }
            onMouseEnter(){
                this.setState({
                    opacity:0.5,
                })
            }
            onMouseLeave(){
                this.setState({
                    opacity:1
                })
            }

            render() {
                return(
                    <React.Fragment>
                        <div
                            style={{opacity:this.state.opacity}}
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}>
                        <QmageComponent/>
                        </div>
                    </React.Fragment>
                )
            }
        }
    )
};



const Image1=()=>{
    return(
        <img src={"https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"} alt={"Gái xinh 1"}/>
    )
}
const  Image2=()=>{
    return(
        <img src={"data:image/jpeg;base64,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"} alt={"Gái xinh 2"}/>
    )
}
const ImageWithHoverOpacity1=withHoverOpacity(Image1),
    ImageWithHoverOpacity2=withHoverOpacity(Image2);
export default function (){
    return(
        <React.Fragment>
            <>
                <ImageWithHoverOpacity1/>
                <ImageWithHoverOpacity2/>
            </>
        </React.Fragment>
    )
}