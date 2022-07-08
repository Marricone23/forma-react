import { Component } from "react";
import FormaService from "../../services/FormaServices";

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
        nameLatin:'',
        required: true,
        minLength: 3,
        maxLength: 30,
        pattern:`([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){3,30}`,
        telpattern: '^((\+7|7|8)+([0-9]){10})$'
       
    }
   
}

formaService = new FormaService()

handleSubmit = (e) => {
  e.preventDefault()
  this.setState(({name}) =>{
     console.log('insert')
  });
}

onValueNameChange = (e) => {
   this.setState({      
    name:e.target.value.toUpperCase()    
  })  
}

onValueChange = (e) => {
   this.setState({
      [e.target.name]:e.target.value     
  });
  }

  onValueTelChange = (e) => {
      this.setState({
       tel:e.target.value     
   })
   }
  
  requiredForm =(required)=> {
    this.setState({
      required: !required
    })
  }  
  

    render(){
      const {name, email, tel, date, text, required, pattern, telpattern} = this.state;
     
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
                  maxLength={21}
                  required = {required} 
                  pattern = {pattern}
                  ></input>                           
                
                <span class="lable"> E-mail:</span> 
                  <input type="text" 
                  className="email"
                   name="email" 
                   value={email}
                   onChange = {this.onValueChange} 
                   placeholder="insert your mail adress" 
                   pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
                   required = {required}></input>    

                <span class="lable">Tel:</span> 
                  <input type = "tel"
                   className = "tel" 
                   name = "phone" 
                   value = {tel} 
                   onChange = {this.onValueTelChange}  
                   placeholder ="+7(___)___-__-__" 
                   telpattern = {telpattern}
                   pattern = '^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$'
                   required = {required}></input>       

                <span class="lable">Date of Birth:</span> 
                  <input
                   type="date" id="date" 
                   className="calendar" 
                   name="date"
                   onChange = {this.onValueChange}  
                   value={date} 
                   required = {required}></input>
                   
                <span class="lable">Message:</span> 
                  <textarea
                   className="text-field" 
                   name="text"
                   value={text} 
                   minLength={10} 
                   maxLength={300} 
                   onChange = {this.onValueChange} 
                   placeholder="write your message"
                   required = {required}></textarea>
                  <input 
                  className = "btn" 
                  type="submit" 
                  onChange = {this.onValueChange} 
                  value="Отправить"></input>                                   
             </div>            
           </form>

        )
    }
}

export default App;