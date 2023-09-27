const ratingButtons = document.querySelectorAll('.button');
ratingButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const rating = this.innerText;
        localStorage.setItem('selectedRating', rating);
    });
});
