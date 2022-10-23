<?php

date_default_timezone_set('America/Sao_Paulo');

ini_set('max_execution_time', 300);
set_time_limit(300);

$estados = ['pr','sc','rs', 'br', 'am','ba','ce','df','es','go','ma','ms','mt','mg','pa','pb','ac','pe','pi','rj','rn','ap','ro','rr','al','sp','se','to'];

$countEstados = count($estados);

$codeEleicao = "9240";
$presidente = "-c0001-e00{$codeEleicao}-r.json";

$cargo = $presidente;

$cargoDir = "/pres/";


echo "atualizado em " . date('d/m/Y H:i') . "<br><br>";

for ($i=0; $i < $countEstados; $i++) {
    $url = "https://resultados-sim.tse.jus.br/teste/ele2022/{$codeEleicao}/dados-simplificados/{$estados[$i]}/{$estados[$i]}{$cargo}";
    echo $url . "<br>";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
    curl_setopt($ch, CURLOPT_URL,$url);

    $result = curl_exec($ch);

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if($httpCode == 200){
            $diretorio = "../../../eleicoes/1turno/json{$cargoDir}{$estados[$i]}/";
            if(!is_dir($diretorio)){
                mkdir($diretorio,0755);
            }

            $filename = $diretorio .$estados[$i]. $cargo;
            $fp = fopen($filename, "w+");

            fputs($fp, trim($result));
            fclose($fp);
        } else {
            echo "" . $url . 'result' . $result. ' http err ' . $httpCode . "<br>";
        }
    curl_close($ch);
}



echo "Atualizando notícias.. <br><br>";

$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
curl_setopt($ch, CURLOPT_URL,$url);

$result = curl_exec($ch);

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if($httpCode == 200){
        $diretorio = "../../../eleicoes/1turno/json/noticia/";
        if(!is_dir($diretorio)){
            mkdir($diretorio,0755);
        }

        $decode = json_decode($result, false, 512, JSON_UNESCAPED_UNICODE);
        $newJson = [];
        
        for($j=0; $j < count($decode); $j++){
            $newJson[$j]['title'] =  $decode[$j]->yoast_head_json->title;
            $newJson[$j]['link'] = $decode[$j]->link;
        }

        $json = json_encode($newJson);

        $fp = fopen($diretorio . "obemdito.json", "w+");
        fputs($fp, trim($json));
        fclose($fp);
    } else {
        echo "" . $url . 'result' . $result. ' http err ' . $httpCode . "<br>";
    }
curl_close($ch);



echo "Enviando solicitação de limpeza de cache... <br>";


try{
    $cloudflare = ['purge_everything' => true];

    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "{$baseURI}{$zone}/purge_cache",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($cloudflare),
        CURLOPT_HTTPHEADER => ["X-Auth-Email: {$email}", "X-Auth-Key: {$key}", "Content-Type: application/json"]
    ]);

    $response = curl_exec($curl);

    curl_close($curl);

    $decode = json_decode($response);
    echo "Status cloudflare: {$decode->success} id: {$decode->result->id}";
}catch(Exception $e){
   echo "errror";
   print_r($e->getMessage());
}

header("Refresh: 60");

