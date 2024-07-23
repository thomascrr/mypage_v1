function showSection(sectionId) {
    // Esconde o "contêiner" e todas as seções
    document.querySelector('.container').style.display = 'none';
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção clicada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.add('active');
    }
}

function showContainer() {
    // Mostra o "contêiner" e esconde todas as seções
    document.querySelector('.container').style.display = 'block';
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
}
