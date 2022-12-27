const MODAL_ACTIVE_CLASS = 'modal-active';

const callFormBtn = document.querySelector('#call-form-btn');

const modalForm = document.querySelector('#modal-form');

const form = document.querySelector('#modal-form form');

const modalSuccess = document.querySelector('#modal-success');


function closeModals(e) {
    e.preventDefault();

    modalForm.classList.remove(MODAL_ACTIVE_CLASS);
    modalSuccess.classList.remove(MODAL_ACTIVE_CLASS);

    // document.body.classList.remove('body-fixed');
}

callFormBtn.addEventListener('click', function () {
    modalForm.classList.add(MODAL_ACTIVE_CLASS);

    const modalFormClose = document.querySelector('#modal-form-close');
    modalFormClose.addEventListener('click', closeModals);

    // document.body.classList.add('body-fixed');

    // form.addEventListener('submit', sendUserInfo);
});