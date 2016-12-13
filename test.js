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

var linkEl = document.getElementById('link');


linkEl.onclick = function (event) {
    event.preventDefault();
    magicDownload(this.href);
    return false;
};

function magicDownload(filePath) {
    oReq.open("GET", filePath);
    oReq.send();
}

buttonEl.onclick = function () {
    magicDownload('test.pdf');
};
