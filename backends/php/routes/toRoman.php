<?php
require_once __DIR__ . '/../RomanConverter.php';
header('Content-Type: application/json');

// Leer y decodificar el cuerpo de la petición
$input = json_decode(file_get_contents('php://input'), true);

// Verificación básica de campos requeridos
if (!isset($input['numero']) || !isset($input['veces'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan los campos "numero" o "veces".']);
    exit;
}

try {
    $numero = (int) $input['numero'];
    $veces = (int) $input['veces'];

    // Ejecutar la conversión las veces indicadas (simulación de carga)
    for ($i = 0; $i < $veces; $i++) {
        $romano = RomanConverter::intToRoman($numero);
    }

    // Respuesta con la estructura solicitada
    echo json_encode([
        'numero' => $numero,
        'veces' => $veces,
        'romano' => $romano
    ]);
} catch (\InvalidArgumentException | \OutOfRangeException $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}
