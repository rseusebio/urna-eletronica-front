function ajax(url, method, callback) {
  let request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open(method, url, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status == "200") {
      callback(request.responseText);
    }
  };
  request.send(null);
}


function vote(vereadorId, prefeitoId) {
  ajax(`http://3.83.161.213/vote/${vereadorId}/${prefeitoId}`,
    "POST",
    (res => {
      console.log("response", res);
    }));
}