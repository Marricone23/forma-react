import { Component } from "react";

import "./app.scss";

class App extends Component {
constructor (props){
    super(props);
    this.state = {
        name: '',
        mail: '',
        tel: '',
        date: '',
        text: ''
    }
}

onValueChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}
    render(){
        const {name, mail, tel, date, text} = this.state;

        return (
           <form>
             <div className="container form">
               
                <span class="lable">ФИО: </span>            
                  <input type="text" 
                  className="name" 
                  name="name" 
                  value ={name} 
                  onChange = {this.onValueChange}
                  placeholder="name"
                  minLength={3} 
                  maxLength={10}></input>                           
                <span class="lable"> E-mail:</span> 
                  <input type="text" 
                  className="email"
                   name="email" 
                   value={mail}
                   onChange = {this.onValueChange} 
                   placeholder="insert your mail adress" required></input>              
                <span class="lable">Tel:</span> 
                  <input type="tel"
                   className="tel" name="phone" value={tel} placeholder="insert your number" required></input>                             
                <span class="lable">Date of Birth:</span> 
                  <input type="date" id="date" className="calendar" name="date" value={date} required></input>
                  <input 
                  className = "btn" type="submit" value="Отправить"></input>              
                <span class="lable">Message:</span> 
                  <textarea
                   className="text-field" value={text} minLength={10} maxLength={300} placeholder="write your message"></textarea>
                  <button
                  className = "btn" type="button">Send</button>  
                                
             </div>            
           </form>

        )
    }
}

export default App;