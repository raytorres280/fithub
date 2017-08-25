import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

import MealsTabStore from '../stores/MealsTabStore';
import Meal from './Meal';
import MealActions from '../actions/MealActions';

const meals = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});

export default class MealsTab extends Component {

  constructor() {
    super();
    this.state = {
      mealList: meals
    }
  }

  componentWillMount() {
    let user = this.props.user;
    let rows = MealsTabStore.getMeals();
    if (rows == undefined) {
      rows = []
    }
    this.setState({
      mealList: meals.cloneWithRows(rows)
    });
  }

  componentDidMount() {
    MealsTabStore.addListener('change', () => {
      let rows = MealsTabStore.getMeals();
      this.setState({
        mealList: meals.cloneWithRows(rows)
      });
    });
  }

  render() {
    return(
      <View style={styles.list}>
        <ListView
          dataSource={this.state.mealList}
          renderRow={(rowData => {
            return <Meal
              id={rowData.id}
              name={rowData.name}
            />
          })}
        />
      </View>
    );
  }

}
const styles = StyleSheet.create({
  list:{
    backgroundColor: '#f0f8ff',
    flex: 1
  } //dont style container here. only things within container.
})

AppRegistry.registerComponent('MealsTab', () => MealsTab);
