// HEADER NAVIGATION COMPONENT
const headerNavTemplate = document.createElement('template');
headerNavTemplate.innerHTML = `
    <style>
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem;
            background-color: #000;
            color: #fff;
        }

        header a {
            color: #fff;
        }

        nav {
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;
        }
    </style>
    <header class="header-nav">
        <a href="#" class="logo">
            AV UI
        </a>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>
`;

class HeaderNav extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(headerNavTemplate.content.cloneNode(true));
    }
}

customElements.define('header-nav', HeaderNav);

// INTRO SECTIION COMPONENT
const introSectionTemplate = document.createElement('template');
introSectionTemplate.innerHTML = `
        <style>
            .intro-section {
                display: flex;
                justify-content: flex-start;
                align-items: top;
                height: 100vh;
                background-color: #f1f1f1;
                color: #000;
                padding: 2rem;
            }

            h1 {
                margin: 0;
            }
        </style>
        <section class="intro-section">
            <h1>Intro Section</h1>
        </section>
    `;

class IntroSection extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(introSectionTemplate.content.cloneNode(true));
    }
}

customElements.define('intro-section', IntroSection);