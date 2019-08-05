import React from 'react';

const RankItem = ({ item, index }) => {
  return (
    <div>
      <div>{index + 1} {item.displayName} {item.score}</div>
    </div>
  );
};

export default RankItem;
