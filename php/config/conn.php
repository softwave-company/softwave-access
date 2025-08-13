<?php
$host = 'localhost';      // ou IP do servidor
$db   = 'softwave_access_db';  // troca pelo nome real
$user = 'root';        // usuário do banco
$pass = '';          // senha do banco

$dsn = "mysql:host=$host;dbname=$db;";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,  // lança exceções pra erro
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,        // retorna array associativo
    PDO::ATTR_EMULATE_PREPARES   => false,                   // usa prepared statements reais
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
