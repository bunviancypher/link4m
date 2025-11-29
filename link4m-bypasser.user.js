
// ==UserScript==
// @name         Link4M Bypasser
// @namespace    https://github.com/Bunmcpro
// @version      2.0.0
// @author       Bunvian
// @match        https://link4m.com/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://cdn.jsdelivr.net/gh/bunviancypher/link4m@main/core.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    if (window.Link4MBypasserCore) {
        window.Link4MBypasserCore.init(GM_getValue, GM_setValue, GM_addStyle);
    }
})();
