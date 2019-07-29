const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", stickyNavbar);

function stickyNavbar() {
	if (document.body.scrollTop > 86 || document.documentElement.scrollTop > 86) {
		navbar.classList.remove("on-top");
		navbar.classList.add("not-on-top");
	} else {
		navbar.classList.remove("not-on-top");
		navbar.classList.add("on-top");
	}
}
