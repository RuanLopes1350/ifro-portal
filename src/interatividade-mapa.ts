// Arquivo: src/interatividade-mapa.ts

export function setupMapInteraction() {
    // Objeto que conecta os IDs dos links <a> com os IDs das cidades <path> no SVG
    // CORRIGIDO para bater com os IDs do seu HTML
    const campi = [
        { linkId: 'link-pvh-calama',      svgId: 'RO-110020' },
        { linkId: 'link-pvh-zn',          svgId: 'RO-110020' },
        { linkId: 'link-ariquemes',       svgId: 'RO-110002' },
        { linkId: 'link-ji-parana',       svgId: 'RO-110012' },
        { linkId: 'link-cacoal',          svgId: 'RO-110004' },
        { linkId: 'link-vilhena',         svgId: 'RO-110030' },
        { linkId: 'link-colorado-oeste',  svgId: 'RO-110006' }, // ID Corrigido
        { linkId: 'link-guajara-mirim',   svgId: 'RO-110010' }, // ID Corrigido
        { linkId: 'link-jaru',            svgId: 'RO-110011' }
    ];

    campi.forEach(campus => {
        // Busca o elemento do link e o elemento do mapa usando os IDs
        const linkElement = document.getElementById(campus.linkId) as HTMLAnchorElement;
        const pathElement = document.getElementById(campus.svgId);

        // Se ambos os elementos existirem na página...
        if (linkElement && pathElement) {
            
            // 1. Marca a cidade no mapa com a classe para deixá-la verde
            pathElement.classList.add('tem-campus');

            // 2. Adiciona o clique na cidade do mapa para abrir o link do campus
            pathElement.addEventListener('click', () => {
                // Abre o link em uma nova aba. 
                window.open(linkElement.href, '_blank');
            });

            // 3. Interatividade de mouse:
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
        }
    });
}