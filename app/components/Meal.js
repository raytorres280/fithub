import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'

import MealsTabStore from '../stores/MealsTabStore';
import LogsTabStore from '../stores/LogsTabStore';
import * as MealActions from '../actions/MealActions';

export default class Meal extends Component {
  constructor(props) {
    super(props)
    //console.log('building meal..')

  }

  addMealToLog() {
    //console.log('adding meal to log');
    //console.log(this.props);
    let mealLog = {
      log_id: LogsTabStore.getActiveLog().id,
      meal_id: this.props.id,
    }
    //console.log(mealLog);
    MealActions.addMealToLog(mealLog);
  }

  render() {
    return (
      <View style={ styles.card }>
          <Text>{this.props.id} {this.props.name}</Text>
          <Image
            style={{ width:64 , height: 64 }}
            source={{ uri: addIcon, scale: 1 }}
          />
          <Button
            title="Add"
            color="purple"
            onPress={() => this.addMealToLog()}
          />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  card: {
    // height: ,
    // width: ,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  addBtn: {
    backgroundColor: "purple"
  }
});

const addIcon = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ0LjIzOCA0NC4yMzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0LjIzOCA0NC4yMzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjIuMTE5LDQ0LjIzN0M5LjkyMiw0NC4yMzcsMCwzNC4zMTUsMCwyMi4xMkMwLDkuOTI0LDkuOTIyLDAuMDAxLDIyLjExOSwwLjAwMVM0NC4yMzgsOS45MjMsNDQuMjM4LDIyLjEyICAgIFMzNC4zMTQsNDQuMjM3LDIyLjExOSw0NC4yMzd6IE0yMi4xMTksMS41MDFDMTAuNzUsMS41MDEsMS41LDEwLjc1MSwxLjUsMjIuMTJzOS4yNSwyMC42MTksMjAuNjE5LDIwLjYxOSAgICBzMjAuNjE5LTkuMjUsMjAuNjE5LTIwLjYxOVMzMy40ODgsMS41MDEsMjIuMTE5LDEuNTAxeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxnPgoJCQk8cGF0aCBkPSJNMzEuNDM0LDIyLjg2OUgxMi44MDVjLTAuNDE0LDAtMC43NS0wLjMzNi0wLjc1LTAuNzVzMC4zMzYtMC43NSwwLjc1LTAuNzVoMTguNjI4YzAuNDE0LDAsMC43NSwwLjMzNiwwLjc1LDAuNzUgICAgIFMzMS44NDgsMjIuODY5LDMxLjQzNCwyMi44Njl6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjIuMTE5LDMyLjE4M2MtMC40MTQsMC0wLjc1LTAuMzM2LTAuNzUtMC43NVYxMi44MDZjMC0wLjQxNCwwLjMzNi0wLjc1LDAuNzUtMC43NXMwLjc1LDAuMzM2LDAuNzUsMC43NXYxOC42MjYgICAgIEMyMi44NjksMzEuODQ3LDIyLjUzMywzMi4xODMsMjIuMTE5LDMyLjE4M3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';

// /* Rectangle: */
// background: #F9FAFB;
// box-shadow: 0 26px 90px 0 rgba(51,59,69,0.10), 0 0 20px 0 rgba(215,222,227,0.39);
// border-radius: 10px;
// /* Strategy.pdf: */
// font-family: .AppleSystemUIFont;
// font-size: 15px;
// color: #434B52;
// letter-spacing: 0;
// /* LAST EDITED JUN 28,: */
// font-family: .AppleSystemUIFont;
// font-size: 9px;
// color: #1F8EFA;
// letter-spacing: 2px;
// /* Shape: */
// background: #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
