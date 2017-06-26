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

const meals = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2})

export default class MealsTab extends Component {

  constructor() {
    super();
    this.state = {
      meals: meals.cloneWithRows(MealsTabStore.getMeals())
    }
  }

  componentWillMount() {
    // MealsTabStore.on('change', () => {
    //   this.setState({
    //     meals: meals.cloneWithRows(MealsTabStore.getMeals())
    //   });
    // });
  }

  render() {
    return(
      <View style={styles.list}>
        <ListView
          dataSource={this.state.meals}
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
    backgroundColor: "teal",
    flex: 1
  } //dont style container here. only things within container.
})

AppRegistry.registerComponent('MealsTab', () => MealsTab);
