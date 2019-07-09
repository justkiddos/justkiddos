import React, {Component} from 'react'

class List extends Component {
    //render method: to return what we would like to see in the screen
    render() {
        return (<ol> 
            {this.props.tasks.map((task, index) => <li key = {index}> {task} </li>)}   
        </ol>)
    }
}

export default List