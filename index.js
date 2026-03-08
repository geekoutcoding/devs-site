// Create main UI container
const ui = document.createElement("div");
ui.style.position = "fixed";
ui.style.top = "50%";
ui.style.left = "50%";
ui.style.transform = "translate(-50%, -50%)";
ui.style.background = "#111";
ui.style.color = "white";
ui.style.padding = "25px";
ui.style.borderRadius = "10px";
ui.style.textAlign = "center";
ui.style.fontFamily = "Arial";
ui.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
ui.style.width = "300px";

// Title
const title = document.createElement("h2");
title.textContent = "DoBig Studio";
title.style.marginBottom = "10px";

// Description
const desc = document.createElement("p");
desc.textContent = "Welcome to DoBig! Create big things.";

// YouTube link
const yt = document.createElement("a");
yt.href = "https://www.youtube.com/@CatwebDobig";
yt.textContent = "Try out our YouTube Channel";
yt.target = "_blank";
yt.style.display = "block";
yt.style.marginTop = "15px";
yt.style.color = "#ff4444";
yt.style.textDecoration = "none";
yt.style.fontWeight = "bold";

// Append elements
ui.appendChild(title);
ui.appendChild(desc);
ui.appendChild(yt);

// Add UI to page
document.body.appendChild(ui);
