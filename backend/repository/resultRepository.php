<?php
require_once "mainRepository.php";
    class resultRepository{
    private mainRepository $mainRepository;
    public function __construct(){
        $this->mainRepository = new mainRepository();
    }
    public function getAllResult(){
        $query = "SELECT * FROM RESULT";
        return $this->mainRepository->executeQuery($query, []);
    }
    public function getAllResultById($id){
        $query = "SELECT * FROM RESULT WHERE RES_ID = :ID";
        return $this->mainRepository->executeQuery($query, [":ID" => $id]);
    }
    public function createResult($data){
        $query = "INSERT INTO RESULT (RES_FILE,APP_ID,ADMIN_ID) VALUE (:RES_FILE,:APP_ID,:ADMIN_ID)";
        $params = $this->parameter($data);
        $this->mainRepository->executeQuery($query, $params);
    }
    public function updateResult($data,$id){
        $query = "UPDATE RESULT SET RES_FILE = :RES_FILE, APP_ID = :APP_ID , ADMIN_ID = :ADMIN_ID WHERE RES_ID = :RES_ID";
        $params = $this->parameter($data);
        $params[":RES_ID"] = $id;
        $this->mainRepository->executeQuery($query, $params);
    }
    public function parameter($data){
        $params = [
            ":RES_FILE" => $data->getResFile(),
            ":APP_ID" => $data->getAppID(),
            ":ADMIN_ID" => $data->getAdminID()
        ];
        return $params;
    }
    }
?>