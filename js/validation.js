window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const username = document.getElementById('username')
    const surname = document.getElementById('surname')
    const phone = document.getElementById('phone')
    const email = document.getElementById('email')
    const age = document.getElementsByName('age')
    


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validateInputs()
    })

    const validateError = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'input-form error'
    }
    const validateOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'input-form ok'
    }

    const validateEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

    const validateInputs = ()=> {
        //capturar los valores ingresados por el usuario
        const usernameValue = username.value.trim()
        const surnameValue = surname.value.trim()
        const phoneValue = phone.value.trim()
        const emailValue = email.value.trim()
        
        
        //Validacion Datos

        //Validacion Nombre
        if(!usernameValue){
            validateError(username, 'Introduce tu nombre')
        }else{
            validateOk(username)
        }

        //Validacion Apellido
        if(!surnameValue){
            validateError(surname, 'Introduce tu apellido')
        }else{
            validateOk(surname)
        }

        //Validacion Teléfono
        if(!phoneValue){
            validateError(phone, 'Introduce tu teléfono')
        }else{
            validateOk(phone)
        }

        //Validación e-mail
        if(!emailValue){
            validateError(email, 'Introduce tu e-mail')            
        }else if(!validateEmail(emailValue)) {
            validateError(email, 'El e-mail no es válido')
        }else {
            validateOk(email)
        }

        //Validacion input Género seleccionado se realiza con required en HTML

        //Validacion input Edad seleccionado se realiza con required en HTML
        //Hago una segunda validación para saber si es menor de edad
        for (i=0; i<age.length; i++){
            console.log(age)
            if(age[i].checked){
                let age_selected = age[i].value;
                if(age_selected =='minor_age'){
                    alert('Lo sentimos pero para colaborar debes ser mayor de edad')
                }
            }
        }

        //Validacion input Colaboración seleccionado se realiza con required en HTML
    }
})