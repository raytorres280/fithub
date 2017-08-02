import dispatcher from '../dispatcher/AppDispatcher';

export function addLog(log) {
  console.log('inside the log action addlog with a new log...', log);
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
  fetch('http://localhost:8080/api/logs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    console.log('got response');
    var logs = response;
    console.log(logs);
    dispatcher.dispatch({
      type: 'GET_LOGS',
      logs
    });
      })
      .catch((error) => {
        console.log('getlog api error');
        console.log(error);
        dispatcher.dispatch({
          type: 'GET_LOGS',
          logs: []
        });
      });

}
