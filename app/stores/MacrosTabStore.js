import EventEmitter from 'EventEmitter';

class MacrosTabStore extends EventEmitter {
  
  constructor() {
    super()
    this.protein = 25;
    this.carbs = 40;
    this.fats = 75;
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

  addMiles() {

  }
}

const macrosTabStore = new MacrosTabStore;

export default macrosTabStore;
