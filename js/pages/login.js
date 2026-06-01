import { renderizarPagina } from "../main.js"

export function criarLogin(){
    const container = document.createElement('form')

    const inputEmail = document.createElement('input')
    inputEmail.type = 'text'
    inputEmail.placeholder = 'Digite seu Email'
    inputEmail.className = 'input-login'
    
    const inputSenha = document.createElement('input')
    inputSenha.type = 'password'
    inputSenha.placeholder = 'Digite sua Senha'
    inputSenha.className = 'input-login'

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const loginButton = document.createElement('button')
    loginButton.className = 'button'
    loginButton.type = 'button'
    loginButton.id = 'login-button'
    loginButton.textContent = 'Entrar'
    loginButton.onclick = () => renderizarPagina('preview')


    buttonContainer.append(loginButton)

    container.append(inputEmail, inputSenha, buttonContainer)

    return container
}