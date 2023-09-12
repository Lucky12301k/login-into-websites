
let form=document.querySelector("form");form.addEventListener("submit",(e=>{e.preventDefault();let o=new FormData(form);fetch("https://script.google.com/macros/s/AKfycbxqHVFWzCx9Mc4w3jnEeBnoZq3DOCrtHop02Uc5oVOQ71ERZ6q2siocKGDmpu2eWEHv/exec",{method:"POST",body:o}).then((e=>e.text())).then((e=>console.log(e)))}));
