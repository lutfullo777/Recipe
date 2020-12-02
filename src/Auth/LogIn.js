import React,{Component} from "react";
import '../all.min.js';
class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="registerme">
                    <form>
                    <p>
                        <input type="email" placeholder="Enter email" defaultValue=""/>
                        <i className="fas fa-at"></i>
                    </p>
                    <p>
                        <input type="password" placeholder="Enter password" defaultValue=""/>
                        <i className="fas fa-key"></i>
                    </p>
                </form>
            </div>
        )
    }
}
export default LogIn;