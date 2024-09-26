<?php
// little delay just for testing the application of button classes
sleep(1);

if(isset($_GET) AND array_key_exists('simulaterror', $_GET)){
    http_response_code(404);
    echo "<p><strong>Simulated error because called with <code>?simulaterror</code>.</strong></p>";
}

if(isset($_GET) AND array_key_exists('json', $_GET)){
    header('Content-Type: application/json');
    $data = array(
        'message' => 'Data received successfully',
        'missingFields' => array(
            'field1' => 'Field 1 is required',
            'field2' => 'Field 2 is required',
            'field3' => 'Field 3 is required',
        )
    );
    echo json_encode($data);
    
    die();
}

echo "<pre>";
var_dump($_POST);
echo "</pre>";
