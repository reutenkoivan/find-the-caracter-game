import {
  createNode,
  setAttrForEachNode,
  createTable,
  setBackground,
  isSameString,
  showNotification
} from "./utils.js";

import { store } from "./store.js";
//---------------------------------------------//


const container = createNode('div');
container.className = 'container';

const table = createTable(store.global.table.lines, store.global.table.columns);
setAttrForEachNode(table.getElementsByTagName('td'), 'class', 'block');
setBackground(table, `url(${store.backgrounds[store.user.currentBackgroundIndex].url})`);


// adding events //


container.addEventListener('click', function(e){
  const { clickCount } = store.user;
  const { maxClicks } = store.global;
  const {className} = e.target;

  if(className === 'block' && clickCount < maxClicks) {
    e.target.classList.add('choosed');
    store.user.clickCount++;
  }
});


//---------------------------------------------//

function nextStep() {
  const { backgrounds, user, global } = store;

  user.score += global.scoresConfig[user.clickCount];
  document.getElementById('score').innerText = `Score ${user.score}`;

  user.currentBackgroundIndex++;
  setBackground(table, `url(${backgrounds[user.currentBackgroundIndex].url})`);

  user.clickCount = 0;
  setAttrForEachNode(table.getElementsByTagName('td'), 'class', 'block');
}

function finalStep() {
  const { user, global} = store;

  user.score += global.scoresConfig[user.clickCount];
  document.getElementById('score').innerText = `Final score ${user.score}`;

  document.getElementById('form').style.display = 'none';
  table.style.display = 'none';
  document.getElementsByClassName('content')[0].style.justifyContent = 'center';
}

//---------------------------------------------//


document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  const { backgrounds, user } = store;
  const input = e.target[0];

  if ( isSameString(input.value, backgrounds[user.currentBackgroundIndex].answer) ){

    user.completedId.push(backgrounds[user.currentBackgroundIndex].id);
    backgrounds[user.currentBackgroundIndex + 1] ? nextStep() : finalStep();
    input.value = '';

  } else {
    showNotification('Wrong!', 2000);
    document.getElementById('form').classList.add('error');
    setTimeout(() => document.getElementById('form').classList.remove('error'), 2000)
  }
});


// painting //


container.appendChild(table);
document.querySelector('#root').appendChild(container);
