import dispatcher from '../dispatcher/AppDispatcher';

export function addMealToLog(meal) {
  dispatcher.dispatch({
    type: 'ADD_MEAL_TO_LOG',
    meal
  });
}

export function removeMealFromLog(meal) {
  dispatcher.dispatch({
    type: 'REMOVE_MEAL_FROM_LOG',
    meal
  });
}

export function getMeals() {
  dispatcher.dispatch({
    type: "GET_MEALS"
  });
}
