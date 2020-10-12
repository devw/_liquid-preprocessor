import html from "./index.liquid";

const node = document.createElement("div");
node.innerHTML = html;

document.body.appendChild(node);
