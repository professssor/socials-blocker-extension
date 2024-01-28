const btn = document.querySelector(".btn");
btn.innerHTML = "click the button ";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "backToContent") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "backToContent",
        variableValue: request.variableValue,
      });
    });
  }
});

btn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "backToContent",
      variableValue: true,
    });
  });
});
