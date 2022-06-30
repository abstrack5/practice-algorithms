// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = parseInt(this.getAttribute('data-count'));
//   count++;

//   this.setAttribute('data-count', count);
//   this.textContent = `Clicks: ${count}`;
// };

// buttonEl.addEventListener('click', clickHandler);



const buttonEl = document.getElementById('my-button');

const clickHandler = () => {
    let count = 0;

    return function () { // closure, cant use arrow functions for this. keyword
        count++;
        this.textContent = `you've clicked me ${count} times!`
    }
}

buttonEl.addEventListener("click", clickHandler());
