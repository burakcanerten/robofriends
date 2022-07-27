<<<<<<< HEAD
import React from "react";
import Card from "./Card";




const CardList = ({robots}) => {
    return (
                <div>
                    {robots.map((user, i) => {
                    return (
                        <Card 
                            key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    )
                    })}
                </div> 
            )
}



=======
import React from "react";
import Card from "./Card";




const CardList = ({robots}) => {
    return (
                <div>
                    {robots.map((user, i) => {
                    return (
                        <Card 
                            key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    )
                    })}
                </div> 
            )
}



>>>>>>> b94d1e0d9ad6a2ad45504330b64ea4790eb385d1
export default CardList