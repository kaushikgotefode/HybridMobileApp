<?php
// Append new form data in json string saved in text file
// From: http://coursesweb.net/php-mysql/

// path and name of the file
$filetxt = 'usrdata.txt';

// check if all form data are submited, else output error message
if(isset($_POST['usrName']) && isset($_POST['usrEmail']) && isset($_POST['usrCntact']) && isset($_POST['usrPsswrd'])) {
  // if form fields are empty, outputs message, else, gets their data
  if(empty($_POST['usrName']) || empty($_POST['usrEmail']) || empty($_POST['usrCntact']) || empty($_POST['usrPsswrd'])) {
    echo 'All fields are required';
  }
  else {
    // gets and adds form data into an array
    $formdata = array(
      'usrName'=> $_POST['youname'],
      'usrEmail'=> $_POST['youemail'],
      'usrCntact'=> $_POST['studies'],
      'usrPsswrd'=> $_POST['civilstate'],
    );

    // path and name of the file
    $filetxt = 'usrdata.txt';

    $arr_data = array();        // to store all form data

    // check if the file exists
    if(file_exists($filetxt)) {
      // gets json-data from file
      $jsondata = file_get_contents($filetxt);

      // converts json string into array
      $arr_data = json_decode($jsondata, true);
    }

    // appends the array with new form data
    $arr_data[] = $formdata;

    // encodes the array into a string in JSON format (JSON_PRETTY_PRINT - uses whitespace in json-string, for human readable)
    $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

    // saves the json string in "formdata.txt" (in "dirdata" folder)
    // outputs error message if data cannot be saved
    if(file_put_contents('usrdata.txt', $jsondata)) echo 'Data successfully saved';
    else echo 'Unable to save data in "dirdata/formdata.txt"';
  }
}
else echo 'Form fields not submited';
?>