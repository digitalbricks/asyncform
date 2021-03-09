<?php
// little delay just for testing the application of button classes
sleep(1);

if(isset($_GET) AND array_key_exists('simulaterror', $_GET)){
    http_response_code(404);
    echo "<p><strong>Simulated error because called with <code>?simulaterror</code>.</strong></p>";
}

echo "<pre>";
var_dump($_POST);
echo "</pre>";
