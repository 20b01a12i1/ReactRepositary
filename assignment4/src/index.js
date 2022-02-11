import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Code from './Code'
import Button from './Button'
const App = () => {
    return(
        <div className='centerstyle'>
        <Button>
            <Code/>
        </Button>
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)