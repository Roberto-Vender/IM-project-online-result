<?php
require_once 'repository/adminRepository.php';
require_once 'service/serviceLogic.php';
require_once 'model/admin.php';
class adminService{
    private adminRepository $adminRepository;
    private serviceLogic $serviceLogic;
    public function __construct(){
        $this->adminRepository = new adminRepository();
        $this->serviceLogic = new serviceLogic();
    }
    public function getAdmin(){
        $result = $this->adminRepository->getAdmin();
        $this->serviceLogic->checkExist($result);
        return $this->adminObjectList($result);
    }
    public function getAdminById($id){
        $result = $this->adminRepository->getAdminById($id);
        $this->serviceLogic->checkExist($result);
        return $this->adminObjectList($result);
    }
    public function getAdminByUsername($username){
        $result = $this->adminRepository->getAdminByUsername($username);
        return $this->adminObject($result);
    }
    public function createAdmin($data){
        $result = $this->adminObject($data);
        $this->adminRepository->createAdmin($result);
    }
    public function adminObject($data){
        $admin = new admin();
        $admin->setAdminID($data["admin_id"] ?? NULL) ;
        $admin->setAdminUsername($data['admin_username'] ?? NULL);
        $admin->setAdminPassword($data['admin_password'] ?? NULL);
        $admin->setAdminFname($data['admin_fname']?? NULL);
        $admin->setAdminLname($data['admin_lname']?? NULL);
        return $admin;
    }
    public function adminObjectList($admin){
        $adminList = [];
        foreach ($admin as $data) {
            $admin = new admin();
            $admin->setAdminUsername($data['admin_username']);
            $admin->setAdminPassword($data['admin_password']);
            $admin->setAdminFname($data['admin_fname']);
            $admin->setAdminLname($data['admin_lname']);
            $adminList[] = $admin;
        }
        return $adminList;
    }
}