let name =document.getElementById('name');
let password = document.getElementById('password');
let email = document.getElementById('email');




let datautilusateur
if (localStorage.page != null){
  datautilusateur = JSON.parse(localStorage.page)
}else {
  datautilusateur = [];
};


btn.onclick = function (){
  let data = {
    nom : name.value,
    gmail : email.value,
    keyword : password.value
    
  };
  datautilusateur.push(data);
  console.log(datautilusateur);
  localStorage.setItem('page', JSON.stringify(datautilusateur));
  deletedata()
};
function deletedata() {
  name.value= '',
  email.value= '',
  password.value= ''
};
let btn_signup = document.getElementById('btn-signup');
let btn_login = document.getElementById('btn-login');
let container = document.getElementById('container');
let container_end = document.getElementById('container-end');
let signup = document.getElementById('signup');
let login = document.getElementById('login');
let body = document.getElementById('body');


btn_signup.onclick = function (){
  if (window.innerWidth > 550){
    container.style.marginLeft = '50%';
  container.style.borderTopLeftRadius = '50%';
  container.style.borderBottomLeftRadius= '50%';
  container.style.borderTopRightRadius ='0';
  container.style.borderBottomRightRadius='0';
  container.style.transformStyle = 'scale3d(1.4,1.4,1.2)';
  container.style.background = 'linear-gradient(to left ,rgb(243, 36, 250),rgb(39, 137, 250) 15%,rgb(96, 231, 255) ,rgb(179, 174, 174))';
  }else {
    signup.style.display = 'block';
    login.style.display = 'none';
    signup.style.transition = '1s ease-in-out';
    container.style.transform = 'scaleY(1.05)';
    signup.style.background = 'transparent';
    
  }
  
};
btn_login.onclick = function (){
  if (window.innerWidth > 550){
    container.style.marginLeft = '0%';
  container.style.borderTopRightRadius = '50%';
  container.style.borderBottomRightRadius= '50%';
  container.style.borderTopLeftRadius ='0';
  container.style.borderBottomLeftRadius='0';
  container.style.transformStyle = 'scale3d(1.4,1.4,1.2)';
  container.style.background = 'linear-gradient(to right ,rgb(243, 36, 250),rgb(39, 137, 250) 15%,rgb(96, 231, 255) ,rgb(179, 174, 174))';
  }else {
    signup.style.display = 'none';
    login.style.display = 'block';
    login.style.transition = '1s ease-in-out';
    container.style.transform = 'scaleY(1)';
    login.style.background = 'transparent';
  }
  
};



  
  