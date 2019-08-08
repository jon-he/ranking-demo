import styled from "styled-components";

const RankItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  background-color: #d3d7d4;
  border-radius: 5px;
  padding: 5px 14px;

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

export { RankItemBox };
