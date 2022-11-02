const tabs = (parentElement, tabs, content) => {
    const parent = document.querySelector(parentElement);
    const tabButton = document.querySelectorAll(tabs);
    const tabContent = document.querySelectorAll(content);
    let index = 0;
    if(document.body.clientWidth > 660){
        showTab(index);
    }else{
        tabContent.forEach(tab => {
            tab.classList.add('collapse');
            tab.querySelector('.accordeon__title').classList.remove('tab-active');
            tab.addEventListener('click' , folding);
        });
        tabContent[index].classList.remove('collapse');
        tabContent[index].querySelector('.accordeon__title').classList.add('tab-active');
    }
    for (let i = 0; i < tabButton.length; i++) {
        tabButton[i].setAttribute('tab-index', i);
        tabContent[i].setAttribute('tab-index', i);
    };
    function showTab(index) {
        tabContent.forEach(tab => tab.style.display = 'none');
        tabButton.forEach(button => button.classList.remove('tab-active'));
        tabContent[index].style.display = 'flex';
        tabButton[index].classList.add('tab-active');
    };
    function getIndex(e) {
        if (e.target.classList.contains(tabs.slice(1))) {
            index = e.target.getAttribute('tab-index');
            showTab(index);
        };
    };
    function folding (){
        index = this.getAttribute('tab-index');
        tabContent.forEach(tab => {
            tab.classList.add('collapse');
            tab.querySelector('.accordeon__title').classList.remove('tab-active');
        });
        this.classList.remove('collapse');
        this.querySelector('.accordeon__title').classList.add('tab-active');
    };
    parent.addEventListener('click', getIndex);
    window.addEventListener('resize', function () {
        if (document.body.clientWidth <= 660) {
            tabContent.forEach(tab => {
                tab.classList.add('collapse');
                tab.querySelector('.accordeon__title').classList.remove('tab-active');
                tab.addEventListener('click' , folding);
            });
            tabContent[index].classList.remove('collapse');
            tabContent[index].querySelector('.accordeon__title').classList.add('tab-active');
        }else{
            tabContent.forEach(tab =>{
                tab.classList.remove('collapse');
                tab.removeEventListener('click' , folding);
            });
            showTab(index);
        };
    });
};
export default tabs;