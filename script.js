const ULDOM = document.querySelector("#list");
const successDOM = document.querySelector("#liveToast");
const errorDOM = document.querySelector("#liveToastError");

function newElement() {
  let item = document.querySelector("#task");
  if (item.value === "") {
    ShowErrorToast();
  } else {
    let liDom = document.createElement("li");
    liDom.innerHTML = item.value;
    let span = document.createElement("span");
    span.innerHTML = "x";
    span.classList.add("close");
    liDom.appendChild(span);
    ULDOM.appendChild(liDom);
    console.log(item);
    item.value = "";

    liDom.onclick = function () {
      if (liDom.className == "checked") {
        liDom.classList.remove("checked");
      } else {
        liDom.classList.add("checked");
      }
    };

    span.onclick = function () {
      ULDOM.removeChild(liDom);
    };

    showSuccessToast();
  }
}
function ShowErrorToast() {
  errorDOM.classList.remove("hide"); //hide classını gizler
  errorDOM.classList.add("show"); // show classını gösterir
  setTimeout(function () {
    errorDOM.classList.remove("show");
    errorDOM.classList.add("hide");
  }, 4000);
}
function showSuccessToast() {
  successDOM.classList.remove("hide"); //hide classını gizler
  successDOM.classList.add("show"); // show classını gösterir
  setTimeout(function () {
    successDOM.classList.remove("show");
    successDOM.classList.add("hide");
  }, 4000);
}

var allLi = document.getElementsByTagName("li");
for (let i = 0; i < allLi.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = "x";
  span.classList.add("close");
  allLi[i].appendChild(span);
  allLi[i].onclick = function () {
    if (allLi[i].className == "checked") {
      allLi[i].classList.remove("checked");
    } else {
      allLi[i].classList.add("checked");
    }
  };
}

var close = document.getElementsByClassName("close"); //close classına sahip olanları seçer ve close değişkenine atar
for (var i = 0; i < close.length; i++) {
  //close.length sayısına kadar birer artarak ilerler
  close[i].onclick = function () {
    var div = this.parentElement; //close üzerindeki etiketi seçer ve div değişkenine atar
    div.style.display = "none"; // div değişkenin displayini none yani görünmez yapar
  };
}
