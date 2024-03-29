import React, {Component} from 'react'
import Title from './Title'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import {removePost} from '../redux/actions'
import Single from './Single'

//http://localhost:3000/

class Main extends Component {
    //state management
    // constructor() {
    //     super()
    // }

    //loading all the posts
    state = { loading: true }

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    render() {
        //console.log(this.props)
        {/* component state navigation and route */} 
        return (
        <div>  
            <h1> 
                <Link to="/">Photowall</Link>
            </h1>
            <Route exact path = "/" render={() => (
                <div>  
                    <Photowall {...this.props} />
                </div>
            )}/>
              
            <Route path = "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )}/> 

            <Route path="/single/:id" render = {(params) => (
                <Single loading={this.state.loading} {...this.props} {...params} />
            )}/>
        </div>
        )
    }
}

export default Main