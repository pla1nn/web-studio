const filterBox = document.querySelectorAll('.card');

document.querySelector('.projects-nav-list').addEventListener('click', event => {
    if (event.target.className !== 'projects-button') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});