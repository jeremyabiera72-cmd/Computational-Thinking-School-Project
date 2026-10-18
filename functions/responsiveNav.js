// Mobile nav toggle — pairs with the .menu-toggle / .nav-links rules in styles/responsive.css
(function () {
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!toggle || !navLinks) {
        return;
    }

    function setOpen(open) {
        navLinks.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", () => {
        setOpen(!navLinks.classList.contains("open"));
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            setOpen(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            setOpen(false);
        }
    });
})();
