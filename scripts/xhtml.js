
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
        alert("Validation Complete");
    }
    else{
        if(!/^[\d]/.test(yearin)){
            alert("u need a digit");
        }
         if(fnamein==""){
            document.getElementById("fname").style.color="red";
           
           }
             if(lnamein==""){
                    document.getElementById("lname").style.color="red";
            }
             if(constiin==""){
                    document.getElementById("consti").style.color="red";
            }
             if(emailin==""){
                    document.getElementById("email").style.color="red";
            }
             if(document.getElementById("yearin").value==""){
                    document.getElementById("year").style.color="red";
            }
             if(document.getElementById("pwordin").value==""){
                    document.getElementById("password").style.color="red";
            }
           if(document.getElementById("conpwordin").value==""){
                    document.getElementById("conpword").style.color="red";
            }

    }
     
}