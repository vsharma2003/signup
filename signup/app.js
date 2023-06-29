let form=document.getElementById("form");
let nameinput=document.getElementById("nameinput");
let emailinput=document.getElementById("emailinput");
let passwordinput=document.getElementById("passwordinput");
let noname=document.getElementById("no-name");
let noemail=document.getElementById("no-email");
let existemail=document.getElementById("exist-email");
let nopassword=document.getElementById("no-password");
let phnoinput=document.getElementById("phno");
let nophno=document.getElementById("no-phno")
let hidden="hidden";
 

form.addEventListener("submit",(e)=>{
    e.preventDefault();

   noname.classList.add(hidden);
   existemail.classList.add(hidden);
   nophno.classList.add(hidden);
   noemail.classList.add(hidden);
   nopassword.classList.add(hidden);    //for removing the hidden when the value is inserted
   let flag=false;       // declare all the feilds are empty of storage
    if(nameinput.value===''){
        flag=true;
        noname.classList.remove(hidden);
    
    }
   
    
    if(emailinput.value===''){
        flag=true;
        noemail.classList.remove(hidden);
       
    }
    if(passwordinput.value===''){
        flag=true;
       nopassword.classList.remove(hidden);//for removing the hidden when value is empty
       
    }
    if(phnoinput.value===''){
        flag=true;
        nophno.classList.remove(hidden);
       
    }
     if(flag) return;
    if(localStorage.getItem(emailinput.value)===null){
        localStorage.setItem(emailinput.value,
            JSON.stringify({
            name:nameinput.value,
            password :passwordinput.value,
            phonenumber:phnoinput.value
        })

        );
        location.href = "./home.html";
        return;
    }
    
    if(localStorage.getItem(emailinput.value)!==null){
        
        existemail.classList.remove(hidden);
    }

     


});