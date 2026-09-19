const orderDialog = document.querySelector('#order-dialog');
let previousFocus = null;
document.querySelectorAll('[data-order]').forEach(button => button.addEventListener('click', () => {
  previousFocus = button;
  orderDialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelector('[data-close]').addEventListener('click', () => orderDialog.close());
orderDialog.addEventListener('click', event => {
  if (event.target === orderDialog) {
    const rect = orderDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) orderDialog.close();
  }
});
orderDialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  previousFocus?.focus();
});
