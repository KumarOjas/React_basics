import React, { Component } from 'react';
class ErrorBoundary extends Component{
    state = {
        hasError: false,
        Message : ''
    }
    componentDidCatch = (error,info) =>{
        this.setState({ hasError: true, Message: error});
    };
    render(){
        if (this.setState.hasError)
        {
            return <h1>{this.state.Message}</h1>;
        }
        else
        {
            return this.props.children;
        }
    } 
}
export default ErrorBoundary;