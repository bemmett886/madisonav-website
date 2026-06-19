class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="navbar">
                    <a href="/" class="logo">
                        <img src="logo.png">
                    </a>
                    <div class="navlayers">
                        <div class="navbuttons">
                            <a class="individualbuttons" href="live.html">Live Sound</a>
                            <a class="individualbuttons" href="installed.html">Installed Systems</a>
                            <span class="spacer"></span>
                            <a class="individualbuttons" href="about.html">About Us</a>
                            <a class="individualbuttons" href="contact.html">Contact</a>
                            <a class="individualbuttons" href="policies.html">Policies</a>

                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);