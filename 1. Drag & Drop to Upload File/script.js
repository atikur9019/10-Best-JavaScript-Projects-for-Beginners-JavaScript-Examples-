const dropArea = document.querySelector('#drop-area');
const inputFile = document.querySelector('#input-file');
const imageView = document.querySelector('#img-view');
const para = document.querySelector("p");

inputFile.addEventListener('change', uploadImage)

function uploadImage() {
    let file = inputFile.files[0];
    let imgLink = URL.createObjectURL(file);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    para.innerHTML = "Release to Upload File";
    para.classList.add('size-big');
});

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    para.innerHTML = `Drag and drop or click here<br>to upload image`
    para.classList.remove('size-big');
})
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;

    uploadImage()
});
