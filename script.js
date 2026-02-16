const inputCheck = document.querySelector('#modo-claro');
const elemento = document.querySelector('body');

inputCheck.addEventListener('change', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute("data-bs-theme", modo);
    localStorage.setItem('tema', modo);
});

window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        elemento.setAttribute("data-bs-theme", temaSalvo);
        inputCheck.checked = temaSalvo === 'dark';
    }
});

const prefereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefereDark) {
  document.body.setAttribute("data-bs-theme", "dark");
  inputCheck.checked = true;
}

