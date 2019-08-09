import React, { Component } from "react";

import ListItem from "../../Components/ListItem";
import { ContainerBox, ListBox, BoxItem } from "./styles";
import data from "../../data/data";

const intervalDefault = 500;

class RankContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: data
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.randomScore, intervalDefault);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setNewData = data => {
    const { dataList } = this.state;
    const newData = [];
    dataList.forEach(item => {
      data.forEach(listItem => {
        if (listItem.userID === item.userID) {
          newData.push({
            ...listItem,
            sort: listItem.sort
          });
        }
      });
    });
    this.setState({
      dataList: newData
    });
  };

  randomScore = () => {
    const { dataList } = this.state;
    const dataLength = dataList && dataList.length ? dataList.length : 0;
    if (dataLength) {
      const randomItem = Math.floor(Math.random() * dataLength);
      const randomValue = Math.floor(Math.random() * 10000);
      const newData = dataList
        .map((item, index) => {
          if (index === randomItem) {
            return {
              ...item,
              preScore: item.score,
              score: item.score + randomValue
            };
          }
          return item;
        })
        .sort((a, b) => b.score - a.score)
        .map((item, index) => {
          return {
            ...item,
            sort: index
          };
        });
      this.setNewData(newData);
    }
  };

  renderList = () => {
    const { dataList } = this.state;
    return (
      <ListBox>
        {dataList.map(item => (
          <BoxItem key={item.userID} sort={item.sort}>
            <ListItem item={item} />
          </BoxItem>
        ))}
      </ListBox>
    );
  };

  render() {
    return <ContainerBox>{this.renderList()}</ContainerBox>;
  }
}

export default RankContainer;
