//site.js
(function () {
    //var ele = $("#username");
    //ele.text("Divya Sengupta");

    //var main = $("#main");
    //main.on("mouseenter", function () {
    //    main.css = "background-color: #888;";
    //});

    //main.on("mouseleave", function () {
    //    main.css = "";
    //});
    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //})

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }
    });
})();

