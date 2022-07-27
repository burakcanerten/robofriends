<<<<<<< HEAD
import React, { Component } from "react";


class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

componentDidCatch(error, info) {
    this.setState({hasError: true})
}


    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good.</h1>
        }
        return this.props.children
    }
}


=======
import React, { Component } from "react";


class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

componentDidCatch(error, info) {
    this.setState({hasError: true})
}


    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good.</h1>
        }
        return this.props.children
    }
}


>>>>>>> b94d1e0d9ad6a2ad45504330b64ea4790eb385d1
export default ErrorBoundry