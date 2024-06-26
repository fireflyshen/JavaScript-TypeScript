class Paper {
    constructor(paperId, items, name) {
      this._paperId = paperId;
      this._items = items;
      this._name = name;
      this._perfectScore = 100;
      this._yourScore;
    }
  
    get items() {
      return this._items;
    }
  
    set items(items) {
      this._items = items;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set paperId(paperId) {
      this._paperId = paperId;
    }
  
    get paperId() {
      return this._paperId;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set perfectScore(perfectScore) {
      this._perfectScore = perfectScore;
    }
  
    get perfectScore() {
      return this._perfectScore;
    }
  
    set yourScore(yourScore) {
      this._yourScore = yourScore;
    }
  
    get yourScore() {
      return this._yourScore;
    }
  
    toJson() {
      return {
        _paperId: this._paperId,
        _items: this._items,
        _name: this._name,
        _perfectScore: this._perfectScore,
        _yourScore: this._yourScore,
      };
    }
  
    static fromJson(json){
      const paper = new Paper(json._paperId, json._items, json._name);
      paper._perfectScore = json._perfectScore;
      paper._yourScore = json._yourScore;
      return paper;
    }
  }


  export default Paper