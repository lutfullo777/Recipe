import React,{Component} from 'react';
import SigIn from './Auth/SignIn';
import LogIn from './Auth/LogIn';
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"sign",
            change:"Log in"
        }
    }
    changeHandler=()=>{
        if(this.state.value==="sign"){
        this.setState({value:'login'});}
        else{this.setState({value:'sign'});}
        if(this.state.change==="Log in"){
        this.setState({change:"Sign up"});}
        else{this.setState({change:"Log in"});}
    }
    render(){
        const {value}=this.state;
        const {change}=this.state;
        return(
            <div className="register">
                {(value==='sign')?<SigIn/>:<LogIn/>}
                <div className="buttons">
                    <button>Submit</button>
                    <p><a href="#" onClick={this.changeHandler}>{change}</a></p>
                </div>
                {(value==='login')?<p><a href="#"> Forgot password?</a></p>:console.log('hi')}
            </div>
            
        )
    }
}
export default Register;