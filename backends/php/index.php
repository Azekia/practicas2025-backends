<?php
// Habilitar CORS por problema de puertos
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$requestMethod = $_SERVER['REQUEST_METHOD']; //Método http (get, post)
$requestUri = $_SERVER['REQUEST_URI']; //Ruta consulta http

if ($requestUri === '/api/hi' && $requestMethod === 'GET') {
    require __DIR__ . '/routes/hi.php';
    exit;
}

if ($requestUri === '/api/toRoman' && $requestMethod === 'POST') {
    require __DIR__ . '/routes/toRoman.php';
    exit;
}

//En caso de ruta no encontrada, devolvemos un 404
http_response_code(404);
echo json_encode(['error' => 'Ruta no encontrada']);