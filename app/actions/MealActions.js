import dispatcher from '../dispatcher/AppDispatcher';

export function addMealToLog(mealLog) {
  fetch('http://localhost:8080/api/meal-logs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mealLog)
  })
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    let meal = res;
    dispatcher.dispatch({
      type: 'ADD_MEAL_TO_LOG',
      meal
    });
  });
}

export function removeMealFromLog(meal) {
  dispatcher.dispatch({
    type: 'REMOVE_MEAL_FROM_LOG',
    meal
  });
}

export function getMeals() {
  fetch('http://localhost:8080/api/meals')
  .then((res) => res.json())
  .then((response) => {
    let meals = response;
    console.log(meals);
    dispatcher.dispatch({
      type: "GET_MEALS",
      meals
    });
  })
  .catch((err) => {
    console.log(err);
  });


}
