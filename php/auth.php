<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once __DIR__ . '/config/conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $email = $_GET['email'] ?? null;
  $senha = $_GET['senha'] ?? null;

  if (!$email || !$senha) {
    http_response_code(400);
    echo json_encode(['error' => 'Email e senha são obrigatórios']);
    exit;
  }

  $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
  $stmt->execute([$email]);
  $user = $stmt->fetch();

  if (!$user) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuário não encontrado']);
    exit;
  }

  if (!password_verify($senha, $user['senha'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Senha incorreta']);
    exit;
  }

  unset($user['senha']);
  echo json_encode(['success' => true, 'user' => $user]);
  exit;
}

if ($method === 'POST') {
  $nome = $_POST['nome'] ?? null;
  $email = $_POST['email'] ?? null;
  $senha = $_POST['senha'] ?? null;

  if (!$nome || !$email || !$senha) {
    http_response_code(400);
    echo json_encode(['error' => 'Nome, email e senha são obrigatórios']);
    exit;
  }

  // Verifica se email já existe
  $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
  $stmt->execute([$email]);
  if ($stmt->fetch()) {
    http_response_code(409);
    echo json_encode(['error' => 'Email já cadastrado']);
    exit;
  }

  // Criptografa senha
  $hashSenha = password_hash($senha, PASSWORD_DEFAULT);

  // Insere usuário
  $stmt = $pdo->prepare("INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)");
  $result = $stmt->execute([$nome, $email, $hashSenha]);

  if ($result) {
    // Pega o ID do user recém-criado
    $userId = $pdo->lastInsertId();

    // Busca o usuário completo
    $stmt = $pdo->prepare("SELECT id, nome, email, cpf, telefone, data_nascimento FROM users WHERE id = ?");
    $stmt->execute([$userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
      'success' => true,
      'message' => 'Usuário criado com sucesso',
      'user' => $user
    ]);
  } else {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao criar usuário']);
  }
  exit;
}

http_response_code(405);
echo json_encode(['error' => 'Método não permitido']);