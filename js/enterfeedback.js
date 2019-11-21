let API = "https://sheetdb.io/api/v1/t0pc7n6jn39d5";
let send = document.getElementById('send');
let name = document.getElementById('name');
let feedback = document.getElementById('feedback');
let count = 0;
send.addEventListener('click', sendFeedback);
async function sendFeedback(){
    count = count +1;
let nameValue = name.value;
let feedBackValue = feedback.value;
const body = {
        data:[
            {
               name : nameValue,
                feedback: feedBackValue
            }
        ]
    }
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(body)
    }
    
    const connection = await fetch(API, options);
    const data = await connection.json();
    console.log(data);
    let contain = document.getElementById("contain");
    if(count>0 && count <2){
    contain.insertAdjacentHTML('beforeend',`<p id="notice">your feedback was sended</p>`);
    }
}