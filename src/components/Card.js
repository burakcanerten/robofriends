<<<<<<< HEAD
import React from 'react'

const Card = ({ name, email, id}) => {
    
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}   




=======
import React from 'react'

const Card = ({ name, email, id}) => {
    
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}   




>>>>>>> b94d1e0d9ad6a2ad45504330b64ea4790eb385d1
export default Card