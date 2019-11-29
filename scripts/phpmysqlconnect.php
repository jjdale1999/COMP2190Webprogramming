<?php

require_once 'dbconfig.php';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    echo "Connected to $dbname at $host successfully.";
    
    
if(isset($_POST)){
    $fname = test_input($_POST['fnamein']);
    $lname = test_input($_POST['lnamein']);
    $consti = test_input($_POST['constiin']);    
    $email = test_input($_POST['emailin']);
    $year = test_input($_POST['yearin']);
    $salt = mt_rand();
    $password_digest=md5($_POST['pwordin'].$salt);
    
    if((fieldisnotempty($fname)) && (validinput($fname)) && (fieldisnotempty($lname)) && (validinput($lname)) && (fieldisnotempty($consti)) && (validinput($consti)) &&(fieldisnotempty($email)) && (test_input($_POST['pwordin'])===test_input($_POST['conpwordin'])) && (checkmail($email)) ){
          $insertData="INSERT INTO Representatives (first_name, last_name, constituency, email,
yrs_service, salt, password_digest) 
 VALUES ('$fname', '$lname', '$consti','$email', '$year','$salt', '$password_digest')";
   $stmt = $conn->query($insertData);
    }
       


    }
 

   $stmt = $conn->query("SELECT * FROM Representatives");
   $results = $stmt ->fetchALL(PDO ::FETCH_ASSOC);
    

   
		
    

} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}

                        
function validinput($value){
    $test = preg_match("/^[A-Za-z-. ]+$/", $value);
        return ($test) ? true : false;
}
function checkmail($email)
    {
        $test = preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $email);
        return ($test) ? true : false;
    }
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function fieldisnotempty($var){
  if($var == "")
  {
    return false;
  } 
  else 
  {
    return true;
  }
}

?>    
   
    <table>
                    <th> First Name</th>
                    <th> Last Name</th>
                    <th> Constituency</th>
                    <th> Email </th>
                    <th> Hash</th>
                    <th>Years of Service</th>
                    
                    

        <?php foreach ($results as $row): ?>
                <tr>
                    <td><?= $row['first_name']; ?></td>
                    <td><?= $row['last_name']; ?></td>
                    <td><?=$row['constituency']; ?></td>
                    <td><?=$row['email']; ?></td>
                    <td><?=$row['password_digest']; ?></td>
                    <td><?=$row['yrs_service']; ?></td>
                   
                </tr>

            <?php endforeach; ?>
        
    </table>
                    

    
 







