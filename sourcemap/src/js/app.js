var user = new User('Alex');

function getUserName() {
  return user.name
}

document.getElementById('btnUserName').onclick = function (event) {
  //labelUserName1 - ошибка, чтобы посмотреть как рефакторить
  document.getElementById('labelUserName1').innerHTML = getUserName();
}
