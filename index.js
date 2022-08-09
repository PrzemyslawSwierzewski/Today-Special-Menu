let menu ={
  _meal:'',
  _price:0,
  set meal(mealToChceck){
    if(typeof mealToChceck==="string"){
      return this._meal=mealToChceck
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck==='number'){
      return this._price=priceToCheck
    }
  },
  get todaysSpecial(){
    if(this._meal&&this._price){
      return `Today’s Special is ${this._meal} for ${this._price}$`
    }else{
      return 'Meal or price was not set correctly!'
    }
  }
};

menu._meal='pizza';
menu._price=7.5;
console.log(menu.todaysSpecial)
