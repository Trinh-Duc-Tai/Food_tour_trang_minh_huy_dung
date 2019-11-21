// let comment = document.getElementById('comment');
// comment.addEventListener('click',()=>{
//   document.location.href = '../html/enterFeedback.html';
// })
document.getElementById('logo').addEventListener('click', logoo);
function logoo () {
    document.location.href = "html/homepage.html";
}
document.getElementById('search').addEventListener('click', ()=>{
    let input = document.getElementById('myInput');
    let result = input.value;
  if (result<18.5){
  document.location.href = "html/pageType1.html";
  console.log(a);
}else if(result>=18.5 && result<= 22.9 ){
  document.location.href = "html/pageType2.html";
}else if(result>=23&& result <= 24.9){
  document.location.href = "html/pageType3.html";
}else if(result >= 25 && result <= 29.9){
  document.location.href = "html/pageType4.html";
}else if(result >= 30 &&result <= 34.9){
  document.location.href = "html/pageType5.html";
}else if(result>=35){
  document.location.href = "html/pageType6.html";
}
})
function autocomplete(inp, arr) {
var currentFocus;
inp.addEventListener("input", function(e) {
var a, b, i, val = this.value;
closeAllLists();
if (!val) { return false;}
currentFocus = -1;
a = document.createElement("DIV");
a.setAttribute("id", this.id + "autocomplete-list");
a.setAttribute("class", "autocomplete-items");
this.parentNode.appendChild(a);
for (i = 0; i < arr.length; i++) {
if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
b = document.createElement("DIV");

b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
b.innerHTML += arr[i].substr(val.length);

b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

b.addEventListener("click", function(e) {
   
    inp.value = this.getElementsByTagName("input")[0].value;
    console.log(inp.value);
    if(inp.value=="18.5>BMI"){
        location.href= 'html/pageType1.html';
    }else if(inp.value == "18.5<= BMI <= 22.9"){
        location.href='html/pageType2.html';
    }else if(inp.value == "23<= BMI <= 24.9"){
        location.href= "html/pageType3.html"
    }else if(inp.value == "25<= BMI <= 29.9"){
      location.href= "html/pageType4.html"
    }else if(inp.value == "30<= BMI <= 34.9"){
      location.href= "html/pageType5.html"
    }else if(ip.value =='35<BMI'){
      location.href= "html/pageType6.html"
    }

    closeAllLists();
});

a.appendChild(b);
}
}
});

inp.addEventListener("keydown", function(e) {
var x = document.getElementById(this.id + "autocomplete-list");
if (x) x = x.getElementsByTagName("div");
if (e.keyCode == 40) {

currentFocus++;

addActive(x);
} else if (e.keyCode == 38) { //up

currentFocus--;

addActive(x);
} else if (e.keyCode == 13) {

e.preventDefault();
if (currentFocus > -1) {

if (x) x[currentFocus].click();
}
}
});
function addActive(x) {

if (!x) return false;

removeActive(x);
if (currentFocus >= x.length) currentFocus = 0;
if (currentFocus < 0) currentFocus = (x.length - 1);

x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {

for (var i = 0; i < x.length; i++) {
x[i].classList.remove("autocomplete-active");
}
}
function closeAllLists(elmnt) {

var x = document.getElementsByClassName("autocomplete-items");
for (var i = 0; i < x.length; i++) {
if (elmnt != x[i] && elmnt != inp) {
x[i].parentNode.removeChild(x[i]);
}
}
}

document.addEventListener("click", function (e) {

closeAllLists(e.target);
});
console.log(document.getElementById("myInput").value);
}


var countries = ["18.5>BMI", '18.5<= BMI <= 22.9', " 23 <= BMI <=  24.9", "25<= BMI <= 29.9", "25<= BMI <=  29.9", "30<= BMI <=  34.9","35<=BMI"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);

function logoo () {
    document.location.href = "html/homepage.html";
}

function contact() {
  alert(`Số điện thoại : 0987654321\nLiên hệ hotline của Foodtour để được tư vấn một cách tối ưu và hiệu quả nhất!`);
}