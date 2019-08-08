import styled from 'styled-components';

const boxItemHeight = 55;

const ContainerBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ListBox = styled.div`
  position: relative;
  margin: 20px auto;
  width: 280px;
  @media screen and (min-width: 350px) {
    width: 70%;
    max-width: 480px;
  }
`;

const BoxItem = styled.div`
  position: absolute;
  top: ${props => props.sort * boxItemHeight }px;
  left: 0;
  transition: top 0.3s ease 0s;
  width: 100%;
  background-color: #d3d7d4;
  border-radius: 5px;
  padding: 5px 14px;
`;

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
  
  .rank {
    width: 15px;
    margin-right: 10px;
    text-align: center;
  }
  
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
  }
`;

export {
  ContainerBox,
  ListBox,
  BoxItem,
  RankItemBox
};
