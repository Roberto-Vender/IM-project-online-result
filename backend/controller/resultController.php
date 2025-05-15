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
    public function createResult()
        {
            try {
                if (!isset($_FILES['res_file'])) {
                    throw new Exception("No file uploaded.");
                }

                // Create the directory if it doesn't exist
                $uploadDir = 'C:/uploads/results/';
                if (!file_exists($uploadDir)) {
                    mkdir($uploadDir, 0777, true); // recursive create
                }

                // Save file
                $filename = basename($_FILES['res_file']['name']);
                $targetPath = $uploadDir . $filename;

                if (!move_uploaded_file($_FILES['res_file']['tmp_name'], $targetPath)) {
                    throw new Exception("Failed to upload file.");
                }

                // Prepare data for service
                $data = [
                    "res_file" => $filename,  // You can also store $targetPath if you prefer absolute path
                    "app_id" => $_POST["app_id"],
                    "admin_id" => $_POST["admin_id"]
                ];

                $this->resultService->createResult($data);

                echo json_encode(["message" => "Successfully created result"]);

            } catch (Exception $e) {
                echo json_encode(["message" => "An error occurred: " . $e->getMessage()]);
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