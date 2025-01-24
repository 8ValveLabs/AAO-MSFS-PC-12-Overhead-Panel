class OverheadToggle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.state = false;
        this.imgElement = document.createElement("img");
        this.imgElement.style.cursor = "pointer";

        this.imgElement.addEventListener("click", () => this.toggle());
        this.shadowRoot.appendChild(this.imgElement);
    }

    connectedCallback() {
        this.imgOn = this.getAttribute("img-on") || "button-on.png";
        this.imgOff = this.getAttribute("img-off") || "button-off.png";
        this.updateImage();
    }

    toggle() {
        this.state = !this.state;
        this.updateImage();

        // Get function names from attributes
        const action = this.getAttribute(this.state ? "data-action-on" : "data-action-off");
        if (action && typeof window[action] === "function") {
            window[action](this);
        }
    }

    updateImage() {
        this.imgElement.src = this.state ? this.imgOn : this.imgOff;
    }
}

customElements.define("overhead-toggle", OverheadToggle);
