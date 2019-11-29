function loadrequest(){
   
    let fnamein = document.getElementById("fnamein").value;
    let lnamein = document.getElementById("lnamein").value;
    let constiin = document.getElementById("constiin").value; 
    let emailin = document.getElementById("emailin").value;
    let yearin = document.getElementById("yearin").value; 
    let pwordin = document.getElementById("pwordin").value;
    let conpwordin = document.getElementById("conpwordin").value;
   
    function styleblack(idname){
        document.getElementById(idname).style.color="black";
    }
    function stylered(idname){
        document.getElementById(idname).style.color="red";
    }
    function checkmail(email){
        var test=email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
       return (test) ? true : false;
    }
    
    function checkpassword(pword,confipword){
         return (pword===confipword) ? true : false;
    }
    
    var i;
     for(i=0;i<document.getElementsByTagName("input").length-2;i++){
        var idname = document.getElementsByTagName("label")[i].id;
    
      var y=  document.getElementsByTagName("input")[i].value;
        if(y==""){
            stylered(idname);
        }else{
            styleblack(idname);
        }
    
    }
    
    if(fnamein!="" && lnamein!=""  && constiin!="" && emailin!=""  && yearin!="" && pwordin!="" && conpwordin!="" && checkmail(emailin)==true && checkpassword(pwordin,conpwordin)==true && (yearin>=0 && yearin<=50))
    {
        

        for(i=0;i<document.getElementsByTagName("label").length-2;i++){
        var idname = document.getElementsByTagName("label")[i].id;
            styleblack(idname);
        }
                alert("Validation Completed");
    }
    
  
    
    else{
        if(checkpassword(pwordin,conpwordin)==false)  {
            stylered("password");
            stylered("conpword");
            
             alert("Password does not match");
        }
        
        if(!(yearin>=0 && yearin<=50)){
            alert("Year has to a number between 0 and 50");
        }
        if(checkmail(emailin)==false || emailin==""){
             alert("Incorrect formart for email");
            stylered("email");
        }
    else{
               styleblack("email");
            }
             
        if(!/^[\d]/.test(yearin)){
            stylered("year");

        }else{
            styleblack("year");
        }
        
         
   

    }
     
}