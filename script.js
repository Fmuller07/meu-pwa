document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const drawerMenu = document.getElementById('drawer-menu');

    menuToggle.addEventListener('click', () => {
        drawerMenu.classList.toggle('open');
    });

    const menuLinks = document.querySelectorAll('.drawer-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            drawerMenu.classList.remove('open');
        });
    });

    document.body.addEventListener('click', (event) => {
        if (!drawerMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            drawerMenu.classList.remove('open');
        }
    });
});
