<<<<<<< HEAD
import React, { useState, useEffect }from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";


function  App (){
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    const  onSearchChange = (event) => {
        setSearchfield(event.target.value) 
        
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => setRobots(users))
    }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
     })  
        return (
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots= {filteredRobots}/> 
                    </ErrorBoundry>
                </Scroll>
            </div>
    )}
   



export default App


=======
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
>>>>>>> b94d1e0d9ad6a2ad45504330b64ea4790eb385d1
