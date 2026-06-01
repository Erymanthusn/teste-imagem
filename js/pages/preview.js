import { renderizarPagina } from "../main.js"

export function criarPreview(){
    const container = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.classList.add('preview-container')

    const input = document.createElement('input')
    input.id = 'preview-input'
    input.classList.add('preview-input')
    input.type = 'file'
    input.accept = 'image/*'
    
    const label = document.createElement('label')
    label.className = 'preview-label'
    label.htmlFor = 'preview-input'

    const image = document.createElement('img')
    image.id = 'preview-image'
    image.className = 'preview-image'
    image.src = './img/upload-icon.svg'

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const saveButton = document.createElement('button')
    saveButton.className = 'button'
    saveButton.type = 'button'
    saveButton.id = 'upload-button'
    saveButton.textContent = 'Salvar'

    const cancelButton = document.createElement('button')
    cancelButton.className = 'button'
    cancelButton.type = 'button'
    cancelButton.textContent = 'Cancelar'
    cancelButton.onclick = () => renderizarPagina('login')

    buttonContainer.append(saveButton, cancelButton)

    previewContainer.append(input, label, image)

    container.append(previewContainer, buttonContainer)
    return container
}