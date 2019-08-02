<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header('Content-type: application/json');

include('connection_aclab.php');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    apiGets($conn);
    break;
  case 'POST':
    apiPost($conn);
    break;
  case 'PUT':
    // echo 'PUT';
    updatePNC($conn);
    break;
  case 'DELETE':
    // echo 'Delete'; 
    deletePNC($conn);
    break;
}

function apiGets($conn){
  $data = $_REQUEST['api'];
  switch ($data) {
    // case 'category':
    //   getCategory($conn);
    //   break;
  }
}
//Api post
function apiPost($conn){
  $type = $_REQUEST['type'];
  if(!$type){
    $dataServer = json_decode(file_get_contents("php://input"), TRUE);
    $type = $dataServer['type'];
  }
  // echo $dataServer;
  switch ($type) {
      // case 'position':
      //   getPuestos($conn);
      //   break;
  }
}

//Get empleados responsables 
//SELECT `ID_empleado` as id,`Nombres` as name, Apellido_Paterno as apellido, Puesto as puesto FROM `personal`
function getEmpleados($conn){
  $stmt = $conn->prepare("SELECT `ID_empleado`,`Nombres`, `Apellido_Paterno`, `Puesto` FROM `personal` order by `Apellido_Paterno`");
  $stmt->execute();
  $id = 'ID_empleado';
  $nombre = 'Nombre';
  $apellido = 'Apellido_Paterno';
  $puesto = 'Puesto';
  $stmt->bind_result($id,$nombre,$apellido,$puesto);
  $arrayCat = [];
  $i = 0;
  while ($stmt->fetch()) {
    $json = new \stdClass();
    $json->key = $i;
    $json->value = $id;
    $json->text = utf8_encode((string)("{$nombre} ${$apellido}"));
    array_push($arrayCat, $json);
    $i++;
  }
  $output = json_encode($arrayCat, JSON_PRETTY_PRINT);
  echo $output;
}
?>