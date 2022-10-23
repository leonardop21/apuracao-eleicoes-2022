<?php

ini_set('max_execution_time', 300); //300 seconds = 5 minutes

set_time_limit(300);


$estados = ['pr','sc','rs', 'br', 'am','ba','ce','df','es','go','ma','ms','mt','mg','pa','pb','ac','pe','pi','rj','rn','ap','ro','rr','al','sp','se','to'];

$countEstados = count($estados);


$cargo = "-c0007-e009238-r.json";

$k = 0;
for ($i=0; $i < $countEstados; $i++) {
    $url = "https://resultados-sim.tse.jus.br/teste/ele2022/9238/dados-simplificados/{$estados[$i]}/{$estados[$i]}{$cargo}";
    $str = file_get_contents($url);
    $decode = json_decode($str);
    echo $url . "<br><br>";
    $countCand = count($decode->cand);
    // echo $countCand;
    $z = 0;
    for ($j=0; $j < $countCand ; $j++) { 
        $urlPhoto = "https://resultados-sim.tse.jus.br/teste/ele2022/9238/fotos/{$estados[$i]}/". $decode->cand[$j]->sqcand .".jpeg";
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
                $filename = $diretorio . $decode->cand[$j]->sqcand . ".jpeg";
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
            } else {
                echo "" . $url . ' result ' . $result. ' http err ' . $httpCode . "<br>";
            }
        curl_close($ch);
        if($k > 100) {
            $k = 0;
            sleep(2);
            echo 'dormi foto' . "<br>";
        } else {
            $k++;
        }
    }
    echo $estados[$i] . ' total  - ' . $countCand. '<br/>';
}

