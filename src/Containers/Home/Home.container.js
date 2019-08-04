import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles.css';

class Home extends Component {
  componentDidMount(){
    const { fetchList } = this.props;
    fetchList();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
