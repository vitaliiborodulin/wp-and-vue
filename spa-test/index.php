<?php 
    $root = get_template_directory_uri();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <title>wp-and-vue</title>
    <link href="<?=$root?>/css/chunk-vendors.css" rel="preload" as="style">
    <link href="<?=$root?>/js/app.js" rel="preload" as="script">
    <link href="<?=$root?>/js/chunk-vendors.js" rel="preload" as="script">
    <link href="<?=$root?>/css/chunk-vendors.css" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript" src="<?=$root?>/js/chunk-vendors.js"></script>
    <script type="text/javascript" src="<?=$root?>/js/app.js"></script>
</body>
</html>
