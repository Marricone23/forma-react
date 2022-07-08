import { Component } from "react";
import reply from "../resources/reply.json";

class FormaService extends Component {
    constructor(props){
        super(props);
        this.state = {      
            success: "Спасибо! Мы скоро свяжемся с Вами",
            failure: "Что-то пошло не так...",
            list:[]
        }
        
    }

componentDidMount = ()=> {
const xvr = new XMLHttpRequest();

xvr.open("GET", 'js/reply.json')
xvr.onreadystatechange = () => {
    if(xvr.readyState === 4 && xvr.status === 200){
        console.log(xvr.success)
        console.log(JSON.parse(xvr.responseText))
        this.state.list =JSON.parse(xvr.response)
        this.setState(this.state)
    }
}  

xvr.open("GET", 'js/reply.json')
xvr.send()


}

}

export default FormaService;