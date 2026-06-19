class FooterFill extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="wholefooter">
                <p class="policytext">&copy; 2026 Madison Audio Visual - Madison, SD 57042 - All Rights Reserved - Website v1.0.7</p>
                <span class="spacer"></span>
                <a href="sitemap.html" class="policytext">Sitemap</a>
                <a href="contact.html" class="policytext">Contact</a>
                <a href="about.html" class="policytext" style="white-space: nowrap;">About Us</a>
            </div>
        `;
    }
}

customElements.define('footer-fill', FooterFill);