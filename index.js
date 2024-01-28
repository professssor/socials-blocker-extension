const generateHTML = () => {
  return `<div
  <h1 style="color:white; font-size:2rem">Here is a list of things that are not doing the thing:</h1>
    <ol style="color:yellow ; list-style-type: decimal ">
        <li>“Preparing to do the thing isn't doing the thing.</li>
        <li>Scheduling time to do the thing isn't doing the thing.</li>
        <li>Making a to-do list for the thing isn't doing the thing.</li>
        <li>Telling people you're going to do the thing isn't doing the thing.</li>
        <li>Messaging friends who may or may not be doing the thing isn't doing the thing.</li>
        <li>Writing a banger tweet about how you're going to do the thing isn't doing the thing.</li>
        <li>Hating on yourself for not doing the thing isn't doing the thing.</li>
        <li>Hating on other people who have done the thing isn't doing the thing.</li>
        <li>Hating on the obstacles in the way of doing the thing isn't doing the thing.</li>
        <li>Fantasizing about all of the adoration you'll receive once you do the thing isn't doing the thing.</li>
        <li>Reading about how to do the thing isn't doing the thing.</li>
        <li>Reading about how other people did the thing isn't doing the thing.</li>
        <li>Reading this essay isn't doing the thing.</li>
    </ol>
    <p><strong>The only thing that is doing the thing is doing the thing. — Strangest Loop</strong></p>
    <p ><strong style="font-size:3rem; color:green">Go do the thing.</strong></p>


<div/>`;
};

const array = [
  "www.youtube.com",
  "www.instagram.com",
  "www.facebook.com",
  "www.x.com",
  "www.twitter.com",
];

let vroomvroom = true;

function applyStyles() {
  const isBlocked = array.some((link) => window.location.hostname === link);

  if (vroomvroom === true) {
    const overlayContainer = document.createElement("div");
    overlayContainer.innerHTML = generateHTML();
    overlayContainer.style.position = "fixed";
    overlayContainer.style.top = "0";
    overlayContainer.style.left = "0";
    overlayContainer.style.width = "100%";
    overlayContainer.style.height = "100%";
    overlayContainer.style.backgroundColor = "black";
    overlayContainer.style.zIndex = "9999";

    document.body.appendChild(overlayContainer);
  } else {
    console.log("reaching");
    // Remove overlay container if it exists
    const existingOverlay = document.querySelector("#overlayContainer");
    if (existingOverlay) {
      existingOverlay.remove();
    }
  }
}
applyStyles();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "backToContent") {
    vroomvroom = request.variableValue;
    applyStyles();
  }
});
