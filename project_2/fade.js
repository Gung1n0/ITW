function fade_top(id, rate) {

    let element = document.querySelector(id);

    window.addEventListener('scroll', () => {
        let nieco = element.getBoundingClientRect();

        let pass = -nieco.top / nieco.height;

        element.style.opacity = Math.max(0, Math.min(1, 1 - pass * rate));
    })
}

function fade_bottom(id, rate) {

    let element = document.querySelector(id);

    window.addEventListener('scroll', () => {
        let nieco = element.getBoundingClientRect();

        let pass = 1 - nieco.bottom / window.innerHeight;

        let dole = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

        if (dole) {
            element.style.opacity = 1;
            return;
        }

        element.style.opacity = Math.max(0, Math.min(1, pass * rate));
    })
}

fade_top("#home", 2);
fade_top("#profile", 2);
fade_top("#school", 1.5);
fade_top("#projects", 0.1);
fade_bottom("#skills", 8);
fade_bottom("#kontakt", 1);