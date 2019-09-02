export  function createNode(nodeName) {
  return document.createElement(nodeName);
}

export  function getNnodes(nodeName, total) {
  const result = [];

  for (let i = 0; i < total ; i++) {
    result[i] = createNode(nodeName);
  }

  return result
}


export  function setAttrForEachNode(nodes, attr, value) {
  for(let i = 0; i < nodes.length; i++){
    nodes[i].setAttribute(attr, value)
  }
}


export  function setChilds(parent, childrens) {
  for (let i = 0; i < childrens.length; i++){
    parent.appendChild(childrens[i])
  }
}


export function createTable(lines, columns) {
  const table = createNode('table');

  for(let i = 0; i < lines; i++){
    const tableDates = getNnodes('td', columns);
    const tr = createNode('tr');

    setChilds(tr, tableDates);
    setChilds(table, [tr]);
  }

  return table
}

export function setBackground(node, url) {
  node.style.backgroundImage = url;
}

export function isSameString(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase()
}

export function showNotification(html, ms) {
  const notification = document.createElement('div');
  notification.className = "notification";

  notification.innerText = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), ms);
}
