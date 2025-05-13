<?php
require_once "service/serviceService.php";
class serviceController{
    private serviceService $serviceService;
    public function __construct(){
        $this->serviceService = new serviceService();
    }
    public function getAllService(){
        try{
            $service = $this->serviceService->getAllService();
            echo json_encode(["message" => "Successfully get data", "data" => $service]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured " . $e]);
        }
    }
    public function getServiceById($id){
        try{
            $service = $this->serviceService->getServiceById($id);
            echo json_encode(["message" => "Successfully get data", "data" => $service]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured " . $e]);
        }
    }
    public function createService($data){
        try{
            $this->serviceService->createService($data);
            echo json_encode(["message" => "Successfully created service"]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured " . $e]);
        }
    }
    public function updateService($id,$data){
        try{
            $this->serviceService->updateService($id,$data);
            echo json_encode(["message" => "Successfully updated service"]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured " . $e]);
        }
    }
}
?>