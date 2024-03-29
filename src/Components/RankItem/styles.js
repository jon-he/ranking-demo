import styled from 'styled-components';

const RankItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  
  .boxLeft {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 0 10px;
  }
`;

export {
    RankItemBox
};
