// var form = document.getElementById('the-form');
// form.onsubmit = function() {
// 	var formData = new formData(form);

// 	formData.append('text', text);

// 	var xhr = new XMLHttpRequest();

// 	xhr.open('POST', form.getAttribute('action'), true);
// 	xhr.send(formData);

// 	return false;
// };


// $("the-form").on("submit", function(e) {
//     e.preventDefault();
//     $.post(this.action, $(this).serialize());
// });

var reservationEndPoint = 'http://tiy-atl-fe-server.herokuapp.com/collections/gamer',
    reservationForm = $('#theForm');
    // confirmReservation = $('.confirm-reservation');

reservationForm.on('submit', function (e) {
  e.preventDefault();

  var form = $(this),
      formData = {
        firstName: form.find('input[name="first-name" ]').val(),
        lastName: form.find('input[name="last-name" ]').val(),
        numParty: form.find('input[name="phone" ]').val(),
        email: form.find('input[name="email" ]').val(),
      };
      console.log(formData);
      form[0].reset();
});

