import React, { Component } from 'react';
import RankItem  from '../../Components/RankItem/RankItem.component';
import { ContainerBox, ListBox, BoxItem } from './styles';

const intervalDefault = 500;

class HomeComponent extends Component {
  async componentDidMount(){
    const { fetchList, randomScore } = this.props;
    await fetchList();
    this.timer = setInterval(randomScore, intervalDefault);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  renderList = () => {
    const { data } = this.props;
    return (
      <ListBox>
        {
          data.map((item, index) => (
            <BoxItem
              key={item.userID}
              index={index}
            >
              <RankItem
                item={item}
                index={index}
              />
            </BoxItem>
          ))
        }
      </ListBox>
    );
  };

  renderError = () => {
    return (
      this.props.error ? <div>Error</div> : null
    );
  };

  renderLoading = () => {
    return (
      this.props.isFetching ? <div>Loading...</div> : null
    );
  };

  render() {
    return (
      <ContainerBox>
        {this.renderList()}
        {this.renderLoading()}
        {this.renderError()}
      </ContainerBox>
    );
  }
}

export default HomeComponent;
