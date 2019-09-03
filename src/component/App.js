import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Lefter from './Lefter'
import '../index.css'

class App extends React.Component {
    render(){
        return (
            <div className='leftMenu'>
                <Lefter />
            </div>
            
        )
    }
}

export default App