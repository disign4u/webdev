const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver( entries => {
    console.log(entries);
});

observer.observe(cards[0]);