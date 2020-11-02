function send() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.debug(`username: ${username}`);
  console.debug(`password: ${password}`);
  console.debug(`base: ${btoa(username + ':' + password)}`);

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open('POST', '');
  xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      console.log('Ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
      return;
    }

    console.log(this.responseText);
  };
  xhr.send();
}

document.getElementById('btnLogin').onclick = function () {
  send();
};
