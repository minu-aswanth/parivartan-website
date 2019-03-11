<?php
include 'dblinker.php';

function add_entry(){
try {
	$name = $_POST['name'];
	$phone_no = $_POST['phoneno'];
	$email = $_POST['email'];
	
	$link = linkToParivartan();
	$handle=$link->prepare("INSERT INTO `sample_table`(`Name`, `PhoneNumber`, `Email`) VALUES (:name, :phone_no, :email)"); 
	$handle->bindParam(':name', $name);
	$handle->bindParam(':phone_no', $phone_no);
	$handle->bindParam(':email', $email);
	$handle->execute();
	return "success";
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo add_entry();
?>