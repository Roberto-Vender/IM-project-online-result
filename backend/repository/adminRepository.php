<?php
require_once 'database.php';
require_once 'mainRepository.php';
class adminRepository{
    private mainRepository $main_repo;
    public function __construct(){
        $this->main_repo = new mainRepository();
    }

    public function getAdmin(){
        $query = "SELECT ADMIN_ID,ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_FNAME, ADMIN_LNAME FROM ADMIN";
        return $this->main_repo->executeQuery($query, []);
    }
    public function getAdminById($id){
        $query = "SELECT ADMIN_ID,ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_FNAME, ADMIN_LNAME FROM ADMIN WHERE ADMIN_ID = :ID";
        return $this->main_repo->executeQuery($query, ["ID" => $id]);
    }
    public function getAdminByUsername($username){
        $query = "SELECT ADMIN_ID,ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_FNAME, ADMIN_LNAME FROM ADMIN WHERE ADMIN_USERNAME = :USERNAME";
        $params = [":USERNAME" => $username];
        $result = $this->main_repo->executeQuery($query,$params);
        return $this->main_repo->buildResultList($result);
    }
    public function createAdmin($data){
        $query = "INSERT INTO ADMIN (ADMIN_USERNAME,ADMIN_PASSWORD,ADMIN_FNAME,ADMIN_LNAME) VALUES (:ADMIN_USERNAME,:ADMIN_PASSWORD,:ADMIN_FNAME,:ADMIN_LNAME)";
        $params = $this->parameter($data);
        $this->main_repo->executeQuery($query, $params);
    }
    public function parameter($data){

        $params = [
            ":ADMIN_USERNAME" => $data->getAdminUsername(),
            ":ADMIN_PASSWORD" => password_hash($data->getAdminPassword(),PASSWORD_DEFAULT),
            ":ADMIN_FNAME" => $data->getAdminFname(),
            ":ADMIN_LNAME" => $data->getAdminLname(),
            ];
        return $params;
    }
   
}
?>