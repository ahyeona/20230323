// JSON 문자열을 다뤄보자
// 객체처럼 생겼음 문자열
// 데이터를 문자열로 받아서
// 객체로 변환해서 사용하기 위해
let _json = '{"key" : "value"}';
console.log(_json);
// JSON객체 안의 parse메소드가 객체로 객체형태의 문자열을 파싱해준다.
// 객체로 변환해준다.
console.log(JSON.parse(_json));
let obj = { key: 24 };
// 객체를 문자열로 변환
// stringify : 객체를 문자열로 변환
console.log(JSON.stringify(obj));

function addList() {
  let inputs = document.querySelectorAll("input");
  let value = window.localStorage.getItem("게시판");
  // window.localStorage.clear();
  if (window.localStorage.length == 0) {
    window.localStorage.setItem(
      "게시판",
      `{"name" : ${inputs[0].value}, "age" : "${inputs[1].value}", "content" : ${inputs[2].value}, "tel" : ${inputs[3].value} }`
    );
  } else {
    window.localStorage.setItem(
      "게시판",
      value +
        "|" +
        `{"name" : ${inputs[0].value}, "age" : ${inputs[1].value}, "content" : ${inputs[2].value}, "tel" : ${inputs[3].value} }`
    );
  }
  console.log(window.localStorage.getItem("게시판"));
  // 문자열을 객체로 변환
  // let _json = JSON.parse(window.localStorage.getItem("게시판"));
  // console.log(_json);
}

function render() {
  let _json = window.localStorage.getItem("게시판");
  // 문자열에서 "|" 문자열마다 잘라서 배열로 변경
  _json = _json.split("|");
  console.log(_json);
  let _ul = document.createElement("ul");
  let _li = document.createElement("li");
  let _div1 = document.createElement("div");
  let _div2 = document.createElement("div");
  let _div3 = document.createElement("div");
  let _div4 = document.createElement("div");
  _div1.innerHTML = "이름";
  _div2.innerHTML = "나이";
  _div3.innerHTML = "취미";
  _div4.innerHTML = "전화번호";
  _li.style.display = "flex";
  _li.append(_div1, _div2, _div3, _div4);
  _ul.append(_li);
  _json.forEach(function (i) {
    let _li = document.createElement("li");
    let _div1 = document.createElement("div");
    let _div2 = document.createElement("div");
    let _div3 = document.createElement("div");
    let _div4 = document.createElement("div");
    _div1.innerHTML = JSON.parse(i).name;
    _div2.innerHTML = JSON.parse(i).age;
    _div3.innerHTML = JSON.parse(i).content;
    _div4.innerHTML = JSON.parse(i).tel;
    _li.style.display = "flex";
    _li.append(_div1, _div2, _div3, _div4);
    _ul.append(_li);
  });
  _div.append(_ul);
}

render();

addBtn.addEventListener("click", addList);
