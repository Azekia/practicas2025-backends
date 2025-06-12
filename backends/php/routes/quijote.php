<?php
header("Content-Type: text/plain");

if (!isset($_GET['letra']) || strlen($_GET['letra']) !== 1) {
    http_response_code(400);
    echo "Error, el caracter tiene que ser solo 1 letra";
    exit;
}

$letra = $_GET['letra'];
$archivo = __DIR__ . '/../../quijote.txt';

if (!file_exists($archivo)) {
    http_response_code(500);
    echo "Error: El archivo quijote.txt no se ha encontrado";
    exit;
}

$contenido = file_get_contents($archivo);
$conteo = substr_count($contenido, $letra);
echo "La letra '{$letra}' aparece {$conteo} veces en el Quijote.";
