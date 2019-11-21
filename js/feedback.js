// let feedback = document.getElementById('displayfeedback');
// let API = "https://sheetdb.io/api/v1/t0pc7n6jn39d5";
// async function displayfeedback(){
// const connection = await fetch(API);
// const data = await connection.json();
// console.log(data);
// for(let i = 0 ; i < data.length; i++){
//     feedback.insertAdjacentHTML("beforeend", `<div><p>${data[i].name}</p><p>${data[i].feedback}</p></div>
//     `);
// }
// }
// displayfeedback();
function logoo () {
    document.location.href = "../html/homepage.html";
}

function contact() {
  alert(`Số điện thoại : 0987654321\nLiên hệ hotline của Foodtour để được tư vấn một cách tối ưu và hiệu quả nhất!`);
}
let count = 0;
let send = document.getElementById('send');
send.addEventListener('click',()=>{
  count = count +1;
  if(count>0 && count < 2){
  document.getElementById('camon').insertAdjacentHTML('beforebegin', `<p id = "camon">Cảm ơn bạn đã có những đóng góp cho trang web của chúng tôi. Chúng tôi sẽ sớm hoàn thiện để cung cấp những trải nghiệm tốt hơn.</p>`);
  }
})