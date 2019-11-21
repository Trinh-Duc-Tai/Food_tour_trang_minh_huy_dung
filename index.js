(function() {
    /**
     * Tinh chỉ số thập phân của một con số.
     *
     * @param {String}  type  Loại điều chỉnh.
     * @param {Number}  value Số liệu.
     * @param {Integer} exp   Số mũ (the 10 logarithm of the adjustment base).
     * @returns {Number} Giá trị đã chỉnh sửa.
     */
    function decimalAdjust(type, value, exp) {
      // Nếu exp có giá trị undefined hoặc bằng không thì...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Nếu value không phải là ố hoặc exp không phải là số nguyên thì...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Làm tròn số thập phân (theo mốc số 5)
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    // Làm tròn số thập phân (về gần giá trị 0)
    if (!Math.floor10) {
      Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
    // Làm tròn số thập phân (ra xa giá trị 0)
    if (!Math.ceil10) {
      Math.ceil10 = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
})();
let calculate = document.getElementById("calcu");
let container = document.getElementById("container");
let ip1 = document.getElementById("calcu");


function calculateBMI() {
    let weight = document.getElementById("ip1").value;
    let height = document.getElementById("ip2").value;
    let result = weight / (height * height);
    if(isNaN(weight) || isNaN(height) || isNaN(result)){
      alert("Must be a number");
      document.getElementById("ip1").value = "";
    document.getElementById("ip2").value = "";
    location.reload();
    }
    else {  
    document.getElementById("ip1").value = "";
    document.getElementById("ip2").value = "";
    ip1.parentNode.removeChild(ip1);
    container.insertAdjacentHTML("beforeend",`
    <div id="result">Your BMI is ${Math.ceil10(result, -1)} !</div>
    <button id ="book">Book Tour</button>`);
    document.getElementById('book').addEventListener("click", () => {
        if (result<18.5){
            document.location.href = "html/pageType1.html";
            console.log(a);
        }else if(result>18.5 && result< 22.9 ){
            document.location.href = "html/pageType2.html";
        }else if(result>23&& result < 24.9){
            document.location.href = "html/pageType3.html";
        }else if(result > 25 && result < 29.9){
            document.location.href = "html/pageType4.html";
        }else if(result > 30 &&result < 34.9){
            document.location.href = "html/pageType5.html";
        }else if(result>=35){
            document.location.href = "html/pageType6.html";
        }
})
}
}
calculate.addEventListener("click", calculateBMI);

function logoo () {
    document.location.href = "html/homepage.html";
}

function contact() {
  alert(`Số điện thoại : 0987654321\nLiên hệ hotline của Foodtour để được tư vấn một cách tối ưu và hiệu quả nhất!`);
}


// let API = "https://sheetdb.io/api/v1/t0pc7n6jn39d5";
//   function clickComment(){
//     let boxcomment;
// let insert = document.getElementById("insert");
// let comment = document.getElementById("comment");
// let send;
//   comment.remove();
 
//   insert.insertAdjacentHTML('afterbegin', `
//   <div id = 'boxcomment'>
//   <p>Give us your feedback</p>
//   <input id = "inputcomment" type="text">
//   <button id ="send">send</button></div>
//   `)
//   boxcomment =document.getElementById('boxcomment');
//    send = document.getElementById("send");
   

//    console.log(send);
//   send.addEventListener('click',async ()=>{
//   let inputValue = document.getElementById("inputcomment");
//   console.log(inputValue.value);
//   const body = {
//     data:[
//         {
           
//             feedback: inputValue.value
//         }
//     ]
// }
// const options = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body:JSON.stringify(body)
// }

// const connection = await fetch(API, options);
// const data = await connection.json();
// console.log(data);
//   boxcomment.remove();
//   insert.insertAdjacentHTML('afterbegin', `<i id = "comment" class='far fa-comment-dots' onclick = "clickComment()" style='font-size:36px; color: #770000'></i>`)
 
// })
//   }
// let comment = document.getElementById('comment');
// comment.addEventListener('click',()=>{
//   document.location.href = '../html/enterFeedback.html';
// })
// let 