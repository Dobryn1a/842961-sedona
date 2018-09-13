
    var btn = document.querySelector('.button-search-hotels');
    var modal = document.querySelector('.form-search-hotels');

    btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.toggle('modal-show');

    });
