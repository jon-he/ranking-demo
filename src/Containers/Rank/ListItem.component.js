import React, { Component } from 'react';
import { RankItemBox } from './styles';

class ListItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: props.item.score,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { score } = this.state;
    const { item: { score: newScore, preScore } } = this.props;
    let timer = null;
    if (newScore > score) {
      const preStep = Math.floor((newScore - preScore) / 10);
      timer = requestAnimationFrame(() => {
        this.setState({ score: score + preStep });
      });
    } else {
      cancelAnimationFrame(timer);
    }
  }

  render() {
    const { item } = this.props;
    const { score } = this.state;
    return (
      <RankItemBox>
        <div className="boxLeft">
          <div className="rank">{item.sort + 1}</div>
          <div><img src={item.picture} alt={item.displayName} /></div>
          <div>{item.displayName}</div>
        </div>
        <div className="boxScore">{score}</div>
      </RankItemBox>
    );
  }
}

export default ListItemComponent;
