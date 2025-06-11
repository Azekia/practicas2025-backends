<?php
require_once __DIR__ . '/../RomanConverter.php';
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['numero'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Falta el campo "numero".']);
    exit;
}

try {
    $numero = (int) $input['numero'];
    $romano = RomanConverter::intToRoman($numero);
    echo json_encode(['numero' => $numero,'romano' => $romano]);
} catch (\InvalidArgumentException | \OutOfRangeException $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}