

const welcomeContainer = document.querySelector("#welcomeContainer");
const inputForm = document.querySelector("#inputForm");
let h2title = document.querySelector('#h2title');
const date = new Date();

let doThis = ()=>{
    inputForm.classList.add("d-none");
    welcomeContainer.classList.remove("d-none");
    welcomeContainer.classList.add("d-block");
    let userName = document.querySelector("#userId").value;
    console.log(userName);
    let h2title = document.querySelector('#h2title');
    userName = userName.charAt(0).toUpperCase()+userName.slice(1);
    h2title.innerHTML = `Hossy, ${userName}!, Welcome!`;
    time();
}

    
    function time() {
        let timeShow = document.querySelector("#timeShow");
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var day = d.getDay();
        timeShow.innerHTML = 
          ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " "+ weekdays[day];
          setInterval(time, 1000);
      }      
      
