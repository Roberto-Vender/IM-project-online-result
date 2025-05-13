<?php
require_once "service/patientService.php";
class patientController{
    private patientService $patientService;
    public function __construct(){
        $this->patientService = new patientService();
    }
    public function getAllPatient(){
        try{
            $patient = $this->patientService->getAllPatient();
            echo json_encode(["message" => "Successfully get data", "data" => $patient]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e]);
        }
    }
    public function getPatientById($id){
        try{
            $patient = $this->patientService->getPatientById($id);
            echo json_encode(["message" => "Successfully get data", "data" => $patient]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e]);
        }
    }
    public function createPatient($data){
        try{
            $this->patientService->createPatient($data);
            echo json_encode(["message" => "Successfully created patient"]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e]);
        }
    }
    public function updatedPatient($id,$data){
        try{
            $this->patientService->updatePatient($id,$data);
            echo json_encode(["message" => "Successfully updated patient"]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e]);
        }
    }
}
?>