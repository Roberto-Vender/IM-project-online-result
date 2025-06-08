<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once __DIR__ . '/../../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();
class EmailService{
    private PHPMailer $mail;
    public function __construct()
    {
        $this->mail = new PHPMailer(true);
        $this->mail->isSMTP();
        $this->mail->Host = 'smtp.gmail.com';
        $this->mail->SMTPAuth = true;
        $this->mail->Username = $_ENV["EMAIL"];
        $this->mail->Password = $_ENV["EMAIL_APP_KEY"];     
        $this->mail->SMTPSecure = 'tls';
        $this->mail->Port = 587;
        $this->mail->isHTML(true);
    }
    public function sendMail($result){
        $email = $result['email'];
        $fullname = $result['fullname'];
        $file = $result['file'];
        $subject = $result['subject'];
        $body = $result['body'];
        try {
            $this->mail->setFrom($this->mail->Username, "Anchor Lab Medical Center");
            $this->mail->addAddress($email,$fullname);
            $this->mail->Subject = $subject;
            $path = __DIR__ . '/../uploads/results/' . $file;

            if (file_exists($path)) {
                $this->mail->addAttachment($path, $file);
            } else {
                echo json_encode([
                    "status" => "error",
                    "message" => "File not found at path: $path"
                ]);
                return;
            }           
            $this->mail->Body = $body;
            $this->mail->send();
            echo json_encode([
                "status" => "success",
                "message" => "Email sent successfully"
            ]);
        } catch (Exception $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Email could not be sent. Mailer Error: {$this->mail->ErrorInfo}"
            ]);
        }
    }

}

?>