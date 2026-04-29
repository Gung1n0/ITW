let containers = document.querySelectorAll(".nad_project");

containers.forEach(cont => {
    let h2 = cont.querySelector(".hidden");

    cont.addEventListener('mouseenter', () => {
        h2.classList.remove("hidden");
        h2.classList.add("anim_fade");
    });

    cont.addEventListener('mouseleave', () => {
        h2.classList.add("hidden");
        h2.classList.remove("anim_fade");
    });
});