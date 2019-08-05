import React, { Component } from 'react';
import { connect } from 'react-redux';

import RankItem  from '../../Components/RankItem';

class Home extends Component {
  async componentDidMount(){
    const { fetchList, randomScore } = this.props;
    await fetchList();
    this.timer = setInterval(randomScore, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  renderList = () => {
    const { data } = this.props;
    return (
      <div>
        {
          data.map((item, index) => (
            <RankItem
              key={item.userID}
              item={item}
              index={index}
            />
          ))
        }
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderList()}
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
    },
    randomScore: () => {
      dispatch({ type: 'RANDOM_SCORE' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
