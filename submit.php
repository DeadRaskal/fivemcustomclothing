<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $clothing = $_POST['clothing'];

    // Send email
    $to = "kilofree60@gmail.com";
    $subject = "New Custom GTA FiveM Clothing Order";
    $message = "Name: " . $name . "\r\n";
    $message .= "Email: " . $email . "\r\n";
    $message .= "Clothing Description: " . $clothing . "\r\n";
    $headers = "From: " . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Order submitted successfully!');</script>";
        echo "<script>window.location = 'index.html';</script>";
    } else {
        echo "<script>alert('Failed to submit order. Please try again later.');</script>";
        echo "<script>window.location = 'index.html';</script>";
    }
}
?>
