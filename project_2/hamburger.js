document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
});

document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () {
        document.getElementById('nav').classList.remove('active');
    });
});