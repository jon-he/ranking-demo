import styled from 'styled-components';

const boxItemHeight = 45;

const ContainerBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ListBox = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 10px;
  width: 320px;
`;

const BoxItem = styled.div`
  position: absolute;
  top: ${props => props.index * boxItemHeight}px;
  left: 0;
  transition: top 0.2s linear 0.1s;
  width: 100%;
  height: ${boxItemHeight}px;
  background-color: #fff;
`;

export {
  ContainerBox,
  ListBox,
  BoxItem
};
