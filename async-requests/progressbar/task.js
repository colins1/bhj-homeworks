  document.querySelector('#send').onclick = function() {
    const formData = new FormData(document.forms.form);
		const xhr = new XMLHttpRequest();
			xhr.upload.onprogress = function(event) {
			const progress = event.loaded / event.total;
      document.getElementById('progress').value = progress;
		};
		xhr.open('POST', 'http://netology-slow-rest.herokuapp.com/upload.php');
		xhr.send(formData);
		return false;
	}
