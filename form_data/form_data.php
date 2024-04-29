<?php
$data = $_POST['data'];
$file = 'data.txt';
file_put_contents($file, $data . PHP_EOL, FILE_APPEND | LOCK_EX);
?>
