// ==UserScript==
// @name         getakka.net light mode
// @namespace    https://getakka.net/
// @version      0.1
// @description  Light mode for getakka.net
// @author       You
// @match        https://getakka.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=getakka.net
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.getElementById('wrapper')
        .setAttribute("style", "background-color:white;");

    var h1Array = [].slice.call(document.getElementsByTagName('h1'));
    var h2Array = [].slice.call(document.getElementsByTagName('h2'));
    var h3Array = [].slice.call(document.getElementsByTagName('h3'));
    var h5Array = [].slice.call(document.getElementsByTagName('h5'));
    var pArray = [].slice.call(document.getElementsByTagName('p'));
    var liArray = [].slice.call(document.getElementsByTagName('li'));

    var textArray = h1Array
        .concat(h2Array)
        .concat(h3Array)
        .concat(h5Array)
        .concat(pArray)
        .concat(liArray);

    var bodyArray = [].slice.call(document.getElementsByTagName('body'));
    var codeArray = [].slice.call(document.getElementsByTagName('code'));
    var preArray = [].slice.call(document.getElementsByTagName('pre'));
    var aArray = [].slice.call(document.getElementsByTagName('a'));
    var jumbotronArray = [].slice.call(document.getElementsByClassName('jumbotron'));

    var SetHtmlCollectionStyle = function (collection, newStyle) {
        collection.forEach(element => {
            element.setAttribute("style", newStyle)
        });
    }

    SetHtmlCollectionStyle(textArray,"color: black;");
    SetHtmlCollectionStyle(bodyArray,"color: #3A3B3C;");
    SetHtmlCollectionStyle(codeArray,"background: #f5f5f5; color: #3A3B3C !important;");
    SetHtmlCollectionStyle(preArray,"background: #f5f5f5;");
    SetHtmlCollectionStyle(aArray,"color: #25aae1;");
    SetHtmlCollectionStyle(jumbotronArray,"background-color: #eee;");
})();