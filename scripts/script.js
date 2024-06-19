function create_id2(){
    
    let numeroAleatorio = '';
    const caracteres = '0123456789'; // Puedes agregar letras o caracteres especiales si lo deseas
    
    for (let i = 0; i < 7; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        numeroAleatorio += caracteres.charAt(indiceAleatorio);
    }
    
    return numeroAleatorio;

      
}