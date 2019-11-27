
function loadrequest(){
   
    let fnamein = document.getElementById("fnamein").value;
    let lnamein = document.getElementById("lnamein").value;
    let constiin = document.getElementById("constiin").value; 
    let emailin = document.getElementById("emailin").value;
    let yearin = document.getElementById("yearin").value; 
    let pwordin = document.getElementById("pwordin").value;
    let conpwordin = document.getElementById("conpwordin").value;
    
    if(fnamein!="" && lnamein!=""  && constiin!="" && emailin!=""  && yearin!="" && pwordin!="" && conpwordin!="" && emailin.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && (pwordin == conpwordin) && (yearin>=0 && yearin<=50))
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
        
        if(yearin!=0 && yearin!=50){
            alert("Year has to a number between o and 50");
        }
        if(!emailin.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || emailin==""){
             document.getElementById("email").style.color="red";
        }
    else{
                document.getElementById("email").style.color="black";
            }
             
        if(!/^[\d]/.test(yearin)){
            document.getElementById("year").style.color="red";
//            alert("u need a digit");
        }else{
            document.getElementById("year").style.color="black";
        }
         if(fnamein==""){
            document.getElementById("fname").style.color="red";
           
           }else{
               document.getElementById("fname").style.color="black";
           }
             if(lnamein==""){
                    document.getElementById("lname").style.color="red";
            }else{
                 document.getElementById("lname").style.color="black";
            }
             if(constiin==""){
                    document.getElementById("consti").style.color="red";
            }else{
                 document.getElementById("consti").style.color="black";
            }
             if(document.getElementById("yearin").value==""){
                    document.getElementById("year").style.color="red";
            }else{
                document.getElementById("year").style.color="black";
            }
             if(document.getElementById("pwordin").value==""){
                    document.getElementById("password").style.color="red";
            }else{
                 document.getElementById("password").style.color="black";
            }
           if(document.getElementById("conpwordin").value==""){
                    document.getElementById("conpword").style.color="red";
            }else{
                 document.getElementById("conpword").style.color="black";
            }

    }
     
}