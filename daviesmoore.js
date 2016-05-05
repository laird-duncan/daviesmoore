window.onload = function() {
	document.getElementById("echo-form").onsubmit = function() {
		console.log(document.getElementById("echo-input").value);
		return false;
	};
};