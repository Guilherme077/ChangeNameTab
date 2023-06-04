chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.url.startsWith("https")) {
      chrome.tabs.executeScript(tabId, {
        code: `
          var link = document.querySelector("link[rel~='icon']");
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
          }
          link.href = "https://cdn-icons-png.flaticon.com/128/720/720307.png";
        `
      });
    }
  });