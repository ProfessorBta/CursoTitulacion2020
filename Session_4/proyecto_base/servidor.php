<?php
/**
 * Obtener los datos del formulario 
 */
// Post
if (isset($_POST['nombre']) && isset($_POST['correo'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    
    echo "Hola " . $nombre . " tu correo es: " . $correo;
}

// Get
if (isset($_GET['producto']) && isset($_GET['cantidad'])) {
    $producto = $_GET['producto'];
    $cantidad = $_GET['cantidad'];
    
    echo "Producto: " . $producto. ", Cantidad: " . $cantidad;
}