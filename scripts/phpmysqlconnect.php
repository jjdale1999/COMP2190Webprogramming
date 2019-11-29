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
    $pword = test_input(test_input($_POST['pwordin']));
    $conpword = test_input($_POST['conpwordin']);
    $salt = mt_rand();
    $password_digest = md5($salt.$password);
    echo $fname;
    if(everything is okay then ){
          $insertData="INSERT INTO Representatives (first_name, last_name, constituency, email,
yrs_service, salt, password_digest) 
 VALUES ('$fname', '$lname', '$consti','$email', '$year','$salt', '$password_digest')";
   
   $stmt = $conn->query($insertData);
    }
 

   $stmt = $conn->query("SELECT * FROM Representatives");
   $results = $stmt ->fetchALL(PDO ::FETCH_ASSOC);

   
		
    
}
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}

                        


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function fieldisempty($var){
  return  ($var === "" ? true : false);
}

?>    
    <div id="contents">
    <table>
                    <th> First Name</th>
                    <th> Last Name</th>
                    <th> Constituency</th>
                    <th> Email </th>
                    <th>Years of Service</th>
                    <th> Password Digiest</th>
                    <th> Salt</th>
                    <th> ID</th>

        <?php foreach ($results as $row): ?>
                <tr>
                    <td><?= $row['first_name']; ?></td>
                    <td><?= $row['last_name']; ?></td>
                    <td><?=$row['constituency']; ?></td>
                    <td><?=$row['email']; ?></td>
                    <td><?=$row['yrs_service']; ?></td>
                    <td><?=$row['password_digest']; ?></td>
                    <td><?=$row['salt']; ?></td>
                    <td><?=$row['id']; ?></td>
                </tr>

            <?php endforeach; ?>
        
    </table>
                    
<div>
    
 







