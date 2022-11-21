$(".page-scroll").click(function(e){
        e.preventDefault();
        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top-73
        }, 500);        


    })