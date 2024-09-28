const todoTemplate = document.createElement('template');
todoTemplate.innerHTML = `
    <style>
        h3 {
            color: green;
        }
    </style>
    <div class="todo-item">
    <h3>
        <slot></slot>
    </h3>
`;

class TodoItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(todoTemplate.content.cloneNode(true));
    }
}

customElements.define('todo-item', TodoItem);

const headerNavTemplate = document.createElement('template');
headerNavTemplate.innerHTML = `
    <style>
        h4 {
            color: blue;
        }
    </style>
    <div class="header-nav">
        <h4>
            <slot></slot>
        </h4>
    </div>
`;

    class HeaderNav extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            shadow.appendChild(headerNavTemplate.content.cloneNode(true));
        }
    }

    customElements.define('header-nav', HeaderNav);