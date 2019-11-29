<?php

require_once 'dbconfig.php';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    echo "Connected to $dbname at $host successfully.";
    $conn = null;
    
    
if(isset($_POST)){
    $fname = $_POST['fnamein'];
    $lname = $_POST['lnamein'];
    $consti = $_POST['constiin'];    
    $email = $_POST['emailin'];
    $year = $_POST['yearin'];
    $pword = $_POST['pwordin'];
    $conpword = $_POST['conpwordin'];


    
if($fname === "")

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

?>






