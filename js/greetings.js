const loginForm = document.querySelector("#login-form");
const aa= document.querySelector("#aa");
const greet = document.querySelector("#greet")
const date = new Date();
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    if(date.getHours()>21 || date.getHours() <6){
        greeting.innerText = `Hava a good night ${username}!`;
    }
    else if(date.getHours()<=21 && date.getHours() >17){
        greeting.innerText = `Good evening ${username}!`;
    }
    else if(date.getHours()<=17 && date.getHours()>11){
        greeting.innerText = `Good afternoon ${username}!`;
    }
    else{
        greeting.innerText = `Good morning ${username}!`;

    }
  //  greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greet.style.marginBottom="18.1%"
}

aa.addEventListener("click",onLoginSubmit);
localStorage.removeItem("username");
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    paintGreetings(username);
}


