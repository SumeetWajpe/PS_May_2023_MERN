function GetData(callback) {
  //1. XMLHttpRequest object
  //2. open()
  //3. register for onreadystatechange event
  //4. making ajax call with send()
  //5. Get the reponse & use it

  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
       callback(xmlHttpReq.responseText);
    }
  };
  xmlHttpReq.send();
}
