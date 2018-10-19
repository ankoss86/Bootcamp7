import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import PropTypes from 'prop-types';
import { asyncCommingSoon } from '../redux/actions/commingSoonAction';
import { connect } from 'react-redux';

class CommingSoon extends Component {

    componentDidMount(){
        this.props.fetchCommingSoon();
    };    

    render() {
        return (
            <div>
                <Grid prop={this.props.results} addToFavoritesHendler={this.props.addToFavoritesHendler}/>   
            </div>
        );
    }
}

CommingSoon.propTypes = {
    
    addToFavoritesHendler: PropTypes.func,
};


function MSTP (state) {
    return {
        results: state.getCommingSoon,
    }
};

function MDTP (dispatch) {
    return {
        fetchCommingSoon: function(){
            dispatch(asyncCommingSoon())
        }
    }
};

export default connect(MSTP, MDTP) (CommingSoon);