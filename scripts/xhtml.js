function loadrequest(){
    
    let fnamein = document.getElementById("fnamein").value;
    let lnamein = document.getElementById("lnamein").value;
    let constiin = document.getElementById("constiin").value; 
    let emailin = document.getElementById("emailin").value;
    let yearin = document.getElementById("yearin").value; 
    let pwordin = document.getElementById("pwordin").value;
    let conpwordin = document.getElementById("conpwordin").value;
   
    function styleblack(idname){
        if(typeof(idname)=== typeof(0)){
            document.getElementsByClassName("inputs")[idname].style.borderColor="#ccc";
        }else{
            document.getElementById(idname).style.borderColor="#ccc";
        }
        
    }
    
    function stylered(idname)
    {
        if(typeof(idname)=== typeof(0))
        {
            document.getElementsByClassName("inputs")[idname].style.borderColor="red";
        }
        else
        {
            document.getElementById(idname).style.borderColor="red";
        }
    }
    
    function checkmail(email)
    {
        var test=email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return (test) ? true : false;
    }
    
    function checkpassword(pword,confipword)
    {
         return (pword===confipword) ? true : false;
    }
    
    var i;
    
    
    if(checkpassword(pwordin,conpwordin)==false)  
    {
        stylered("password");
        stylered("conpword");

        alert("Password does not match");
    }
    else
    {
        styleblack("password");
        styleblack("conpword");
        
    }
    if(!(yearin>=0 && yearin<=50))
    {
        alert("Year has to a number between 0 and 50");
        stylered("year");
    } 
    else 
    {
        styleblack("year");
    }
        
    if(checkmail(emailin)==false || emailin=="")
    {stylered("email");
        alert("Incorrect formart for email");
        
    }
    else
    {
        styleblack("email");
    }
             
    if(!/^[\d]/.test(yearin))
    {
        stylered("year");

    }
    else
    {
        styleblack("year");
    }
     
    for(i=0;i<document.getElementsByClassName("inputs").length;i++)
    {
         
        var idname =i;
        console.log(idname);
        var y=  document.getElementsByTagName("input")[i].value;
        if(y=="")
        {
            stylered(idname);
        }
        else
        {
            styleblack(idname);
        }
    
    }
    
    if(fnamein!="" && lnamein!=""  && constiin!="" && emailin!=""  && yearin!="" && pwordin!="" && conpwordin!="" && checkmail(emailin)==true && checkpassword(pwordin,conpwordin)==true && (yearin>=0 && yearin<=50))
    {
        

        for(i=0;i<document.getElementsByClassName("inputs").length-2;i++)
        {
            var idname = i;
            styleblack(idname);
        }
        alert("Validation Completed");
        return true;
                
    }
    
    return false;
  
   
     
}