let index = 0;

// 추가버튼 누르면 추가되는 함수
function addList() {
  let inputs = document.querySelectorAll("input");
  // let value = window.localStorage.getItem(index);

  let todo = "실행";

  // 체크박스 선택여부 확인
  if (inputs[0].checked) {
    todo = "함";
  } else {
    todo = "아직 못 함";
  }

  // 우선순위 상 중 하 중 선택한 값 선택
  let rankvalue = "";
  let rank = document.getElementsByName("rank");
  rank.forEach(function (i) {
    if (i.checked) {
      rankvalue = i.value;
    }
  });

  window.localStorage.setItem(
    `${index}`,
    `{ "tlfgodduqn" : "${todo}", "dlf" : "${inputs[1].value}", "rlgks" : "${inputs[2].value}", "dntjs" : "${rankvalue}", "index": ${index} }`
  );
  index++;
  console.log("index :", index);

  // if (window.localStorage.length == 0) {
  //   window.localStorage.setItem(
  //     `${index}`,
  //     `{ "tlfgodduqn" : "${todo}", "dlf" : "${inputs[1].value}", "rlgks" : "${inputs[2].value}", "dntjs" : "${rankvalue}", "index": ${index} }`
  //   );
  //   index++;
  // }
  // else {
  //   window.localStorage.setItem(
  //     `${index}`,
  //     value +
  //       "|" +
  //       `{ "tlfgodduqn" : "${todo}", "dlf" : "${inputs[1].value}", "rlgks" : "${inputs[2].value}", "dntjs" : "${rankvalue}", "index": ${index} }`
  //   );
  //   index++;
  // }

  console.log(window.localStorage.getItem(index));

  // 화면에 표시
  render();
}

// 버튼에 클릭 이벤트 함수 적용
addBtn.addEventListener("click", addList);

// 화면에 표시해주는 함수
function render() {
  _div.innerHTML = "";

  let ul = document.createElement("ul");
  createE(ul, "실행여부", "할 일", "기한", "우선순위", -1, false);

  for (let i = 0; i <= index; i++) {
    let value = window.localStorage.getItem(i);
    console.log(value);
    if (value) {
      console.log("value", value);
    } else {
      console.log("널값뜸");
    }
    console.log(JSON.parse(value).tlfgodduqn);

    let li = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let dbtn = document.createElement("button");

    div1.innerHTML = JSON.parse(value).tlfgodduqn;
    div2.innerHTML = JSON.parse(value).dlf;
    div3.innerHTML = JSON.parse(value).rlgks;
    div4.innerHTML = JSON.parse(value).dntjs;

    console.log("인덱스 : ", JSON.parse(value).index);

    li.style.display = "flex";

    // if (btn) {

    dbtn.textContent = "삭제";
    dbtn.addEventListener("click", deleteBtn(JSON.parse(value).index));
    li.append(div1, div2, div3, div4, dbtn);
    // }
    // else {
    //   li.append(div1, div2, div3, div4);
    // }

    ul.append(li);

    // createE(
    //   ul,
    //   JSON.parse(value).tlfgodduqn,
    //   JSON.parse(value).dlf,
    //   JSON.parse(value).rlgks,
    //   JSON.parse(value).dntjs,
    //   JSON.parse(value).index,
    //   true
    // );
  }
  // let value = window.localStorage.getItem(index);
  // value = value.split("|");

  // value.forEach(function (i) {
  //   createE(
  //     ul,
  //     JSON.parse(i).tlfgodduqn,
  //     JSON.parse(i).dlf,
  //     JSON.parse(i).rlgks,
  //     JSON.parse(i).dntjs,
  //     true
  //   );
  // });

  _div.append(ul);
}

if (window.localStorage.length != 0) {
  render();
}

// 태그 생성해주는 함수 (매개변수 : 생성한 li가 추가될 ul, div1, 2 ,3, 4에 들어갈 값들)
function createE(__ul, content1, content2, content3, content4, index, btn) {
  // let li = document.createElement("li");
  // let div1 = document.createElement("div");
  // let div2 = document.createElement("div");
  // let div3 = document.createElement("div");
  // let div4 = document.createElement("div");
  // let dbtn = document.createElement("button");
  // div1.innerHTML = content1;
  // div2.innerHTML = content2;
  // div3.innerHTML = content3;
  // div4.innerHTML = content4;
  // li.style.display = "flex";
  // if (btn) {
  //   dbtn.textContent = "삭제";
  //   dbtn.addEventListener("click", deleteBtn(index));
  //   li.append(div1, div2, div3, div4, dbtn);
  // } else {
  //   li.append(div1, div2, div3, div4);
  // }
  // __ul.append(li);
}

// 삭제;
function deleteBtn(li) {
  console.log(li);
  window.localStorage.removeItem(li);
  console.log("삭제됨");
  render();
}
