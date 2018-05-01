var inject = document.createElement("script");
inject.src=chrome.extension.getURL("inject.js");
(document.body||document.documentElement).appendChild(inject);