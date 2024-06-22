
//Toggle Menu

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showTab(tabId) {
    const tabs = document.querySelectorAll('.project-tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'flex';
    event.target.classList.add('active');
}

// Set the default tab to be displayed
document.getElementById('js-projects').style.display = 'flex';

