<?php
  // Vars
  $nome = $_POST['name'];
  $email = $_POST['email'];
  $mensagem = $_POST['msg'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  // Email body
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  // Destiny
  $destino = "luisbls77@hotmail.com";
  $assunto = "Contato do site de portfolio";

  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  // Send
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";
?>