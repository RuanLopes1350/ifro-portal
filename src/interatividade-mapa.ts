export function setupMapInteraction() {
    // Aguardar o DOM estar pronto antes de configurar a interatividade
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMap);
    } else {
        initializeMap();
    }
}

function initializeMap() {
    console.log('Inicializando interatividade do mapa...');
    
    // Objeto que conecta os IDs dos links <a> com os IDs das cidades <path> no SVG
    const campi = [
        { linkId: 'link-pvh-calama',      svgId: 'RO-110020' },
        { linkId: 'link-pvh-zn',          svgId: 'RO-110020' },
        { linkId: 'link-ariquemes',       svgId: 'RO-110002' },
        { linkId: 'link-ji-parana',       svgId: 'RO-110012' },
        { linkId: 'link-cacoal',          svgId: 'RO-110004' },
        { linkId: 'link-vilhena',         svgId: 'RO-110030' },
        { linkId: 'link-colorado-oeste',  svgId: 'RO-110006' },
        { linkId: 'link-guajara-mirim',   svgId: 'RO-110010' },
        { linkId: 'link-jaru',            svgId: 'RO-110011' }
    ];

    // Verificar se o SVG está presente
    const svgElement = document.querySelector('.mapa-ro');
    if (!svgElement) {
        console.error('SVG do mapa não encontrado!');
        return;
    }
    console.log('SVG do mapa encontrado:', svgElement);

    campi.forEach(campus => {
        // Busca o elemento do link e o elemento do mapa usando os IDs
        const linkElement = document.getElementById(campus.linkId) as HTMLAnchorElement;
        const pathElement = document.getElementById(campus.svgId);

        console.log(`Verificando campus: ${campus.linkId} -> ${campus.svgId}`);
        console.log('Link encontrado:', linkElement);
        console.log('Path encontrado:', pathElement);

        // Se ambos os elementos existirem na página...
        if (linkElement && pathElement) {
            
            // Marca a cidade no mapa com a classe para deixá-la verde
            pathElement.classList.add('tem-campus');

            // Adiciona o clique na cidade do mapa para abrir o link do campus
            pathElement.addEventListener('click', () => {
                window.location.href = linkElement.href;
            });

            // Interatividade de mouse:
            // Passa o mouse no link da lista -> destaca a cidade no mapa
            linkElement.addEventListener('mouseover', () => {
                pathElement.classList.add('highlight');
            });
            linkElement.addEventListener('mouseout', () => {
                pathElement.classList.remove('highlight');
            });
            
            // Passa o mouse na cidade do mapa -> destaca o(s) link(s) na lista
            pathElement.addEventListener('mouseover', () => {
                const linksToHighlight = document.querySelectorAll(`[data-svg-id='${campus.svgId}']`);
                linksToHighlight.forEach(link => link.classList.add('highlight-link'));
            });
             pathElement.addEventListener('mouseout', () => {
                const linksToHighlight = document.querySelectorAll(`[data-svg-id='${campus.svgId}']`);
                linksToHighlight.forEach(link => link.classList.remove('highlight-link'));
            });

            // Adiciona um atributo ao link para a referência inversa funcionar
            linkElement.setAttribute('data-svg-id', campus.svgId);
        } else {
            console.warn(`Elementos não encontrados para campus: ${campus.linkId} -> ${campus.svgId}`);
        }
    });
}