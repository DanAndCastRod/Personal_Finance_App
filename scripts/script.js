function create_id2(){
    
    let numeroAleatorio = '';
    const caracteres = '0123456789'; // Puedes agregar letras o caracteres especiales si lo deseas
    
    for (let i = 0; i < 7; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        numeroAleatorio += caracteres.charAt(indiceAleatorio);
    }
    
    return numeroAleatorio;

      
}
if(document.documentElement.scrollWidth>1500){
    sidebar.classList.add('show')
}else{
    sidebar.classList.remove('show')
}