$(document).ready(function () {
    $('.nav-tabs li button').click(function (e) {
        e.preventDefault();

        // Remove active class for all tabs and tab panels.
        $('.nav-tabs li').find('.active').removeClass('active').attr("aria-selected", "false");
        $('.tab-content').find('.active').removeClass('active');

        var tabName = $(this).attr("title").replace("tab-", "");

        // Add active class for all tabs and tab panels with the same name.
        $(".nav-tabs button[title='tab-" + tabName + "']")
            .addClass('active').attr("aria-selected", "true");
        $(".tab-content div[title='tab-pane-" + tabName + "']").addClass('active');
    });
});
