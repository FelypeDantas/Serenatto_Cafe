const inputCheck = document.querySelector('#modo-claro');
const elemento = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');

    if (temaSalvo) {
        elemento.setAttribute("data-bs-theme", temaSalvo);
        inputCheck.checked = temaSalvo === 'dark';
    } else {
        const prefereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const modoInicial = prefereDark ? 'dark' : 'light';
        elemento.setAttribute("data-bs-theme", modoInicial);
        inputCheck.checked = prefereDark;
    }
});

inputCheck.addEventListener('change', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute("data-bs-theme", modo);
    localStorage.setItem('tema', modo);
});

const form = document.querySelector('#contato');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
