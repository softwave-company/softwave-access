<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once __DIR__ . '/config/conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'PUT') {
  // Captura os dados enviados no PUT
  $input = json_decode(file_get_contents("php://input"), true);

  if (
    empty($input['id']) ||
    empty($input['nome']) ||
    empty($input['email']) ||
    empty($input['cpf']) ||
    empty($input['telefone']) ||
    empty($input['data_nascimento'])
  ) {
    http_response_code(400);
    echo json_encode(["message" => "Preencha todos os campos obrigatórios"]);
    exit;
  }

  try {
    $sql = "UPDATE users
            SET nome = ?, email = ?, cpf = ?, telefone = ?, data_nascimento = ?
            WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
      $input['nome'],
      $input['email'],
      $input['cpf'],
      $input['telefone'],
      $input['data_nascimento'],
      $input['id']
    ]);


    echo json_encode(["success" => true, "message" => "Perfil atualizado com sucesso"]);
  } catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erro ao atualizar perfil: " . $e->getMessage()]);
  }

  exit;
}


http_response_code(405);
echo json_encode(['error' => 'Método não permitido']);
