<?php

require_once "controller/adminController.php";
require_once "controller/appointmentController.php";
require_once "controller/patientController.php";
require_once "controller/resultController.php";
require_once "controller/serviceController.php";

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

class Router{
    private adminController $adminController;
    private appointmentController $appointmentController;
    private patientController $patientController;
    private resultController $resultController;
    private serviceController $serviceController;
    
    public function __construct()
    {
        $this->adminController = new adminController();
        $this->appointmentController = new appointmentController();
        $this->patientController = new patientController();
        $this->resultController = new resultController();
        $this->serviceController = new serviceController();
    }

    public function route()
    {
        //get the endpoint
        $requestUri = explode("?", $_SERVER['REQUEST_URI'], 2)[0];
        //method request
        $method = $_SERVER['REQUEST_METHOD'];
        switch($method){
            case 'GET':
                $this->getRequest("Admin",$requestUri,$this->adminController,'getAdminById','getAdmin');
                $this->getRequest("Service",$requestUri,$this->serviceController,'getServiceByID','getAllService');
                $this->getRequest("Appointment",$requestUri,$this->appointmentController,'getAppointmentByID','getAllAppointment');
                $this->getRequest("Patient",$requestUri,$this->patientController,'getPatientByID','getAllPatient');
                $this->getRequest("Result",$requestUri,$this->resultController,'getResultByID','getAllResult');
                break;
            case 'POST':
                $this->postRequest("Admin",$requestUri,$this->adminController,"createAdmin");
                $this->postRequest("Admin/Login",$requestUri,$this->adminController,"loginAdmin");
                $this->postRequest("Service",$requestUri,$this->serviceController,"createService");
                $this->postRequest("Appointment",$requestUri,$this->appointmentController,"createAppointment");
                $this->postRequest("Patient",$requestUri,$this->patientController,"createPatient");
                $this->postRequest("Result",$requestUri,$this->resultController,"createResult");
                break;
            case 'PUT':
                $this->putRequest("Appointment",$requestUri,$this->appointmentController,"updateAppointment");
                break;
            default:
                http_response_code(404);
                break;
        }
    }
    private function getRequest($model,$requestUri,$controller,$methodById,$methodAll){
            if ($requestUri === "/api/{$model}") {
                $id = isset($_GET['id']) ? (int) htmlspecialchars($_GET['id']) : null;
                if ($id !== null) {
                    $controller->$methodById($id);
                } else {
                    $controller->$methodAll();
                }
            }
            if (preg_match("/\/api\/{$model}\/(\d+)/", $requestUri, $matches)) {
                $controller->$methodById($matches[1]);
            }
    }
    private function postRequest($model, $requestUri, $controller, $method)
    {
        error_log("Request URI: " . $_SERVER['REQUEST_URI'] . " Method: " . $_SERVER['REQUEST_METHOD']);
        if ($requestUri === "/api/{$model}") {

            // If file is uploaded (multipart/form-data)
            if (!empty($_FILES)) {
                $controller->$method(); // Let controller directly access $_FILES and $_POST
            } else {
                // For JSON data
                $entity = json_decode(file_get_contents("php://input"), true);
                $controller->$method($entity);
            }
        }
    }
    private function putRequest($model,$requestUri,$controller,$method){
            if (preg_match("/\/api\/{$model}\/Update\/(\d+)/", $requestUri, $matches)) {
                $entity = json_decode(file_get_contents("php://input"), true);
                $controller->$method($matches[1],$entity);
            }
    }

    private function deleteRequest($model,$requestUri,$controller,$method){
       
            if (preg_match("/\/api\/{$model}\/Delete\/(\d+)/", $requestUri, $matches)) {
                $controller->$method($matches[1]);
            }
        
        }

}

?>