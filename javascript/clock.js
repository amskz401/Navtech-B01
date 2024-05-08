// (() => {
//   setTimeout(() => {
//     document.body.innerHTML = `<input type="text" id="table" />
//     <button onclick="even_odd()">Check Number</button>
//     <button onclick="print_table()">Print Table</button>
//     <button onclick="set_bg('green')">Green</button>
//     <button onclick="set_bg('purple')">Purple</button>
//     <button onclick="set_bg('red')">Red</button>
//     <button onclick="set_bg('aqua')">Aqua</button>
//     <div id="show-table"></div>`;
//   }, 200);
// })();
// let date = new Date();

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log(i);
//   }, 500);
// }

window.onload = () => {
  if (localStorage.getItem("color")) {
    document.body.style.backgroundColor = localStorage.getItem("color");
  }
};

function even_odd() {
  //   if (document.body.style.backgroundColor == "black") {
  //     document.body.style.backgroundColor = "white";
  //   } else {
  //     document.body.style.backgroundColor = "black";
  //   }

  let input_val = document.getElementById("table");
  if (input_val.value % 2 == 0) {
    alert(input_val.value + " is even");
  } else {
    alert(input_val.value + " is odd");
  }
}

function set_bg(color = "white") {
  document.body.style.backgroundColor = color;
  localStorage.setItem("color", color);
}

function print_table() {
  let input_val = document.getElementById("table");
  let table_con = document.getElementById("show-table");
  let html = "";
  for (let i = 1; i <= 10; i++) {
    let cal = input_val.value * i;
    html += `${input_val.value} X ${i} =  ${cal} <br>`;
  }
  table_con.innerHTML = html;
}

setTimeout(() => {
  let input_val = document.getElementById("table");
  input_val.addEventListener("change", function (event) {
    alert();
    console.log(event.target.value);
  });
}, 100);

function getData() {
  fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

function show_hide_text() {
  let table_con = document.getElementById("show-table");

  if (table_con.style.display == "none") {
    table_con.style.display = "block";
  } else {
    table_con.style.display = "none";
  }
}
