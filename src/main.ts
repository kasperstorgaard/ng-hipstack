const text = document.createTextNode('hello world!');
const tag = document.createElement('h1');
tag.appendChild(text);
document.body.appendChild(tag);
