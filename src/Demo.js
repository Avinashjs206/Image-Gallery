import React from 'react';
import './Demo.css'

const Car = ({name}) =>{
    return <div className = 'maindiv_style'>
                <h2>Hi I am a {name}!</h2>
                <p>Today I am so happy.</p>
                </div>
}

// class Car extends React.Component {
//     render() {
//       return <div className = 'maindiv_style'>
//                 <h2>Hi I am a {this.props.name}!</h2>
//                 <p>Today I am so happy.</p>
//             </div>
      
    
//     }
//   }
export default Car;