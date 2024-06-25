var file = document.getElementById("items");
var itemsContainer = [];
var PaperContainer = [];
file.addEventListener("change", (e) => {
  // console.log("hello");
  var file = e.target.files[0];
  var fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = function () {
    const items = fileReader.result
      .split("\n")
      .map((e) => e.replace(/\r$/, ""));
    var item = new Item("", [], "", "");
    var paper = new Paper("", [], "");

    items.forEach((i) => {
      if (i === "") {
        itemsContainer.push(item);
        item = new Item("", [], "", "");
      }
      if (/^[^a-zA-Z].*$/.test(i)) {
        item.question = i;
      } else if (/^[A-D]$/.test(i)) {
        item.rightAnwser = i;
      } else {
        item.options.push(i);
      }
    });
    paper.items = itemsContainer;
    console.log(paper);
    dispalyItem(itemsContainer);
  };
});

function dispalyItem(items) {
  let content = "";
  var container = document.getElementById("container");
  items.forEach((item, index) => {
    content += `
        <div class="itemContainer" data-index=${index}>
        <h3>Q ${++index}: ${item.question}</h3>
        `;
    var optionsNew = item.options.filter((item) => item != "");
    optionsNew.forEach((option) => {
      console.log(option, index);
      content += `
            <div class="inputContainer">
                 <input type="radio" name="options-${index}" id="option" value="${option.substring(
        0,
        1
      )}"/>
                 <label>${option}</lable>
            </div>   
          `;
    });

    content += `</div>`;
  });
  container.innerHTML = content;
  doing();
}

function doing() {
  Array.from(document.getElementsByClassName("itemContainer")).forEach(
    (element) =>
      element.addEventListener("change", (e) => {
        itemsContainer[e.currentTarget.dataset.index].yourAnwser =
          e.target.value;
      })
  );
}

function getPaper() {
  var id = crypto.getRandomValues(new Uint16Array(1))[0];
  const paper = new Paper(id, itemsContainer, "hello");
  return paper;
}

function sotragePaper(paper) {
  PaperContainer.push(paper);
  localStorage.setItem("paper", JSON.stringify(PaperContainer));
}

document.getElementById("btn").addEventListener("click", (e) => {
  const paper = getPaper();
  const items = paper.items;
  console.log(typeof items);
  var count = 0;
  const isPerfect = items.every((e) => e.yourAnwser === e.rightAnwser);
  if (isPerfect) {
    paper.score = paper.perfectScore;
    count = items.length;
  } else {
    count = items.reduce((prev, cur) => {
      return prev + (cur.yourAnwser === cur.rightAnwser ? 1 : 0);
    }, 0);

    paper.score = count * 10;
    items
      .filter((e) => e.yourAnwser != e.rightAnwser)
      .forEach((e) => (e.isRight = false));
  }
  sotragePaper(paper);
  const inputs = document.querySelectorAll("input[type=radio]");
  Array.from(inputs).forEach((e) => {
    e.disabled = true;
  });

  var checkPaper = document.createElement("a")
  checkPaper.className = "checkPaper";
  checkPaper.href = "./listPaper.html";
});

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
}

class Item {
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
}

var item = new Item();
