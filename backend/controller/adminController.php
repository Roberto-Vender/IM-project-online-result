<?php
require_once 'service/adminService.php';
class adminController{
    private adminService $adminService;
    public function __construct(){
        $this->adminService = new adminService();
    }
    public function getAdmin(){
        try{
            $result = $this->adminService->getAdmin();
            echo json_encode(["message" => "successfully retrieved data", "data" => $result]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e->getMessage()]);
            http_response_code(400);
        }
    }
    public function getAdminById($id){
        try{
            $result = $this->adminService->getAdminById($id);
            echo json_encode(["message" => "successfully retrieved data", "data" => $result]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e->getMessage()]);
            http_response_code(400);
        }
    }
    public function getAdminByUsername($username){
        try{
            $result = $this->adminService->getAdminByUsername($username);
            echo json_encode(["message" => "successfully retrieved data", "data" => $result]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e->getMessage()]);
            http_response_code(400);
        }
    }
    public function createAdmin($data){
        try{
            $this->adminService->createAdmin($data);
            echo json_encode(["message" => "successfully created data"]);
        }catch(Exception $e){
            echo json_encode(["message" => "an error occured". $e->getMessage()]);
            http_response_code(400);
        }
    }
    public function loginAdmin($data){
        try{
            $username = htmlspecialchars($data["admin_username"]);
            $password = htmlspecialchars($data["admin_password"]);
            $adminCredentials = $this->adminService->getAdminByUsername($username);
            if($adminCredentials){
                if($adminCredentials->getAdminUsername() === $username && password_verify($password,$adminCredentials->getAdminPassword())){
                    http_response_code(200);
                    echo json_encode(["message" => "Login successfully!", "data" => $adminCredentials]);
                }else{
                    http_response_code(401);
                    echo json_encode(["message" => "Incorrect credentials"]);
                }
            }else{
                http_response_code(401);
                echo json_encode(["message" => "Incorrect credentials"]);
            }
        }catch(Exception $e){
            http_response_code(400);
            echo json_encode(["message" => "an error occured". $e->getMessage()]);
        }
    }

}
?>