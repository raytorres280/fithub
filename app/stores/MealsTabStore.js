import EventEmitter from 'EventEmitter';

import dispatcher from '../dispatcher/AppDispatcher';

class MealsTabStore extends EventEmitter {
  constructor() {
    super()
    this.meals = [
      //change this to http req service later...dynamically populate array.
      {id: 1, name: 'chix sandwich', protein: 30, carbs: 20, fats: 10, calories: 700},
      {id: 2, name: 'fish tacos', protein: 30, carbs: 10, fats: 20, calories: 500},
      {id: 3, name: 'pizza', protein: 8, carbs: 30, fats: 30, calories: 600},
      {id: 4, name: 'yams', protein: 4, carbs: 50, fats: 4, calories: 400},
      {id: 5, name: 'cake', protein: 8, carbs: 60, fats: 40, calories: 800},
      {id: 6, name: 'burger', protein: 20, carbs: 28, fats: 12, calories: 1200}
    ]
  }

  getMeals() {
    return this.meals
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
    console.log('adding meal to daily log...');

    //do date check in here and add to according user's log after date check.

  }

  handleActions(action) { //registered callback function for dispatcher.
    console.log('mealtabstore received an action', action);
    switch(action.type) {
      case 'ADD_MEAL_TO_LOG': {
        this.addMealToLog(action.meal);
      }

    }
  }

}

const mealstabstore = new MealsTabStore;
dispatcher.register(mealstabstore.handleActions.bind(mealstabstore));

export default mealstabstore
