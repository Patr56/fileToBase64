var buttonEl = document.getElementById('button');

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);

var reader  = new FileReader();
reader.onloadend = function () {
    console.log(reader.result);
};

function reqListener () {
    var blob = new Blob ([this.responseText]);
    console.log(reader.readAsDataURL(blob));
}

buttonEl.onclick = function () {
    oReq.open("GET", "test.pdf");
    oReq.send();
};
