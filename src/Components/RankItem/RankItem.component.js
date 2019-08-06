import React from 'react';
import { RankItemBox } from './styles';

const RankItem = ({ item, index }) => {
  return (
    <RankItemBox>
      <div className="boxLeft">
        <div>{index + 1}</div>
        <div><img src={item.picture} alt={item.displayName} /></div>
        <div>{item.displayName}</div>
      </div>
      <div className="boxScore">{item.score}</div>
    </RankItemBox>
  );
};

export default RankItem;
