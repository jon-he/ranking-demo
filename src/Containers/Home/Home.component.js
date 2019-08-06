import React, { Component } from 'react';
import RankItem  from '../../Components/RankItem/RankItem.component';
import { ListBox, BoxItem } from './styles';

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

  render() {
    return (
      this.renderList()
    );
  }
}

export default HomeComponent;
