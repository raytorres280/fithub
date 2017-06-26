import EventEmitter from 'EventEmitter';


//bring in some kind of module/service that connects to db.

import dispatcher from '../dispatcher/AppDispatcher';

class LogsStore extends EventEmitter {
  constructor() {
    super()
    this.logs = [
      {
        id: Date('January 24, 1984'),
        totalProtein: 20,
        totalCarbs: 20,
        totalFats: 20,
        totalWaterIntake: 125,
        totalCalories: 100
      },
      {
        id: Date('Dec 24, 1984'),
        totalProtein: 20,
        totalCarbs: 20,
        totalFats: 20,
        totalWaterIntake: 125,
        totalCalories: 100
      }
    ]
  }

  getAll() {
    return this.logs;
  }

  addLog(log) {
    this.logs.push({
      id: Date('Dec 24, 1984'),
      totalProtein: log.totalProtein,
      totalCarbs: log.totalCarbs,
      totalFats: log.totalFats,
      totalWaterIntake: log.totalWaterIntake,
      totalCalories: log.totalCalories
    });

    this.emit('change');
  }

  handleActions(action) {
    console.log('logsstore received an action.', action);
    switch(action.type) {
      case 'ADD_LOG': {
        console.log('adding log to list...');
        this.logs.push(action.log);
        console.log(this.logs);
        this.emit('change');
      }
    }
  }
}

const logsStore = new LogsStore;
dispatcher.register(logsStore.handleActions.bind(logsStore));
export default logsStore;
