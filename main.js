const time = document.getElementById('time');
const greet = document.getElementById('greeting');
const userName = document.getElementById('name');
const goal = document.getElementById('goal');
const code = document.querySelector('.header-content h1 a');





//SHOW TIME
const showTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();

  //DISPLAYTIME 
  time.innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`;
  setTimeout(showTime, 1000);

};

//ADD ZEROS
const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

//SHOW BACKGROUND
const showBackground = () => {
  let today = new Date();
  let hour = today.getHours();

  //CHOOSING BACKGROUND
  let backgroundType;
  let htmlBody = document.body;

  if (hour < 12) {
    // Morning
    htmlBody.style.background = "url('img/morning.jpg')";
    greet.textContent = "Good Morning";
    htmlBody.style.color = 'white';
  } else if (hour >= 12 && hour <= 19) {
    // Noon
    htmlBody.style.background = "url('img/noon.jpg')";
    greet.textContent = "Good Afternoon";
    htmlBody.style.color = 'white';
  } else {
    // Night
    htmlBody.style.background = "url('img/night.jpg')";
    greet.textContent = "Good Evening";
    htmlBody.style.color = 'white';
  }

};

//SET NAME
const setName = (e) => {
  if (e.keyCode === 13) {
    localStorage.setItem('username', e.target.innerText);
    userName.blur();
  } else {
    localStorage.setItem('username', e.target.innerText);
  }
};

//GET NAME 
const getName = () => {
  if (localStorage.getItem('username') === null) {
    userName.textContent = "Enter Your Name!";
  } else {
    userName.textContent = localStorage.getItem('username');
  }
};

//SET GOAL
const setGoal = (e) => {
  if (e.keyCode === 13) {
    localStorage.setItem('goal', e.target.innerText);
    goal.blur();
  } else {
    localStorage.setItem('goal', e.target.innerText);

  }
}

//GET GOAL 
const getGoal = () => {
  if (localStorage.getItem('goal') === null) {
    goal.textContent = "Write Your Goal!";
  } else {
    goal.textContent = localStorage.getItem('goal');
  }
};





userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);


showTime();
showBackground();
getName();
getGoal();