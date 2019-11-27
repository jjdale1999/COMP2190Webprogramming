<?php
    $host = 'localhost';
    $dbname = 'classicmodels';
    $username = 'root';
    $password = '';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
if(isset($_GET)){
    $country = $_GET['country'];
$context =$_GET['context'];
 
if($context=="cities"){
   
$stmt = $conn->query("SELECT cities.name, cities.district, cities.population FROM cities JOIN countries ON cities.country_code = countries.code WHERE countries.name LIKE \"%$country%\" ORDER BY countries.name ASC");
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
 }else{
     $countrieswhere = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
     $whereresults= $countrieswhere->fetchAll(PDO::FETCH_ASSOC);
 }
}
?>

    
    