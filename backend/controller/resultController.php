<?php
require_once "service/resultService.php";
class resultController{
    private resultService $resultService;
    public function __construct(){
        $this->resultService = new resultService();
    }
    public function getAllResult()
    {
        try{
            $result = $this->resultService->getAllResult();
            echo json_encode(["message" => "Sucessfully get data", "data" => $result]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured ".$e]);
        }
    }
    public function getResultById($id)
    {
        try{
            $result = $this->resultService->getResultId($id);
            echo json_encode(["message" => "Sucessfully get data", "data" => $result]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured ".$e]);
        }
    }
    public function createResult($data)
    {
        try{
            $this->resultService->createResult($data);
            echo json_encode(["message" => "Sucessfully created result"]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured ".$e]);
        }
    }
    public function updateResult($id,$data)
    {
        try{
            $this->resultService->updateResult($id,$data);
            echo json_encode(["message" => "Sucessfully updated result"]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured ".$e]);
        }
    }
}
?>