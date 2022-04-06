const liveModal = document.getElementById('modal_main');
liveModal.className = 'modal modal_active';
liveModal.getElementsByClassName('modal__close')[0].onclick = () => liveModal.className = 'modal';
liveModal.getElementsByClassName('show-success')[0].onclick = function() {
  liveModal.className = 'modal';
  const closeModel = document.getElementById('modal_success');
  closeModel.className = 'modal modal_active';
  closeModel.getElementsByClassName('modal__close')[0].onclick = () => closeModel.className = 'modal';
};
