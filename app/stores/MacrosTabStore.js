import EventEmitter from 'EventEmitter';

class MacrosTabStore extends EventEmitter {
  constructor() {
    super()
    this.protein = 0;
    this.carbs = 0;
    this.fats = 0;
    this.calories = 0;
    this.water = 0; //8x8  or 16.9rule measured in ounces. 4 bottles of water.
    this.miles = 0;
  }

  getMacros() {
    return {
      protein: this.protein,
      carbs: this.carbs,
      fats: this.fats,
      calories: this.calories,
      water: [this.water],
      miles: this.miles
    };
  }

  drinkWater(size) {
    this.water = this.water + 8;
    if (size === 1) {
      console.log('drinking glass of water..')

    }
    else {
      console.log('drinking bottle of water...')
    }
  }
  addMiles(){
    console.log('trying to track workouts..')
  }
}



const macrosTabStore = new MacrosTabStore;

export default macrosTabStore;
