import React,{Component} from 'react';
import SigIn from './Auth/SignIn';
import LogIn from './Auth/LogIn';
import {Link} from 'react-router-dom'; 
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"sign",
            change:"Log in",
            head: "Sign Up"
        }
    }
    changeHandler=()=>{
        if(this.state.head==="Sign Up"){
            this.setState({head:"Log In"});
        }
        else{
            this.setState({head:"Sign Up"});
        }
        if(this.state.value==="sign"){
            this.setState({value:'login'});}
        else{
            this.setState({value:'sign'});}
        if(this.state.change==="Log in"){
            this.setState({change:"Sign up"});}
        else{
            this.setState({change:"Log in"});}
    }
    error=()=>{
        alert('We have sent recovery code to your email,please check your email!');
    }

    render(){
        const {value}=this.state;
        const {change}=this.state;
        const {head}=this.state;
        return(
            <div className="registr">
                <div className="register">
                    <div className="head">
                            <h1>{head}</h1>
                        <Link to="/">
                            <h2><i className="fas fa-times"></i></h2>
                        </Link>
                    </div>
                    {(value==='sign')?<SigIn/>:<LogIn/>}
                    <div className="buttons">
                        <button>Submit</button>
                        <p><a href="#" onClick={this.changeHandler}>{change}</a></p>
                    </div>
                    {(value==='login')?<p><a href="#" onClick={this.error}> Forgot password?</a></p>:true}
                </div>
            </div>
            
        );
    }
}
export default Register;