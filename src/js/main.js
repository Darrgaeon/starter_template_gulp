// prevent babel from losing this
// this should be window object
function init() {
    this.$ = require("jquery/dist/jquery");
    this.jQuery = this.$;

    require("svg4everybody/dist/svg4everybody")();
    require("retinajs/dist/retina");
    require("uikit/dist/js/uikit");

    $(document).ready(function () {

    });
}

init.bind(window)();
