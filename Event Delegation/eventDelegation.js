const containerEl = document.getElementById('container');

const clickHandler = (event) => {
    if(event.target.matches('button')) {
        event.target.textContent = 'clicked!';
    }
};

containerEl.addEventListener('click', clickHandler);