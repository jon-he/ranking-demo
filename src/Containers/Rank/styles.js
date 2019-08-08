import styled from "styled-components";

const boxItemHeight = 55;

const ContainerBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ListBox = styled.div`
  position: relative;
  margin: 5% auto;
  width: 280px;
  @media screen and (min-width: 320px) {
    margin: 20px auto;
    width: 90%;
    max-width: 480px;
  }
`;

const BoxItem = styled.div`
  position: absolute;
  top: ${props => props.sort * boxItemHeight}px;
  left: 0;
  right: 0;
  transition: top 0.3s ease 0.2s;
  width: 100%;
`;

export { ContainerBox, ListBox, BoxItem };
