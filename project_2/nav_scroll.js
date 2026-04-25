window.addEventListener("scroll",() => {
let nav=document.getElementById("nav");

if(window.scrollY > 10)
{
    if(!nav.classList.contains("show"))
    {
    nav.classList.add("show");
    }
}
else
{
    if(nav.classList.contains("show"))
    {
    nav.classList.remove("show");
    }
}
});