import Paper from "./Paper.js"
import Item from "./Item.js"
var file = document.getElementById("items");
var itemsContainer = [];
var paperMap = new Map();
let paper = null;
/**
 * 封装
 */
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
    const username = document.getElementById("username");
    var a = document.getElementById("begin");
    a.disabled = false;
    a.addEventListener("click", (e) => {
      if (username.value.trim() === "") {
        alert("请输入用户名");
        document.getElementById("username").focus();
      } else {
        const paper = getPaper();
        paper.name = document.getElementById("username").value;
        //  触发自定义事件
        var customEvent = new CustomEvent("examStard", { detail: paper });
        document.dispatchEvent(customEvent);
        dispalyItem(paper);
      }
    });
  };
});

function dispalyItem(paper) {
  let content = "";
  var container = document.getElementById("container");
  paper.items.forEach((item, index) => {
    content += `
        <div class="itemContainer" data-index=${index}>
        <h3>Q ${++index}: ${item.question}</h3>
        `;
    var optionsNew = item.options.filter((item) => item != "");
    optionsNew.forEach((option) => {
      console.log(option, index);
      content += `
            <div class="inputContainer">
                 <input type="radio" name="options-${index}" id="${option}" value="${option.substring(
        0,
        1
      )}"/>
                 <label for="${option}">${option}</lable>
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
  const paper = new Paper(id, itemsContainer);
  return paper;
}

function sotragePaper(paper) {
  if (!paperMap.has(paper.name)) {
    paperMap.set(paper.name, []);
    paperMap.get(paper.name).push(paper);
  } else {
    paperMap.get(paper.name).push(paper);
  }

  // 序列化存储
  localStorage.setItem("paper", JSON.stringify(Array.from(paperMap)));
}

document.getElementById("btn").addEventListener("click", (e) => {
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
  var checkPaper = document.createElement("a");
  checkPaper.className = "checkPaper";
  checkPaper.href = "./listPaper.html";
  checkPaper.innerHTML = "查看成绩";
  checkPaper.id = "checkpaper";

  document.body.appendChild(checkPaper);

  document.getElementById("checkpaper").addEventListener("click", (e) => {
    e.preventDefault();
    const page = window.open(
      "http://127.0.0.1:5500/%E8%80%83%E8%AF%95%E7%B3%BB%E7%BB%9F/page/listPaper.html"
    );

    var paperstr = JSON.stringify(paper);
    page.addEventListener("load", (e) => {
      page.postMessage(paperstr, "*");
    });
  });
});

// 创建自定义事件
document.addEventListener("examStard", (e) => {
  paper = e.detail;
  console.log("考试开始？", e.detail);
});

document.addEventListener("submitStart", () => {});

window.onload = function () {
  if (localStorage.getItem("paper") != null) {
    console.log("发现备份");
    let paper = localStorage.getItem("paper");
    var map = new Map(JSON.parse(paper));
    paperMap = map;
  } else {
    console.error("没有发现备份");
  }
};
