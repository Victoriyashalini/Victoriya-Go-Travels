function submitForm(){
	document.getElementById('subscribeform').addEventListener('submit',function(event){
    document.getElementById('emailerror').textContent='';
	if(!isValidEmail(emailInput.value)){
		emailerror.textContent='Please enter a valid email address.';
		event.preventDefault();
	}
	else{
		document.getElementById('message').textContent='Form submitted successfully!';
		event.preventDefault();
	}
	});
	function isValidEmail(email){
		var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

}