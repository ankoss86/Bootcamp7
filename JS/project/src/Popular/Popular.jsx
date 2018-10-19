import React, { Component } from 'react';
import axios from 'axios';
import './Popular.css';
import PopularCard from '../PopularCard/PopularCard';
import { connect } from 'react-redux';
import { asyncPopular } from '../redux/actions/popularAction';
import { asyncFullInfo } from '../redux/actions/oneFilmInfoAction';


class Popular extends Component {

componentDidMount(){
    this.props.fetchPopular()
};

    render() {
        return (
            <div className='wish'>
                <p className="best">Today best choise</p>
                <div className='as'>
                {this.props.getPopular.map(el => <PopularCard key={Math.random()*1000} id={el.id} title={el.title} rating={el.vote_average} img={el.poster_path}/>)}
                </div>
            </div>
        );
    }
};

function MSTP (state) {
    return {
        getPopular: state.getPopular,
    };
};

function MDTP (dispatch) {
    return {
        fetchPopular: function(){
            dispatch(asyncPopular())
        },

        getFullInfo: function(id){
            dispatch(asyncFullInfo(id))
        },
    };
};

export default connect(MSTP, MDTP) (Popular);