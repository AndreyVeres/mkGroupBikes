const addProperty = () => {
    const item = document.querySelectorAll('.content');
    let propertyNames = [];

    document.querySelectorAll('.valid').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.remove('valid');
        })
    })
    item.forEach(item => {
        item.addEventListener('click', function () {
            propertyNames = [];
            this.querySelectorAll('.bike__prop-item').forEach(prop => {
                propertyNames.push(prop);
            });
            this.querySelector('.form').addEventListener('submit', function (e) {
                validationProperty(e);
            });
        });
    });

    function validationProperty(e) {
        e.preventDefault();
        let value = e.target[0].value.toLowerCase().trim();
        for (let i = 0; i < propertyNames.length; i++) {
            if (propertyNames[i].textContent.toLowerCase() === value) {
                addActive(propertyNames[i]);
                e.target[0].value = '';
                propertyNames[i].addEventListener('click', function () {
                    this.classList.remove('valid');
                });
            } else {
                e.target[0].value = '';
            }
        };
    };

    function addActive(item) {
        item.classList.add('valid');
    };
};


export default addProperty;