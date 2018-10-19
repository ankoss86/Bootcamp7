import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import { connect } from 'react-redux';
import { renderFavorites } from '../redux/actions/favoritesAction';

class Favorites extends Component {

    componentDidMount(){
        this.props.renderFavorite()
    };

    render() {
        return (
            <div>
                <Grid getFullHandler={this.props.getFullHandler} addToFavoritesHendler={this.props.removeFromVavorites} prop={this.props.getFavorites}/>
            </div>
        );
    }
};

function MSTP (state){
    return {
        getFavorites: state.getFavorites,
    }
};

function MDTP(dispatch){
    return {
        renderFavorite: function(){
            dispatch(renderFavorites())
        },
    }
};

export default connect(MSTP, MDTP) (Favorites);