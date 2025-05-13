<?php

class patient implements JsonSerializable {
    private $pat_id;
    private $pat_fname;
    private $pat_lname;
    private $pat_mname;
    private $pat_extension;
    private $pat_gender;
    private $pat_dob;
    private $pat_address;
    private $pat_contact;
    private $pat_email;

    public function setPatID($id){
        $this->pat_id = $id;
    }
    public function getPatID(){
        return $this->pat_id;
    }
    public function setPatFname($firstname){
        $this->pat_fname = $firstname;
    }
    public function getPatFname(){
        return $this->pat_fname;
    }
    public function setPatLname($lastname){
        $this->pat_lname = $lastname;
    }
    public function getPatLname(){
        return $this->pat_lname;
    }
    public function setPatMname($middlename){
        $this->pat_mname = $middlename;
    }
    public function getPatMname(){
        return $this->pat_mname;
    }
    public function setPatExt($extension){
        $this->pat_extension = $extension;
    }
    public function getPatExt(){
        return $this->pat_extension;
    }
    public function setPatDob($dob){
        $this->pat_dob = $dob;
    }
    public function getPatDob(){
        return $this->pat_dob;
    }
    public function setPatGender($gender){
        $this->pat_gender = $gender;
    }
    public function getPatGender(){
        return $this->pat_gender;
    }
    public function setPatAddress($address){
        $this->pat_address = $address;
    }
    public function getPatAddress(){
        return $this->pat_address;
    }
    public function setPatEmail($email){
        $this->pat_email = $email;
    }
    public function getPatEmail(){
        return $this->pat_email;
    }
    public function setPatContact($contact){
        $this->pat_contact = $contact;
    }
    public function getPatContact(){
        return $this->pat_contact;
    }

    // Needed for JSON encoding
    public function jsonSerialize() {
        return [
            'pat_id' => $this->pat_id,
            'pat_fname' => $this->pat_fname,
            'pat_lname' => $this->pat_lname,
            'pat_mname' => $this->pat_mname,
            'pat_extension' => $this->pat_extension,
            'pat_gender' => $this->pat_gender,
            'pat_dob' => $this->pat_dob,
            'pat_address' => $this->pat_address,
            'pat_contact' => $this->pat_contact,
            'pat_email' => $this->pat_email,
        ];
    }
}
?>
