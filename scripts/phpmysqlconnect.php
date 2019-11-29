<?php

require_once 'dbconfig.php';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    echo "Connected to $dbname at $host successfully.";
    $conn = null;
    
    
if(isset($_POST)){
    $fname = test_input($_POST['fnamein']);
    $lname = test_input($_POST['lnamein']);
    $consti = test_input($_POST['constiin']);    
    $email = test_input($_POST['emailin']);
    $year = test_input($_POST['yearin']);
    $pword = test_input(test_input($_POST['pwordin']);
    $conpword = test_input($_POST['conpwordin']);


    
if($fname === ""){
    
}

//next step validate 
 
if($context=="cities"){
   
$stmt = $conn->query("SELECT cities.name, cities.district, cities.population FROM cities JOIN countries ON cities.country_code = countries.code WHERE countries.name LIKE \"%$country%\" ORDER BY countries.name ASC");
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
 }else{
     $countrieswhere = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
     $whereresults= $countrieswhere->fetchAll(PDO::FETCH_ASSOC);
 }
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

?>






