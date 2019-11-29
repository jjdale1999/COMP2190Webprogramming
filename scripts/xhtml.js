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
    
    
     for(i=0;i<document.getElementsByTagName("input").length-2;i++){
        var idname = document.getElementsByTagName("label")[i].id;
    
      var y=  document.getElementsByTagName("input")[i].value;
        if(y==""){
            stylered(idname);
        }else{
            styleblack(idname);
        }
    
    }
    
    if(fnamein!="" && lnamein!=""  && constiin!="" && emailin!=""  && yearin!="" && pwordin!="" && conpwordin!="" && checkmail(emailin)==true && (pwordin == conpwordin) && (yearin>=0 && yearin<=50))
    {
        
        document.getElementById("fname").style.color="black";
        document.getElementById("lname").style.color="black";
        document.getElementById("consti").style.color="black";
        document.getElementById("email").style.color="black";
        document.getElementById("year").style.color="black";
        document.getElementById("password").style.color="black";
        document.getElementById("conpword").style.color="black";
//        add class instead of using style.color
        alert("Validation Completed");
  
    }
    else{
        if(pwordin != conpwordin)  {
             alert("Password does not match");
        }
        
        if(!(yearin>=0 && yearin<=50)){
            alert("Year has to a number between 0 and 50");
        }
        if(checkmail(emailin)==false || emailin==""){
             alert("Incorrect formart for email");
            document.getElementById("email").style.color="red";
        }
    else{
               styleblack("email");
            }
             
        if(!/^[\d]/.test(yearin)){
            document.getElementById("year").style.color="red";
//            alert("u need a digit");
        }else{
            document.getElementById("year").style.color="black";
        }
        
         var i;
   

    }
     
}