import dispatcher from '../dispatcher/AppDispatcher';

export function addLog(log) {
  dispatcher.dispatch({
    type: 'ADD_LOG',
    log
  });
}

export function removeLog(log) {
  dispatcher.dispatch({
    type: 'REMOVE_LOG',
    log
  });
}

export function createLog() {
  dispatcher.dispatch({
    type: 'CREATE_LOG',
    log
  });
}

export function getLogs(user) {
  fetch('https://macro-native-server.herokuapp.com/api/logs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((res) => res.json())
  .then((response) => {
    var logs = response;
    dispatcher.dispatch({
      type: 'GET_LOGS',
      logs
    });
      })
      .catch((error) => {
        console.log(error);
      });

}

export function addMealToLog(mealLog) {
  fetch('https://macro-native-server.herokuapp.com/api/meal-logs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mealLog)
  })
  .then((res) => res.json())
  .then((resJson) => {
    console.log(resJson);;
  })
  .catch((err) => {
    console.log(err);
  });


}

export function drinkWater(logId) {
  fetch('https://macro-native-server.herokuapp.com/api/water', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({logId: logId})
  })
  .then((res) => res.json())
  .then((resJson) => {
    dispatcher.dispatch({
      type: 'DRINK_WATER'
    });
  })
  .catch((err) => {
    if(err) {
      throw err;
    }
  })
}
