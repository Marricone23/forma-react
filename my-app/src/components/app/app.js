import { Component } from "react";

import "./app.scss";

class App extends Component {
constructor (props){
    super(props);
    this.state = {
        name: '',
        email: '',
        tel: '',
        date: '',
        text: '',
        nameValid: false,
        nameLatin:''
    }
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState(({name}) =>{
     console.log('insert')
  });
}

onValueNameChange = (e) => {
  var regExp = '^[a-zA-Z]+$'; 
    this.setState({
      name:e.target.value

      return{

      }
  });  

}

onValueChange = (e) => {
   this.setState({
      [e.target.name]:e.target.value     
  });
}
    

    render(){
      const {name, email, tel, date, text} = this.state;
     
        return (
           <form novalidate onSubmit = {this.handleSubmit}>
             <div className="container form">               
                <span class="lable">ФИО: </span>            
                  <input type="text" 
                  className="name" 
                  name="name" 
                  value ={name} 
                  onChange = {this.onValueNameChange}                 
                  placeholder="name"
                  minLength={3} 
                  maxLength={10}></input>                           
                <span class="lable"> E-mail:</span> 
                  <input type="text" 
                  className="email"
                   name="email" 
                   value={email}
                   onChange = {this.onValueChange} 
                   placeholder="insert your mail adress" required></input>              
                <span class="lable">Tel:</span> 
                  <input type="tel"
                   className="tel" 
                   name="phone" 
                   value={tel} 
                   onChange = {this.onValueChange}  
                   placeholder="insert your number" required></input>                             
                <span class="lable">Date of Birth:</span> 
                  <input
                   type="date" id="date" 
                   className="calendar" 
                   name="date"
                   onChange = {this.onValueChange}  
                   value={date} required></input>
                  <input 
                  className = "btn" 
                  type="submit" 
                  onChange = {this.onValueChange} 
                  value="Отправить"></input>              
                <span class="lable">Message:</span> 
                  <textarea
                   className="text-field" 
                   name="text"
                   value={text} 
                   minLength={10} 
                   maxLength={300} 
                   onChange = {this.onValueChange} 
                   placeholder="write your message"></textarea>
                  <button
                  className = "btn" type="button">Send</button>                                  
             </div>            
           </form>

        )
    }
}

export default App;