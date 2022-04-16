import React, {Component} from "react";
export default class Key extends Component{
    render(){
        const myList=[
            {
                id:"p",
                name:"php"
            },
            {
                id:"j",
                name:"Javascript"
            },
            {
                id:"py",
                name:"Python"
            },
            {
                id:"C",
                name:"C++"
            }
        ];
        const listItem=myList.map((item)=>{
            return (
                <li key={item.id}>{item.name}</li>
                )
        })
        return (
            <ul>{listItem}</ul>
        )
    }
}