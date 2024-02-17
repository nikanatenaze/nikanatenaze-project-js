
let image = document.getElementById("image-id")
let imageuploadinput = document.getElementById("input-file")

image.src = localStorage.getItem("Userimage")

imageuploadinput.addEventListener("change", function(){
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("Userimage", reader.result)
    })
    
    if (image) {
        reader.readAsDataURL(image)
    }
})


imageuploadinput.addEventListener("change", function(){
    image.src = URL.createObjectURL(imageuploadinput.files[0])
    localStorage.setItem("Userimage", image.src)
})

//

let changename = document.getElementById("change-name")
let changeemail = document.getElementById("change-email")
let changepassword = document.getElementById("change-password")

changename.value = localStorage.getItem("UserName")
changeemail.value = localStorage.getItem("UserMail")
changepassword.value = localStorage.getItem("UserPassword")

let savebtn = document.getElementById("save-btn")

image.src = "https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png"

function checka() {
    if(localStorage.getItem("Userimage")) {
        image.src = localStorage.getItem("Userimage")
    }
    else {
        image.src = "https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png"
    }
}

checka()

savebtn.addEventListener("click", function(){
    window.location.reload
    localStorage.setItem("UserName", changename.value)
    localStorage.setItem("UserMail", changeemail.value)
    localStorage.setItem("UserPassword", changepassword.value)
    
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
})

