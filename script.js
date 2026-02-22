function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function login(){
  const user=document.getElementById('username').value;
  const pass=document.getElementById('password').value;
  if(user==='student' && pass==='1234'){
    document.getElementById('loginMsg').innerText='Login Successful! Welcome to Dashboard.';
  }else{
    document.getElementById('loginMsg').innerText='Invalid Login (Demo Mode)';
  }
}

function fakePayment(){
  alert('Redirecting to Payment Gateway (Integration Ready for Stripe/PayPal)');
}

function subscribe(){
  document.getElementById('subMsg').innerText='Subscribed Successfully!';
}