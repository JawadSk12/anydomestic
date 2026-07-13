<?php
session_start();
include "../Connections/db11.php";

// Sanitize and validate the order_id
$order_id = isset($_SESSION['order_id']) ? htmlspecialchars($_SESSION['order_id']) : '';

if (empty($order_id)) {
    die("Invalid order ID");
}

try {
    $stmt = $mysqli->prepare("SELECT name FROM employer WHERE order_id = ?");
    if (!$stmt) {
        throw new Exception("Prepare failed: " . $mysqli->error);
    }

    $stmt->bind_param("s", $order_id);
    if (!$stmt->execute()) {
        throw new Exception("Execute failed: " . $stmt->error);
    }

    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        throw new Exception("No records found for the given order ID");
    }

    $row = $result->fetch_assoc();
    $name = $row['name'];
    $Name = ucwords($name);

    $stmt->close();
} catch (Exception $e) {
    // Log the error and display a generic message
    error_log("Database error: " . $e->getMessage());
    die("An error occurred. Please try again later.");
}

if (isset($_POST['button1'])) {
    header("Location: TxnTest.php");
    exit();
}

// The rest of the HTML code remains unchanged
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Any Domestic Help - Payment</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css?v=<?= time(); ?>">
    <style>
        body {
            background: linear-gradient(120deg, #eaf9ef 40%, #d3f1fd 100%);
        }
        main {
            width: 100%;
            padding: 48px 10vw 40px 10vw;
            min-height: 80vh;
        }
        .adh-title {
            font-size: 2.3em;
            font-weight: 800;
            color: #155932;
            margin-bottom: 0.5em;
        }
        .adh-highlight {
            color: #d52a2a;
            font-size: 1.1em;
            font-weight: 600;
        }
        .adh-list {
            margin: 20px 0;
            font-size: 1.1em;
        }
        .adh-list li {
            color: #1d73b2;
            font-size: 1.05em;
            margin: 0.25em 0;
            font-weight: bold;
        }
        .adh-greeting {
            font-size: 1.7em;
            color: #e03232;
            margin: 1.3em 0 0.7em 0;
            font-weight: bold;
        }
        .adh-message {
            margin-top: 1em;
            font-size: 1.11em;
            color: #222;
        }
        .adh-message b {
            font-weight: 700;
            color: #155932;
        }
        .adh-payment {
            color: #1d73b2;
            font-weight: 700;
        }
        .adh-contact {
            margin-top: 2em;
            font-size: 1em;
            color: #333;
            line-height: 1.5;
        }
        .adh-btn {
            display: inline-block;
            background: linear-gradient(90deg, #7a0303 40%, #155932 100%);
            color: #fff;
            font-weight: 700;
            font-size: 1.2em;
            padding: 11px 48px;
            border: none;
            border-radius: 11px;
            box-shadow: 0 2px 12px #1d73b230;
            margin-top: 34px;
            cursor: pointer;
            transition: background 0.18s, box-shadow 0.18s, color 0.18s, transform 0.13s;
        }
        .adh-btn:hover {
            background: linear-gradient(90deg, #e03232 40%, #155932 100%);
            color: #ffe366;
            transform: scale(1.07);
            box-shadow: 0 4px 22px #15593232;
        }
        @media (max-width:768px) {
            main { padding: 32px 3vw 20px 3vw; }
            .adh-title { font-size: 1.5em;}
            .adh-greeting { font-size: 1.18em;}
            .adh-btn { width: 100%; padding: 14px 0; font-size: 1em;}
        }
    </style>
</head>
<body>
<?php include('header.php'); ?>

<main>
    <div class="adh-title">Congratulations!</div>
    <div class="adh-highlight">
        Any Domestic Help is the only Domestic Help Agency in the country certified by 4 Government of India Departments.
    </div>
    <ul class="adh-list">
        <li>National Skills Development Corporation</li>
        <li>Skills India</li>
        <li>Startup India</li>
        <li>Private limited company registered under the Companies Act 2013</li>
    </ul>

    <div class="adh-greeting">
        Hi <?php echo htmlspecialchars($Name); ?>,
    </div>
    <div class="adh-message">
        Greetings from <b>Any Domestic Help</b>!<br>
        The complete team at Any Domestic Help would be honoured to serve you and have you as one of our esteemed customer.<br><br>
        Any Domestic Help charges a <span class="adh-payment">registration fee of Rs. 1000</span> before the screening process.<br>
        This amount is completely <b>"refundable"</b> if we do not provide you with the services required by you.
    </div>
    <div class="adh-contact">
        Thank you,<br>
        Dipti Arora<br>
        Customer Loyalty Executive<br>
        Call or Whatsapp: 9137948393
    </div>
    <form method="post">
        <button class="adh-btn" name="button1" type="submit">Pay Now</button>
    </form>
</main>

<?php include('footer.php'); ?>
</body>
</html>

<?php
//$b = 1;
//if($b==1) {
//    global $b;
//    $b = $b+2;  // execute once failsafe
//    if (ob_get_level() == 0) ob_start();{
//
//        ob_flush();
//        flush();
//        sleep(60);


//    echo str_pad('', 4096) . "\n";
//        $rand_no = rand(2, 3);
//$emp=2;
//        $NAME = str_replace(" ", "%20", $Name);//replace space with %20 for sms message
////        $msg = "Hi%20$NAME,%0a%0aWe%20have%20received%20your%20inquiry%20for%20a%20domestic%20help%20please%20pay%20the%20registration%20amount%20as%20we%20have%20$rand_no%20employees%20who%20match%20your%20requirements%20and%20can%20put%20them%20on%20a%20call%20with%20you%20immediately.%20Click%20on%20the%20link%20to%20pay.%20www.Any Domestic Help.co.in%2Fcontinue2.php?ord%3D$order_id%0a%0aYour%20ORDER%20ID%20is%20$order_id.%0a%0aKindly%20ignore%20this%20message%20if%20you%20have%20already%20paid.";
//        $msg = "Hi%20$NAME,%0a%0aWe%20have%20received%20your%20inquiry%20for%20a%20domestic%20help%20please%20pay%20the%20registration%20amount%20as%20we%20have%20$emp%20employees%20who%20match%20your%20requirements%20and%20can%20put%20them%20on%20a%20call%20with%20you%20immediately.%20Click%20on%20the%20link%20to%20pay.%20www.Any Domestic Help.co.in%2Fcontinue1.php?ord%3D$order_id%0a%0aYour%20ORDER%20ID%20is%20$order_id.%0a%0aKindly%20ignore%20this%20message%20if%20you%20have%20already%20paid.";
//        $ch = curl_init();
//        curl_setopt($ch, CURLOPT_URL, "http://103.233.79.246//submitsms.jsp?user=Fitzone&key=97a7a78c99XX&mobile=$PHONE&message=$msg&senderid=KMKHOJ&accusage=1");
//        curl_setopt($ch, CURLOPT_USERAGENT, "MozillaXYZ/1.0");
//        curl_setopt($ch, CURLOPT_HEADER, 0);
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//        $output = curl_exec($ch);
//        curl_close($ch);

//        $to = "$EMAIL";
//        $subject = "Welcome to Any Domestic Help";
////        $message = "Hi $Name, \n We have received your inquiry for a domestic help please pay the registration amount as we have $rand_no employees who match your requirements and can put them on a call with you immediately. Click on the link to pay now Any Domestic Help.co.in/continue2.php?ord=$order_id\nYour ORDER ID is $order_id. Kindly ignore this message if you have already paid.";
//        $message = "Hi $Name, \nWe have received your inquiry for a domestic help please pay the registration amount as we have $emp employees who match your requirements and can put them on a call with you immediately. Click on the link to pay now Any Domestic Help.co.in/continue1.php?ord=$order_id\nYour ORDER ID is $order_id. Kindly ignore this message if you have already paid.";
//        $from = "customercare@Any Domestic Help.co.in";
//        $headers = "From: $from";
//        mail($to, $subject, $message, $headers);


//    }
//
//    ob_end_flush();
////}
?>

