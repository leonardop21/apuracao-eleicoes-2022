<?php

date_default_timezone_set('America/Sao_Paulo');

ini_set('max_execution_time', 300); //300 seconds = 5 minutes
set_time_limit(300);

$estados = ['pr','sc','rs', 'am','ba','ce','df','es','go','ma','ms','mt','mg','pa','pb','ac','pe','pi','rj','rn','ap','ro','rr','al','sp','se','to'];

$countEstados = count($estados);

$codeEleicao = "9238";
$governador = "-c0003-e00{$codeEleicao}-r.json";
$senador = "-c0005-e00{$codeEleicao}-r.json";
$deputadoFed = "-c0006-e00{$codeEleicao}-r.json";
$deputadoEst = "-c0007-e00{$codeEleicao}-r.json";


switch ($_GET['cargo']) {
    case 'gov':
        $cargoDir = "/gov/";
        $cargo = $governador;
    break;
    case 'federal':
        $cargoDir = "/federal/";
        $cargo = $deputadoFed;
    break;
    case 'estadual':
        $cargoDir = "/estadual/";
        $cargo = $deputadoEst;
    break;
    case 'senador':
        $cargoDir = "/senador/";
        $cargo = $senador;
    break;
    default:
        $cargoDir = "/gov/";
        $cargo = $governador;
    break;
}

echo "pegando " . $_GET['cargo'] . "<br>";
echo "atualizado em " . date('d/m/Y H:i') . "<br><br>";


$k = 0;
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

header("Refresh: 60");

