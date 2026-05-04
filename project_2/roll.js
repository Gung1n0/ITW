document.querySelectorAll(".toggle").forEach(item => {
    item.addEventListener("click", () => {
        item.closest(".project").classList.toggle("active");
    });
});