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

export function getMenu() {
  dispatcher.dispatch({
    type: "GET_MENU"
  });

setTimeout(() => {
  dispatcher.dispatch({
    type: "RECEIVE_MENU",
    menuItems

  });
}, 1000);

}
