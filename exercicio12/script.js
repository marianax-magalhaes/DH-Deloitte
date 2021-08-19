console.log('Arquivo externo funcionando')

let btnLike = document.getElementById('btn');
    
function like(){
    if(btnLike.classList.contains('far')){
        btnLike.classList.remove('far');
        btnLike.classList.add('fas')
    } else{
        btnLike.classList.remove('fas');
        btnLike.classList.add('far')
    }
}
