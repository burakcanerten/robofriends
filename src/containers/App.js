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


