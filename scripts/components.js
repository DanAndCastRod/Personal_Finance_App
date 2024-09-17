function toggle_sidebar(element){
    if(element.className.includes('is-active')){    
        $('.header__pane')[0].classList.add('ml-auto')
    }else{
        $('.header__pane')[0].classList.remove('ml-auto')
    }
}
function loadComponentSync(url, selector) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // El parámetro 'false' hace que la solicitud sea sincrónica
    xhr.send(null);

    if (xhr.status === 200) {
        document.querySelector(selector).outerHTML = xhr.responseText;
    } else {
        console.error('Error al cargar el componente:', xhr.status);
    }
}

// Cargar el navbar
loadComponentSync('../components/navbarGB.html', 'navbarGB');

// Cargar el sidebar
loadComponentSync('../components/sidebarGB.html', 'sidebarGB');

// Cargar el drawer
loadComponentSync('../components/drawerGB.html', 'drawerGB');

svg_factory=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <defs>
                                    <style>
                                        .cls-1, .cls-2 {
                                            fill: none;
                                        }
                                        .cls-2 {
                                            stroke: #343a40;
                                            stroke-miterlimit: 10;
                                            stroke-width: 1.5px;
                                        }
                                    </style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                
                                    <g id="Capa_2-2" data-name="Capa 2">
                                        <polygon class="cls-2" points="12 54 12 39 25 32 25 39 38 32 38 39 51 32 51 54 12 54"/>
                                        
                                        <polygon class="cls-2" points="38 54 26 54 26 49 32 49 38 49 38 54"/>
                                        <line class="cls-2" x1="32" y1="49" x2="32" y2="54"/>
                                        <polyline class="cls-2" points="42 36.85 43 14 47 14 47.86 33.69 38 39"/>
                                        <line class="cls-2" x1="43" y1="17" x2="47" y2="17"/>
                                    </g>
                                </g>
                            </svg>

`
svg_logout=`
<svg viewBox = "0 0 64 64">
                                <defs>
                                    <style>
                                        .st3{
                                            fill: none;
                                            stroke: #343a40;
                                            stroke-width: 1.5px;
                                            stroke-miterlimit: 10;
                                        }
                                    </style>
                                </defs>
                                <g id="capa_3" data-name="Capa 2">
                                    <g id="capa_3-2" data-name="Capa 1">
                                        <path class="st3" d="M37,53h10c0,0,4,0,4-5s0-28,0-28s1-5-5-5s-9,0-9,0"/>
                                        <path class="st3" d="M26.5,39.5h11c0.6,0,1-0.5,1-1v-8c0-0.6-0.5-1-1-1h-11v-7v-1.3c0-0.9-1.1-1.4-1.8-0.7L14.1,32.8
                                            c-0.3,0.4-0.3,0.9,0,1.3l10.7,12.3c0.6,0.7,1.7,0.3,1.7-0.7V39.5z"/>
                                    </g>
                                </g>
                            </svg>
`
document.querySelectorAll('icon-factory').forEach(e=>e.outerHTML = svg_factory)
document.querySelectorAll('icon-logout').forEach(e=>e.outerHTML = svg_logout)
// Asignar eventos a los elementos cargados (asegúrate de que el contenido esté en el DOM)
document.querySelectorAll('.close-sidebar-btn').forEach(e => {
    e.setAttribute('onclick', 'toggle_sidebar(this)');
});






