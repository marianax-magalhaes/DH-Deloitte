let btn = document.getElementById('darkmode')
console.log(btn);

btn.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
})