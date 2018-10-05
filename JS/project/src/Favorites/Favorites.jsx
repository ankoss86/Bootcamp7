import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx'

class Favorites extends Component {

    state = {

        results: [],
    }

    componentDidMount(){
        let data;
        localStorage.getItem('films') !== null ?
        data = JSON.parse(localStorage.getItem('films')).favorites : null;
        if (data) {
            this.setState({
                results: data
            }) 
        }         
    }

    render() {
        return (
            <div>
                <Grid addToFavoritesHendler={this.props.addToFavoritesHendler} prop={this.state.results}/>
            </div>
        );
    }
}

export default Favorites;