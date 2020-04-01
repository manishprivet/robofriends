import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        const { hasError } = this.state;
        if(hasError) {
            return <h1>Oops</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;