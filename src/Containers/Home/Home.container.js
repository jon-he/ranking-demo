import React from 'react';
import { connect } from 'react-redux';
import HomeComponent  from './Home.component';

const HomeContainer = props => <HomeComponent {...props} />;

const mapStateToProps = (state) => {
  return ({
    isFetching: state.listReducer.isFetching,
    data: state.listReducer.data,
    error: state.listReducer.error
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => {
      dispatch({ type: 'FETCH_REQUESTED' })
    },
    randomScore: () => {
      dispatch({ type: 'RANDOM_SCORE' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
