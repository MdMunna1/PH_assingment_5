const noakhliBtn = document.getElementById("noakhali-btn");
const feniBtn = document.getElementById("feni-btn");
const quotaBtn = document.getElementById("quota-btn");
const bangladeshBtn = document.getElementById("bangladesh-btn");
// ....function
function inputToString(id) {
  return parseFloat(document.getElementById(id).value);
}
// function
function innerTextTonumber(id) {
  return parseFloat(document.getElementById(id).innerText);
}
// noakhali
noakhliBtn.addEventListener("click", function () {
  let mailBalance = innerTextTonumber("main-balance");
  let inputValue = inputToString("noakhali-inp");
  let agerTaka = innerTextTonumber("noakhali-taka");
  if (inputValue < 0 || isNaN(inputValue) || Array.isArray(inputValue)) {
    alert("invalit input please input valid number");
    return;
  }
  let nowMainBalance = mailBalance - inputValue;

  let nowBalence = inputValue + agerTaka;
  document.getElementById("main-balance").innerText = nowMainBalance;
  document.getElementById("noakhali-taka").innerText = nowBalence;
  // history 
  let historySection = document.getElementById("history-section");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.classList.add("font-bold");
  h1.innerText = `${inputValue} Donate for Noakhali Flood people Noakhali,Bangladesh`;
  div.appendChild(h1);
  let p = document.createElement("p");
  p.innerText = "new date()";
  div.appendChild(p);

  historySection.appendChild(div);
});
// feni
feniBtn.addEventListener("click", function () {
  let mailBalance = innerTextTonumber("main-balance");
  let inputValue = inputToString("feni-inp");
  let agerTaka = innerTextTonumber("fani-taka");
  if (inputValue < 0 || isNaN(inputValue) || Array.isArray(inputValue)) {
    alert("invalit input please input valid number");
    return;
  }
  let nowMainBalance = mailBalance - inputValue;

  let nowBalence = inputValue + agerTaka;
  document.getElementById("main-balance").innerText = nowMainBalance;
  document.getElementById("fani-taka").innerText = nowBalence;
  // history
  let historySection = document.getElementById("history-section");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.classList.add("font-bold");
  h1.innerText = `${inputValue}Taka is Donated for Flood Relief in Feni,Bangladesh`;
  div.appendChild(h1);
  let p = document.createElement("p");
  p.innerText = "new date()";
  div.appendChild(p);

  historySection.appendChild(div);
});
// quota
quotaBtn.addEventListener("click", function () {
  let mailBalance = innerTextTonumber("main-balance");
  let inputValue = inputToString("quota-inp");
  let agerTaka = innerTextTonumber("quota-taka");
  if (inputValue < 0 || isNaN(inputValue) || Array.isArray(inputValue)) {
    alert("invalit input please input valid number");
    return;
  }
  let nowMainBalance = mailBalance - inputValue;

  let nowBalence = inputValue + agerTaka;
  document.getElementById("main-balance").innerText = nowMainBalance;
  document.getElementById("quota-taka").innerText = nowBalence;
  // history section
  let historySection = document.getElementById("history-section");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.classList.add("font-bold");
  h1.innerText = `${inputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
  div.appendChild(h1);
  let p = document.createElement("p");
  p.innerText = "new date()";
  div.appendChild(p);

  historySection.appendChild(div);
});
// bangladesh
bangladeshBtn.addEventListener("click", function () {
  let mailBalance = innerTextTonumber("main-balance");
  let inputValue = inputToString("bangladesh-inp");
  let agerTaka = innerTextTonumber("village-taka");
  if (inputValue < 0 || isNaN(inputValue) || Array.isArray(inputValue)) {
    alert("invalit input please input valid number");
    return;
  }
  let nowMainBalance = mailBalance - inputValue;
  let nowBalence = inputValue + agerTaka;
  document.getElementById("main-balance").innerText = nowMainBalance;
  document.getElementById("village-taka").innerText = nowBalence;
  // history section
  let historySection = document.getElementById("history-section");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.classList.add("font-bold");
  h1.innerText = `${inputValue} Taka is donated for Bangladeshi the flood people`;
  div.appendChild(h1);
  let p = document.createElement("p");
  p.innerText = "new date()";
  div.appendChild(p);

  historySection.appendChild(div);
});

// 
// 
// 
// 
// 


// button  donation history
let donation = document.getElementById("donation");
let history = document.getElementById("history");
history.addEventListener("click", function () {
  history.classList.add("bg-lime-400", "font-semibold");
  donation.classList.remove("bg-lime-400", "font-semibold");
  let main = document.getElementById("main");
  main.classList.add("hidden");
});
donation.addEventListener("click", function () {
  history.classList.remove("bg-lime-400", "font-semibold");
  donation.classList.add("bg-lime-400", "font-semibold");
  let main = document.getElementById("main");
  main.classList.remove("hidden");
});
