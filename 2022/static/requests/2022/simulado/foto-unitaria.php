<?php

ini_set('max_execution_time', 300);

set_time_limit(300);


$estado = $_GET['estado'];
$seq = $_GET['sequencia'];

    $urlPhoto = "https://resultados-sim.tse.jus.br/teste/ele2022/9238/fotos/{$estado}/". $seq .".jpeg";
    echo $urlPhoto . "<br><br>";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
    curl_setopt($ch, CURLOPT_URL,$urlPhoto);

    $result = curl_exec($ch);

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if($httpCode == 200){
            $diretorio = "../../../fotos/br/";
            if(!is_dir($diretorio)){
                mkdir($diretorio,0755);
            }
            $filename = $diretorio . $seq . ".jpeg";
            $fp = fopen($filename, "w+");
            fputs($fp, trim($result));
            fclose($fp);
        } else {
            echo "" . $url . ' result ' . $result. ' http err ' . $httpCode . "<br>";
        }
        
    curl_close($ch);
