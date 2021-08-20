console.log('Arquivo externo funcionando')

let btnLike = document.getElementById('heart');
console.log(btnLike)  
const iconFull = document.querySelector('#full-heart')
const iconEmpty = document.querySelector('#empty-heart')
iconFull.style.display = 'none';
let numberOfLikes = 1

function like(){
    if(btnLike.classList.contains('full')){
        let likesElement = document.querySelector('.likes span')
        let numberOfLikes = parseInt(likesElement.textContent)
        btnLike.classList.remove('full');
        btnLike.classList.add('empty')
        iconEmpty.style.display = 'none';
        iconFull.style.display= 'block';
        console.log(likesElement.textContent)
        document.querySelector('.likes span').textContent = numberOfLikes-1;
    } else{
        let likesElement = document.querySelector('.likes span')
        let numberOfLikes = parseInt(likesElement.textContent)
        btnLike.classList.remove('empty');
        btnLike.classList.add('full');
        iconEmpty.style.display = 'block';
        iconFull.style.display = 'none'
        document.querySelector('.likes span').textContent = numberOfLikes+1;
    }

}
btnLike.addEventListener('click', function(e){
    like()
})
