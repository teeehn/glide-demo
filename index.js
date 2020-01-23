import Glide from "@glidejs/glide";

const glide_options = {
    type: 'carousel',
    peek: 200
};

(function (window) {
    function init () {
        const carousel = new Glide('.glide', glide_options);
        carousel.mount();
        console.log("init fired");
    }
    window.addEventListener("load", init);
}(window));

