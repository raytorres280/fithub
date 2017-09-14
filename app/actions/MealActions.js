import dispatcher from '../dispatcher/AppDispatcher';

export function addMealToLog(mealLog) {
  //console.log(JSON.stringify(mealLog));
  fetch('https://macro-native-server.herokuapp.com/api/meal-logs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mealLog)
  })
  .then((response) => response.json())
  .then((res) => {
    let meals = res;
    dispatcher.dispatch({
      type: 'REFRESH_LOGS',
      meals
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

export function removeMealFromLog(meal) {
  dispatcher.dispatch({
    type: 'REMOVE_MEAL_FROM_LOG',
    meal
  });
}

export function getMeals() {
  fetch('https://macro-native-server.herokuapp.com/api/meals')
  .then((res) => res.json())
  .then((response) => {
    let meals = response;
    dispatcher.dispatch({
      type: "GET_MEALS",
      meals
    });
  })
  .catch((err) => {
    console.log(err);
  });


}
