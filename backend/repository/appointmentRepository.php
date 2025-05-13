<?php
require_once "mainRepository.php";
class appointmentRepository{
    private mainRepository $mainRepository;
    public function __construct(){
        $this->mainRepository = new mainRepository();
    }
    public function getAllAppointment(){
        $query = "SELECT * FROM APPOINTMENT AS A
        INNER JOIN SERVICE AS S ON A.SERV_ID = S.SERV_ID,
        INNER JOIN PATIENT AS P ON A.PAT_ID = P.PAT_ID";
        return $this->mainRepository->executeQuery($query, []);
    }
    public function getAllAppointmentById($id){
        $query = "SELECT * FROM APPOINTMENT AS A
        INNER JOIN SERVICE AS S ON A.SERV_ID = S.SERV_ID,
        INNER JOIN PATIENT AS P ON A.PAT_ID = P.PAT_ID WHERE A.APP_ID = :ID";
        return $this->mainRepository->executeQuery($query, [":ID" => $id]);
    }
    public function createAppointment($data){
        $query = "INSERT INTO APPOINTMENT (APP_TRACK_ID,APP_DATE,SERV_ID,PAT_ID) VALUES (:TRACK_ID,:DATE,:SERV_ID,:PAT_ID)";
        $params = $this->parameter($data);
        $this->mainRepository->executeQuery($query, $params);
    }
    public function updateAppointment($data,$id){
        $query = "UPDATE APPOINTMENT SET APP_TRACK_ID = :ID , APP_DATE = :DATE , SERV_ID = :SERV_ID, PAT_ID = :PAT_ID";
        $params = $this->parameter($data);
        $this->mainRepository->executeQuery($query,$params);
    }
    public function parameter($data){
        $data = [
            ":TRACK_ID" => $data->getAppTrackID(),
            ":DATE" => $data->getAppDate(),
            ":SERV_ID" =>$data->getServID(),
            ":PAT_ID" =>$data->getPatID()
        ];
        return $data;
    }
}
?>