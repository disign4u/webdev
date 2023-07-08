const generateSteps = ()=>{
    const steps = [];
    for (let i = 1; i <= 101; i++) {
    steps.push((i - 1) / 100);
}
    return steps
}
    const isTrigger = (element,className)=>{
    return element.classList.contains(className);
}
    const rootConfig = {
    root: null,
    rootMargin: '0px 0px',
    threshold: generateSteps()
};
    const Cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver (function (entries, observer) {
    entries.forEach(function(entry) {
        //console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            if(entry.boundingClientRect.top < 0) {
                entry.target.classList.add("fix");
            }
        } else {
            entry.target.classList.remove("active");
            entry.target.classList.remove("fix");
        }
        let y = window.innerHeight;
        console.log(y, entry.boundingClientRect.top);
    });
}, rootConfig);

    Cards.forEach((card)=>{
    cardObserver.observe(card);
});
