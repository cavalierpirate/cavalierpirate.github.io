$(".downloadLink").click(
    function(e) {
        e.preventDefault();

        locale = window.location;
        //open download link in new page
        window.open( $(this).attr("href") );
        url = "instructions/"
        //redirect current page to success page
        url = locale + url
        window.location=url;
        window.focus();
    }
);
