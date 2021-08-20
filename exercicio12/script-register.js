console.log('Arquivo funcionando');

//  load: evento disparado quando a janela termina de carregar
window.addEventListener('load', (eventLoad) => {
    let formulario = document.querySelector('.form-auth');
// console.log(formulario); teste
    let btnSubmit = document.querySelector('.form-auth button');

    btnSubmit.addEventListener('click', (eventSubmit) => {

        eventSubmit.preventDefault();

        let inputEmail = document.querySelector('input[name="email"]');
        let inputNome = document.querySelector('input[name="name"]');
        let inputSobrenome = document.querySelector('input[name="surname"]');
        let inputUsuario = document.querySelector('input[name="username"]');
        let inputSenha = document.querySelector('input[name="password"]');
        let inputBirth = document.querySelector('input[name="birthday"]');
        
      
        let listaErros = document.querySelector('.erros');
        let erros  = [];
        
// zera o conteudo da lista do html
        listaErros.innerHTML = '';

        if(inputEmail.value == ''){
            erros.push('O campo E-mail está vazio.');
        }else if(!inputEmail.value.includes('@') || !inputEmail.value.includes('.')){
            erros.push('O campo E-mail deve conter "@" e ".".');
        }else if (inputEmail.value.length <10){
            erros.push('O campo E-mail deve conter no mínimo 10 caracteres.');
        }else if(inputEmail.value.length >180){
             erros.push('O campo E-mail deve conter no máximo 180 caracteres.');
        }
        
        if(inputNome.value == ''){
            erros.push('O campo Nome está vazio.');
        }else if(inputNome.value.length >80){
            erros.push('O campo Nome deve conter no máximo 80 caracteres.');
        }else if(inputNome.value.length <2){
            erros.push('O campo Nome deve conter no mínimo 2 caracteres.');
        }

        if(inputSobrenome.value == ''){
            erros.push('O campo Sobrenome está vazio.');
        }else if(inputNome.value.length >100){
            erros.push('O campo Sobrenome deve conter no máximo 100 caracteres.');
        }else if(inputNome.value.length == 1){
            erros.push('O campo Sobrenome deve conter no mínimo 2 caracteres.');
        }

        if(inputBirth.value == ''){
            erros.push('O campo Data de Nascimento está vazio');
        }
        
        
    
        
        

        


        if(inputUsuario.value == ''){
            erros.push('O campo Nome do Usuário está vazio.');
        }else if(inputNome.value.length >15){
            erros.push('O campo Nome do Usuário deve conter no máximo 15 caracteres.');
        }else if(inputNome.value.length <10){
            erros.push('O campo Nome do Usuário deve conter no mínimo 10 caracteres.');
        }

        if(inputSenha.value == ''){
            erros.push('O campo Senha está vazio.');
        }else if(inputNome.value.length >100){
            erros.push('O campo Senha deve conter no máximo 100 caracteres.');
        }else if(inputNome.value.length <8){
            erros.push('O campo Senha deve conter no mínimo 8 caracteres.');
        }


        // for (const erro of erros) {
        //     listaErros.innerHTML += '<li>' + erro + '</li>';
        // }

        listaErros.style.cssText="list-style-type:none; text-align:left; color:red";
    
        
        /*****ex 3*****/

        function idade(dataDeNascimento, minimo, maximo){
            console.log(dataDeNascimento.value);
                var hoje = new Date(); //instancia do JS
                var todayMonth = hoje.getMonth(); //metodo que retorna mes da data JS
                var niver = dataDeNascimento.value.split("-");
                var age = hoje.getFullYear() - niver[0];
                if (todayMonth < niver[1]-1){ //-1 pq a contagem da data JS começa do 0 e vai ate 11
                    age--;
                }
                if ((hoje.Month == niver[1]-1) && hoje.getDate()<niver[2]){
                    age--;
                }
                console.log(age);
                if(age<16){
                    erros.push("menor")
                }
            }
            idade(inputBirth, 16, 120);
            
            for (const erro of erros) {
                listaErros.innerHTML += '<li>' + erro + '</li>';
            }
        }); 
        
        /*****ex 2*****/
            function novoInput(){
                let inputBirth = document.createElement('input');
                    inputBirth.type='date'
                    inputBirth.name='birthday'
                    inputBirth.placeholder='Digite sua data de nascimento' //nao funcionou//
                let inputUsuario = document.querySelector('input[name="username"]');
                formulario.insertBefore(inputBirth, inputUsuario);
            }
            novoInput();
    

});