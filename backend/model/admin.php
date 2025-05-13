<?php

class admin implements JsonSerializable{
    private $admin_id;
    private $admin_fname;
    private $admin_lname;
    private $admin_username;
    private $admin_password;

    public function setAdminID($id){
        $this->admin_id = $id;
    }
    public function getAdminID(){
        return $this->admin_id;
    }
    public function setAdminFname($name){
        $this->admin_fname = $name;
    }
    public function getAdminFname(){
        return $this->admin_fname;
    }
    public function setAdminLname($name){
        $this->admin_lname = $name;
    }
    public function getAdminLname(){
        return $this->admin_lname;
    }
    public function setAdminUsername($username){
        $this->admin_username = $username;
    }
    public function getAdminUsername(){
        return $this->admin_username;
    }
    public function setAdminPassword($password){
        $this->admin_password = $password;
    }
    public function getAdminPassword(){
        return $this->admin_password;
    }
    public function jsonSerialize() {
        return [
            'admin_id' => $this->admin_id,
            'admin_fname' => $this->admin_fname,
            'admin_lname' => $this->admin_lname,
            'admin_username' => $this->admin_username,
            'admin_password' => $this->admin_password
        ];
    }
}
?>