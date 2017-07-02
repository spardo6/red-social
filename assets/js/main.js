window.app = window.app || {};

app.Main = (function () {
	'use strict';

	function _ () {
		try {
			this.__login__ = document.getElementById('view-login');
			this.__edit__ = document.getElementById('view-edit');
			this.__profile__ = document.getElementById('view-profile');

			this.bindEvents();
		} catch (e) {
			console.error(e);
		}
	};

	_.prototype.singin = function (user, password) {
		try {
			var Self = this;
			
			if (user == "admin" && password == "123") {
				Self.__login__.classList.add('hide');
				Self.__edit__.classList.remove('hide');
			} else {
				alert("Datos de autenticación no validos.");
			}
		} catch (e) {
			console.error(e);
		}
	}

	_.prototype.save = function (name, lastname, age, type, motorcycle) {
		try {
			var Self = this;
			
			document.getElementById("motorcycleLabel").innerText = motorcycle;
			document.getElementById("nameLabel").innerText = name + ' ' + lastname;
			document.getElementById("ageLabel").innerText = type + ' de ' + age + ' años';

			Self.__edit__.classList.add('hide');
			Self.__profile__.classList.remove('hide');
		} catch (e) {
			console.error(e);
		}
	}

	_.prototype.avatar = function (e) {
		try {
			var Self = this;
			
			var avatar = e.target.files[0];

            if (!avatar.type.match('image.*')) {
                return;
            }
       
            var reader = new FileReader();
           
            reader.onload = (function(theFile) {
               	return function(e) {
               		document.getElementById('avatarImg').setAttribute('src', e.target.result);
               	};
           	})(avatar);

            reader.readAsDataURL(avatar);
		} catch (e) {
			console.error(e);
		}
	}

	_.prototype.bindEvents = function () {
		try {
			var Self = this;
			
			document.getElementById('formLogin').addEventListener('submit', function (e) {
				e.preventDefault();

				var user = document.getElementById("user").value;
				var password = document.getElementById("password").value;

				Self.singin(user, password);
			});

			document.getElementById('formProfile').addEventListener('submit', function (e) {
				e.preventDefault();

				var name = document.getElementById("name").value;
				var lastname = document.getElementById("lastname").value;
				var age = document.getElementById("age").value;
				var type = document.getElementById("type").value;
				var motorcycle = document.getElementById("motorcycle").value;

				Self.save(name, lastname, age, type, motorcycle);
			});

			document.getElementById('avatar').addEventListener('change', function (e) {
				Self.avatar(e);
			});
		} catch (e) {
			console.error(e);
		}
	}

	return new _;
})();