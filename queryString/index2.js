function getParams() {
  const loc = window.location.toString();
  const obj = {};

  if (loc) {
    const params = loc.split('?')[1];
    if (params && params.length > 0) {
      params.split('&').forEach(function (item) {
        const splitItem = item.split('=');
        return obj[splitItem[0]] = splitItem[1];
      });
    }
  }

  return obj;
}

const params = getParams();

console.log('text', params.text);
if (params.text) {
  //const str = params.text;
  const str = params.text.replaceAll('@', '=');
  const str2 = window.decodeURIComponent(str);
  console.log(str2)

  document.getElementById('result').innerHTML = str2;
}
