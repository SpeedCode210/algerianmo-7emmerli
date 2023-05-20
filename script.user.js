// ==UserScript==
// @name         7emmerli
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  A script that asks Raouf Ould Ali to put your problem in red
// @downloadURL https://github.com/SpeedCode210/algerianmo-7emmerli/raw/main/script.user.js
// @author       Raouf Ould Ali
// @match        https://www.algerianmo.com/problems/*/?sub=*
// @match        https://algerianmo.com/problems/*/?sub=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=algerianmo.com
// ==/UserScript==

const getParameter = (key) => {
    // Address of the current window
    let address = window.location.search;
    // Returns a URLSearchParams object instance
    let parameterList = new URLSearchParams(address);
    // Returning the respected value associated
    // with the provided key
    return parameterList.get(key);
}


if(getParameter("sub") == 0) throw true;

if (document.body.textContent.includes('إجابات التلاميذ الآخرين') || document.body.textContent.includes('هذه الإجابة غير صحيحة. يمكنك الرد في التعليقات')) throw true;

document.getElementsByTagName("h2")[0].innerHTML += `<a id="a7mar" class="btn btn-danger" style="margin-right:15px">7emmerli</a>`;

document.getElementById("a7mar").addEventListener("click", ()=>{
    const url = "https://discord.com/api/webhooks/1109215324789817465/ZBjFM5D1ttT92aGUQapF9YUdv3PET5yc-m-yhgW1xHj4Bk1HkiDxxlu8r7ZGm3fMB94T";

    const request = new XMLHttpRequest();
      request.open("POST", url);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "AutoTa7mir",
        avatar_url: "https://www.algerianmo.com/static/images/logo.png",
        content: "<@618112764208218114> Please put https://www.algerianmo.com/control/correction/" + getParameter("sub") + " in red !"
      }

      request.send(JSON.stringify(params));

    alert("The request has been sent to Raouf !");

});
