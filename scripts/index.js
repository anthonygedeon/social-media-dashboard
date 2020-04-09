const toggleBtn = document.querySelector('.dashboard__toggle-container');

let currentTheme = true;

const colorTheme = {
    getColors: {
        darkBlueTop: getComputedStyle(document.documentElement).getPropertyValue('--very-dark-blue-bg'),
        darkBlueBg: getComputedStyle(document.documentElement).getPropertyValue('--very-dark-blue-top-bg'),
        desaturatedBlueCard: getComputedStyle(document.documentElement).getPropertyValue('--dark-desaturated-blue-card-bg'),
        desaturatedBlueCardText: getComputedStyle(document.documentElement).getPropertyValue('--desaturated-blue-text'),
        whiteText: getComputedStyle(document.documentElement).getPropertyValue('--white-text'),

    }
}

function switchColorTheme() {

    if (currentTheme) {
        
        currentTheme = false

        this.children[0].classList.toggle('dashboard__toggle-button--right')

        // switch to white theme
        document.documentElement.style.setProperty('--very-dark-blue-bg', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--very-dark-blue-top-bg', 'hsl(225, 100%, 98%)');
        document.documentElement.style.setProperty('--dark-desaturated-blue-card-bg', 'hsl(227, 47%, 96%)');
        document.documentElement.style.setProperty('--desaturated-blue-text', 'hsl(228, 12%, 44%)');
        document.documentElement.style.setProperty('--white-text', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--dark-theme-toggle', 'hsl(230, 22%, 74%)');
        document.documentElement.style.setProperty('--dark-mode-active', 'hsl(231, 33%, 84%)');
    } else {

        currentTheme = true;

        this.children[0].classList.toggle('dashboard__toggle-button--right')

        // switch to dark theme
        document.documentElement.style.setProperty('--very-dark-blue-bg', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--very-dark-blue-top-bg', 'hsl(232, 19%, 15%)');
        document.documentElement.style.setProperty('--dark-desaturated-blue-card-bg', 'hsl(228, 28%, 20%)');
        document.documentElement.style.setProperty('--desaturated-blue-text', 'hsl(228, 34%, 66%)');
        document.documentElement.style.setProperty('--white-text', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--dark-theme-toggle', 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        document.documentElement.style.setProperty('--dark-mode-active', 'hsl(230, 27%, 29%)');

    }
}

toggleBtn.addEventListener('click', switchColorTheme)