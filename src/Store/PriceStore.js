const { makeAutoObservable } = require("mobx");

export default class PriceStore {
  constructor() {
    this._priceList = { vinyl: 1000, banner: 800, printCut: 1500 };
    this._currentPrice = {};
    makeAutoObservable(this);
  }
  setPriceList(price) {
    this._priceList = price;
  }
  get priceList() {
    return this._priceList;
  }
  setCurrentPrice(price) {
    this._currentPrice = price;
  }
  get currentPrice() {
    return this._currentPrice;
  }
}
