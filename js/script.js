var btn = document.querySelector('.button-search-hotels');
var modal = document.querySelector('.form-search-hotels');
var datein = modal.querySelector('.form-date-in');
var dateout = modal.querySelector('.form-date-out');
var adults = modal.querySelector('[name=adults]');
var form = modal.querySelector(".form");

    btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.toggle('modal-show');
    datein.focus();

    form.addEventListener('submit', function (evt) {
      if (!datein.value || !dateout.value || !adults.value) {
        evt.preventDefault();
        form.classList.remove("modal-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add('modal-error');
      }
      });
});
