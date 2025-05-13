<?php
require_once "mainRepository.php";
class patientRepository{
    private mainRepository $mainRepository;
    public function __construct(){
        $this->mainRepository = new mainRepository();
    }

    public function getAllPatient(){
        $query = "SELECT * FROM PATIENT";
        return $this->mainRepository->executeQuery($query, []);
    }
    public function getAllPatientById($id){
        $query = "SELECT * FROM PATIENT WHERE PAT_ID = :ID";
        $params = [":ID" => $id];
        $result = $this->mainRepository->executeQuery($query, $params);
        return $this->mainRepository->buildResultList($result);
    }
    public function createPatient($data){
        $query = "INSERT INTO PATIENT (PAT_FNAME,PAT_LNAME,PAT_MNAME,PAT_EXTENSION,PAT_DOB,PAT_EMAIL,PAT_ADDRESS,PAT_GENDER,PAT_CONTACT) VALUES (':FNAME',':LNAME',':MNAME','EXT','DOB','EMAIL','ADD',':NUM',':GENDER')";
        $params = $this->parameter($data);
        $this->mainRepository->executeQuery($query, $params);
    }
    public function updatePatient($id,$data){
        $query = "UPDATE PATIENT SET PAT_FNAME = :FNAME, PAT_LNAME = :LNAME, PAT_MNAME = :MNAME, PAT_EXTENSION = :EXT, PAT_DOB = :DOB, PAT_EMAIL = :EMAIL, PAT_ADDRESS = :ADD, PAT_GENDER = :GENDER, PAT_CONTACT = :NUM WHERE PAT_ID = :ID";
        $params = $this->parameter($data);
        $params[":ID"] = $id;
        $this->mainRepository->executeQuery($query, $params);
    }
    public function parameter($data){
        $params = [
            ":FNAME" => $data->getPatFname(),
            ":LNAME" => $data->getPatLname(),
            ":MNAME" => $data->getPatMname(),
            ":EXT" => $data->getPatExt(),
            ":GENDER" => $data->getPatGender(),
            ":DOB" => $data->getPatDob(),
            ":EMAIL" => $data->getPatEmail(),
            ":NUM" => $data->getPatContact(),
            ":ADD" => $data->getPatAddress(),
        ];
        return $params;
    }

}
?>