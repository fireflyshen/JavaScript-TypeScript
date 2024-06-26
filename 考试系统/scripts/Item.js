export default class Item {
  constructor(question, options, rightAnwser, yourAnwser) {
    this._question = question;
    this._options = options;
    this._rightAnwser = rightAnwser;
    this._yourAnwser = yourAnwser;
    this._score = 10;
    this._isRight = true;
  }

  set question(question) {
    this._question = question;
  }

  get question() {
    return this._question;
  }

  set options(options) {
    this._options = options;
  }

  get options() {
    return this._options;
  }

  set rightAnwser(rightAnwser) {
    this._rightAnwser = rightAnwser;
  }

  get rightAnwser() {
    return this._rightAnwser;
  }
  set yourAnwser(yourAnwser) {
    this._yourAnwser = yourAnwser;
  }

  get yourAnwser() {
    return this._yourAnwser;
  }

  set isRight(isRight) {
    this._isRight = isRight;
  }

  get isRight() {
    return this._isRight;
  }

  toJson(){
    return {
      _isRight: this._isRight,
      _options: this._options,
      _question: this._question,
      _rightAnwser: this._rightAnwser,
      _score: this._score,
      _yourAnwser: this._yourAnwser
    }
  }

  static fromJson(json){
    const item = new Item();
    item._isRight = json._isRight;
    item._options = json._options;
    item._question = json._question;
    item._rightAnwser = json._rightAnwser;
    item._score = json._score;
    item._yourAnwser = json._yourAnwser;
    return item;
  }
}