console.log('Arquivo externo');

let btnToggleTheme = document.querySelector('.toggleTheme');
console.log(btnToggleTheme);

let body = document.querySelector('body')

// arrow function
btnToggleTheme.onclick = (e) => {
    // classList pega todas as classes dentro da nossa selecao, toggle: da alternancia
    body.classList.toggle('dark-theme');
}