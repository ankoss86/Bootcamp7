import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import PropTypes from 'prop-types';
import { asyncNowPlaying } from '../redux/actions/nowPayingAction';
import { asyncCommingSoon } from '../redux/actions/commingSoonAction';
import { connect } from 'react-redux';
import { playNowSort } from '../redux/selector/menuSelectors';


class NowPlaying extends Component {

componentDidMount(){
    this.props.fetchNowPlaying();
    this.props.asyncCommingSoon();
}        

    render() {
        return (
            <div>
                <Grid prop={this.props.results} addToFavoritesHendler={this.props.addToFavoritesHendler}/>
            </div>
        );
    }
}

function MSTP (state) {
    return {
        results: playNowSort(state),
    }
}

function MDTP (dispatch) {
    return {
        fetchNowPlaying: function(){
            dispatch(asyncNowPlaying())
        },

        asyncCommingSoon: function(){
            dispatch(asyncCommingSoon())
        },

    }
}

export default connect(MSTP, MDTP) (NowPlaying);