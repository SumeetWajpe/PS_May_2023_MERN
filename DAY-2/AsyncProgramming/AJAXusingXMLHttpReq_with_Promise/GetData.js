function GetData() {
  return new Promise((resolve, reject) => {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status != 200) {
        reject(xmlHttpReq.status + " Something went wrong !");
      }
    };
    xmlHttpReq.send();
  });
}
