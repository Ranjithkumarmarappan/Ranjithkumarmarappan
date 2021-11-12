
const fileBtn = document.getElementById("upload-file")




function fileupload() {
    console.log(fileBtn.files);
}

function disablefirstbutton() {
    document.getElementById("firstbutton").disabled = true;
    document.getElementById("secondbutton").disabled = false;
}
