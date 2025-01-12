// ==UserScript==
// @name         7emmerli
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  A script that asks Raouf Ould Ali to put your problem in red
// @downloadURL https://github.com/SpeedCode210/algerianmo-7emmerli/raw/main/script.user.js
// @author       Raouf Ould Ali
// @match        https://www.algerianmo.com/problems/*/?sub=*
// @match        https://algerianmo.com/problems/*/?sub=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=algerianmo.com
// ==/UserScript==

if(/.+algerianmo\.com\/problems\/.+\/\?sub=.+/.test(window.location.href)){

const getParameter = (key) => {
    // Address of the current window
    let address = window.location.search;
    // Returns a URLSearchParams object instance
    let parameterList = new URLSearchParams(address);
    // Returning the respected value associated
    // with the provided key
    return parameterList.get(key);
}


function decryptURL(encrypted) {
    const key = "AlGeRiANmO";
    let decrypted = "";
    for (let i = 0; i < encrypted.length; i++) {
        decrypted += String.fromCharCode(encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decrypted;
}



if(getParameter("sub") == 0) throw true;

if (document.body.textContent.includes('إجابات التلاميذ الآخرين') || document.body.textContent.includes('هذه الإجابة غير صحيحة. يمكنك الرد في التعليقات')) throw true;

document.getElementsByTagName("h2")[0].innerHTML += `<a id="a7mar" class="btn btn-danger" style="margin-right:15px">7emmerli</a>`;

document.getElementById("a7mar").addEventListener("click", ()=>{
    const url = decryptURL(')\x183\x15!Sna\t&2\x0F(\x176G"!\x00` \x1C.J%\f#&\x02 *\x1FhTa[vwX|rYwSd[q|T|p^h7a\v\bc\x18+"\x18\x012=\';( ;)\x16\x1F\x14\x16\n c\x14 s\x03*\x13e\x02\x00/*\x0Ey)q=\x06.79\x1D\x062;\x13\x12: \x18\t?&"5\x13$g\x11\x19\x1D?\x04\t');

    const request = new XMLHttpRequest();
      request.open("POST", url);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "AutoTa7mir",
        avatar_url: "https://www.algerianmo.com/static/images/logo.png",
        content: "!jwics93n9sue93djeiw9e " + getParameter("sub")
      }

      request.send(JSON.stringify(params));

    alert("The request has been sent !");

});

}
