const changeCounterClose = () => {
  let counter = window.localStorage.getItem('frame2Close');
  window.localStorage.setItem('frame2Close', counter ? ++counter : 1);
}

document.getElementById('btnClose').onclick = () => {
  changeCounterClose();
}

window.addEventListener('beforeunload', function (e) {
  changeCounterClose()
})
