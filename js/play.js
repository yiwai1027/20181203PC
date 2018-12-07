		var t = n = m = t2 = 0,
    count;
    $(document).ready(function() {
        count = $("#banner_list a").length;
        $("#banner_list a:not(:first-child)").hide();
        $("#banner_list2 a:not(:first-child)").hide();
        $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
        $("#banner_info2").html($("#banner_list a:first-child").find("img").attr('alt'));
        $("#banner_info").click(function() {
            window.open($("#banner_list a:first-child").attr('href'), "_blank")
				});
				$("#banner_info2").click(function() {
					window.open($("#banner_list2 a:first-child").attr('href'), "_blank")
				});
        $("#banner li").click(function() {
            var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
            n = i;
            if (i >= count) return;
            $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
            $("#banner_info").unbind().click(function() {
                window.open($("#banner_list a").eq(i).attr('href'), "_blank")
						}) 
						$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
            document.getElementById("banner").style.background = "";
            $(this).toggleClass("on");
            $(this).siblings().removeAttr("class");
				});
				$("#banner2 li").click(function() {
					var j = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
					m = j;
					if (j >= count) return;
					$("#banner_info2").html($("#banner_list2 a").eq(j).find("img").attr('alt'));
					$("#banner_info2").unbind().click(function() {
							window.open($("#banner_list2 a").eq(j).attr('href'), "_blank")
					}) 
					$("#banner_list2 a").filter(":visible").fadeOut(500).parent().children().eq(j).fadeIn(1000);
					document.getElementById("banner2").style.background = "";
					$(this).toggleClass("on");
					$(this).siblings().removeAttr("class");
				});
        t = setInterval("showAuto()", 2000);
        $("#banner").hover(function() {
            clearInterval(t)
        },
        function() {
            t = setInterval("showAuto()", 2000);
				});
				t2 = setInterval("showAuto2()", 2000);
        $("#banner2").hover(function() {
            clearInterval(t2)
        },
        function() {
            t2 = setInterval("showAuto2()", 2000);
        });
    })
  
    function showAuto() {
        n = n >= (count - 1) ? 0 : ++n;
        $("#banner li").eq(n).trigger('click');
		}
		function showAuto2() {
			m = m >= (count - 1) ? 0 : ++m;
			$("#banner2 li").eq(n).trigger('click');
	}