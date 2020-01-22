import Glide from "@glidejs/glide";

(function (window) {
    function init () {
        new Glide('.glide').mount();
        console.log("init fired");
    }
    window.addEventListener("load", init);
}(window));

