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


setTimeout(() => {
  dispatcher.dispatch({
    type: "RECEIVE_MENU",
    menuItems

  });
}, 1000);

}
