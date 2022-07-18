import React, { Component }from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";


class App extends Component {
    constructor() {
        super()
        this.state = {          
                        robots: [],
                        searchfield: ''
            }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

     componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
          return response.json(); 
        }).then(users => {
            this.setState({robots: users})
        })
        
     }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                )
            }) 
            console.log(filteredRobots)
        return (
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots= {filteredRobots}/> 
                    </ErrorBoundry>
                </Scroll>
            </div>
        
    )}
   
}


export default App