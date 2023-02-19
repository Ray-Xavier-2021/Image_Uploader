// Drag & Drop 
const dropZone = document.querySelector('.drop-zone'); //inputDiv
const imgUpload = document.getElementsByClassName('upload'); //images/output
const uploadInput = document.getElementById('upload-file'); //input
const uploadBtn = document.querySelector('.upload-button') //button
const thumbnail = document.querySelector('.img-thumbnail') //tbh thumbnail
const message = document.querySelector('.upload-message') //message
let file;

// For custom label button: WORKS
// uploadInput.addEventListener('click', function() {
  // console.log('clicked')
// })

// uploadInput.onclick = () => console.log('clicked')
// uploadInput.click()


// Upload File Button: WORKS
// uploadBtn.addEventListener('click', function() {
//   uploadInput.click()
//   console.log('clicked')
//   console.log(uploadInput)
// })

// ES6 File Button
uploadBtn.onclick = () => uploadInput.click()


// Event listener for input change: WORKS
// uploadInput.addEventListener('change', function() {
  //   file = this.files
  //   loading()
  // })

// uploadInput.onchange = () => {
//   console.log('file change')
//   file = this.files[0]

//   loading()
// }

// File input change function: WORKS
function inputChange() {
  file = this.files[0]
  console.log(file)
  console.log(file.name)
  console.log(file.type)
  console.log(file.size)
  console.log('File change')

  // Styles to remove during click/drag/drop
  // thumbnail.style.display = 'none'
  // message.style.display = 'none'
  // dropZone.style.border = 'none'
  loading()
}

// ES6 File Change
uploadInput.onchange = inputChange


//Drag and Drop Functionality
// ondragover: A dragged element is over the drop target
// ondragleave: A dragged element leaves the drop target
// ondrop: A dragged element is dropped on the target

// Drag Over Event Listener: WORKS
// dropZone.addEventListener('dragover', function(e) {
//   e.preventDefault()
//   console.log('Over drop zone')
//   // Styles to remove during click/drag/drop
//   thumbnail.style.visibility = 'hidden'
//   message.textContent = 'Drop to Upload Image...'
//   message.style.paddingLeft = '24px'
//   dropZone.style.border = 'none'

// })

// ES6 Drag Over Drop Zone: WORKS
// dropZone.ondragover = (e) => {
  //   e.preventDefault()
//   //   // Styles to remove during click/drag/drop
//   thumbnail.style.visibility = 'hidden'
//   message.textContent = 'Drop to Upload Image...'
//   message.style.paddingLeft = '24px'
//   dropZone.style.border = 'none'
// }

// Handle Drag Over Function: WORKS
function handleDragOver(e) {
  e.preventDefault()
  // Styles to remove during click/drag/drop
  thumbnail.style.visibility = 'hidden'
  message.textContent = 'Drop to Upload Image...'
  message.style.paddingLeft = '24px'
  dropZone.style.border = 'none'
}

dropZone.ondragover = handleDragOver


// Drag Leave Function: WORKS
// dropZone.addEventListener('dragleave', function() {
//   // Styles to remove during click/drag/drop
//   thumbnail.removeAttribute('style')
//   message.removeAttribute('style')
//   message.textContent = 'Drag & Drop your image here'
//   dropZone.removeAttribute('style')
// })

// ES6 Drag Leave Drop Zone: WORKS
// dropZone.ondragleave = () => {
//   // Styles to remove during click/drag/drop
//   thumbnail.removeAttribute('style')
//   message.removeAttribute('style')
//   message.textContent = 'Drag & Drop your image here'
//   dropZone.removeAttribute('style')
// }


// Handle Drag Leave Function: WORKS
function handleDragLeave() {
  // Styles to remove during click/drag/drop
  thumbnail.removeAttribute('style')
  message.removeAttribute('style')
  message.textContent = 'Drag & Drop your image here'
  dropZone.removeAttribute('style')
}

dropZone.ondragleave = handleDragLeave


// Drop Function: WORKS
// dropZone.addEventListener('drop', function(e) {
//   e.preventDefault()
//   file = e.dataTransfer.files[0]
//   console.log(file)
//   // Styles to remove during click/drag/drop
//   thumbnail.removeAttribute('style')
//   thumbnail.style.display = 'none'
//   message.removeAttribute('style')
//   message.style.display = 'none'
//   dropZone.style.border = 'none'
//   loading()
// })

// ES6 Drop Function: WORKS
// dropZone.ondrop = (e) => {
//   e.preventDefault()
//   file = e.dataTransfer.files[0]
//   console.log(file)
//   // Styles to remove during click/drop
//   thumbnail.removeAttribute('style')
//   thumbnail.style.display = 'none'
//   message.removeAttribute('style')
//   message.style.display = 'none'
//   dropZone.style.border = 'none'
//   loading()
// }

// Handle drop
function handleDrop(e) {
  e.preventDefault()
  file = e.dataTransfer.files[0]
  
  // Styles to remove during click/drop
  thumbnail.removeAttribute('style')
  thumbnail.style.display = 'none'
  message.removeAttribute('style')
  message.style.display = 'none'
  dropZone.style.border = 'none'
  
  loading()
}

dropZone.ondrop = handleDrop


// Display Image Function: WORKS
function displayImg() {
  // Get file type
  let fileType = file.type
  // Set valid file type(s)
  
  // let validFiles = 'image/*'
  let validFiles = ["image/jpeg", "image/png", "image/jpg", "image/gif"]

  // Check if file type is in valid file types
  if (validFiles.includes(fileType)) {
    
    // Create file reader instance
    let fileReader = new FileReader()
    
    // Get file Url
    fileReader.readAsDataURL(file)
    
    // Load file:
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let fileImg = `<img class='upload' src='${fileURL}' alt='Image'>`

      copyInput.value = fileURL

      // Upload file to Drop Zone
      // dropZone.innerHTML = fileImg
      successImg.innerHTML = fileImg
      dropZone.style.border = 'none'
      
      // clipboard.setAttribute('hidden', '')
      uploader.setAttribute('hidden', '')
      loader.setAttribute('hidden', '')
      successUploader.removeAttribute('hidden')
      
    }
    
  } else {
    
    let imgUpload = document.querySelector('.upload');
    // imgUpload.remove()
    
    loader.setAttribute('hidden', '')
    successUploader.setAttribute('hidden', '')
    uploader.removeAttribute('hidden')

    handleWrongFile()
  }
  
}

// Copy Functionality
function copyFile() {
 
}

// copyBtn.addEventListener('click', function() {
//   // Get text value
//   let text = copyInput.value
//   console.log(text)

//   // Write to clipboard
//   navigator.clipboard.writeText(text)

//   console.log(navigator.clipboard.writeText(text))
// })

// Handle Clipboard
function handleClipboard(e) {
  e.preventDefault()

  // Get text value
  let text = copyInput.value
  console.log(text)

  // Write to clipboard
  navigator.clipboard.writeText(text)

  console.log(navigator.clipboard.writeText(text))

  successUploader.setAttribute('hidden', '')
  clipboard.removeAttribute('hidden')

  let copyImg = `<img class="clipboard-image" src="${text}" alt="Image">`

  clipboardImgContainer.innerHTML = copyImg

  // Append
  clipboard.appendChild(clipboardImgContainer)

  console.log(clipboardImgContainer)
}

copyBtn.onclick = handleClipboard

// Wrong File Display
function handleWrongFile() {
  dropZone.appendChild(thumbnail)
    thumbnail.removeAttribute('style')
    message.textContent = 'This is not a valid file!'
    message.classList.add('wrong-file')
    dropZone.appendChild(message)
    message.removeAttribute('style')
    dropZone.removeAttribute('style')
}

// Loading Display
function loading() {
  uploader.setAttribute('hidden', '')
  // clipboard.setAttribute('hidden', '')
  loader.removeAttribute('hidden')

  setTimeout(displayImg, 3000)
}