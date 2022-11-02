import addProperty from './addProperty.js';
import tabs from './tabs.js'


window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabs__wrapper', '.tab', '.content');
    addProperty();
})

