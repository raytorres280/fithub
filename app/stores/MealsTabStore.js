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

  handleActions(action) {
    switch(action.type) {
      case 'GET_MEALS':
        if(action.meals) {
          this.meals = action.meals;
          this.emit('change');
        }
        else {
          console.log('empty response from db.');
        }
        break;
    }
  }
}

const mealstabstore = new MealsTabStore;
dispatcher.register(mealstabstore.handleActions.bind(mealstabstore));

export default mealstabstore
