var buttonEl = document.getElementById('button');
var preEl = document.getElementById('pre');
var pre2El = document.getElementById('pre2');

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);

/**
 * method 1
 * @param str
 * @return {string}
 */
function b64EncodeUnicode2(str) {
    return window.btoa((encodeURIComponent(str)));
}

/**
 * method 2
 * @param str
 * @return {string}
 */
function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function reqListener () {
    var encodedData = b64EncodeUnicode(this.responseText); // encode a string
    var encodedData2 = b64EncodeUnicode2(this.responseText); // encode a string
    preEl.innerHTML = encodedData;
    pre2El.innerHTML = encodedData;

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
