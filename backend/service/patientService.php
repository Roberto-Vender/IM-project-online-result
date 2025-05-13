<?php
require_once "repository/patientRepository.php";
require_once "model/patient.php";
require_once "service/serviceLogic.php";
class patientService{
    private patientRepository $patientRepository;
    private serviceLogic $serviceLogic;
    public function __construct(){
        $this->patientRepository = new patientRepository();
        $this->serviceLogic = new serviceLogic();
    }
    public function getAllPatient(){
        $patient = $this->patientRepository->getAllPatient();
        $this->serviceLogic->checkExist($patient);
        return $this->patientObjectList($patient);
    }
    public function getPatientById($id){
        $patient = $this->patientRepository->getAllPatientById($id);
        $this->serviceLogic->checkExist($patient);
        return $this->patientObject($patient);
    }
    public function createPatient($data){
        $patient = $this->patientObject($data);
        $this->patientRepository->createPatient($patient);
    }
    public function updatePatient($id,$data){
        $this->getPatientById($id);
        $patient = $this->patientObject($data);
        $this->patientRepository->updatePatient($id, $patient);
    }
    public function patientObject($data){
        $patient = new patient();
        $patient->setPatID($data["pat_id"]);
        $patient->setPatFname($data["pat_fname"]);
        $patient->setPatLname($data["pat_lname"]);
        $patient->setPatMname($data["pat_mname"]);
        $patient->setPatExt($data["pat_extension"]);
        $patient->setPatGender($data["pat_gender"]);
        $patient->setPatDob($data["pat_dob"]);
        $patient->setPatEmail($data["pat_email"]);
        $patient->setPatAddress($data["pat_address"]);
        $patient->setPatContact($data["pat_contact"]);
        return $patient;
    }
    public function patientObjectList($data){
        $patientList = [];
        foreach($data as $pat){
            $patientList[] = $this->patientObject($pat);
        }
        return $patientList;
    }
}
?>