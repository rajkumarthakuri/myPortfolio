document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) return;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const matchesFilter = filterValue === 'all' || card.getAttribute('data-category') === filterValue;

                if (matchesFilter) {
                   card.classList.remove('hide');                    
                    requestAnimationFrame(() => {
                        card.classList.remove('fade-out');
                    });
                } else {                    
                    card.classList.add('fade-out');               
                   
                    card.addEventListener('transitionend', function handleFade() {
                        if (card.classList.contains('fade-out')) {
                            card.classList.add('hide');
                        }
                        card.removeEventListener('transitionend', handleFade);
                    });
                }
            });
        });
    });
});