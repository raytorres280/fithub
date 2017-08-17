import EventEmitter from 'EventEmitter';

import dispatcher from '../dispatcher/AppDispatcher';

class MealsTabStore extends EventEmitter {
  constructor() {
    super()
    this.meals = [
    ]
  }

  getMeals() {
    return this.meals;
  }

  createMeal(meal) {
    const id = Date.now();

    this.meals.push({
      id: id,
      name: meal.name,
      protein: meal.protein,
      carbs: meal.carbs,
      fats: meal.fats,
      calories: meal.calories
    });

    this.emit('change');
  }

  addMealToLog(meal) {
    console.log('adding meal to list...');
    //do date check in here and add to according user's log after date check.

  }

  getInitialMeals(user) {
    console.log('fetching initial render info for meals from db..');
  }

  handleActions(action) { //registered callback function for dispatcher.
    // console.log('mealtabstore received an action', action);
    switch(action.type) {
      case 'GET_MEALS':
        if(action.meals) {
          console.log(action.meals);
          this.meals = action.meals;
          this.emit('change');
        }
        else {
          console.log('empty response from db.');
        }
        break;
    }
    //end of switch statement
  }

}

const mealstabstore = new MealsTabStore;
dispatcher.register(mealstabstore.handleActions.bind(mealstabstore));

export default mealstabstore
