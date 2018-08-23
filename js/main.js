
$(document).ready(function(){
    $(window).on('resize',function(){
    widthCheck()
    checkBoxes()
    checkItem()
    })
    checkBoxes()
    checkItem()
    function widthCheck(){
        if($(window).width() > 1024){
            $('.mobile').hide();
        }
    }
    function checkBoxes(){
        var tHeight = 0;
        $('.evlogo .box').each(function(){
            var dis = $(this);
            if (dis.outerHeight() > tHeight){
                height = dis
                tHeight = dis.outerHeight();
            }
        })
        $('.evlogo .box').height(tHeight);
    }
    function checkItem(){
        var tHeight = 0;
        $('.itemBox .list .itemList').each(function(){
            var dis = $(this);
            if (dis.outerHeight() > tHeight){
                tHeight = dis.outerHeight();
            }
        })
        $('.itemBox .list .itemList').height(tHeight);
    }
    $('.burger').on('click',function(){
        $('.mobile').slideToggle().toggleClass('open');
        console.log('w');
    })

    $('.goTop').click(function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    });
    $(document).on("click","#footerWrap .site-notice li:first-child a",function(){
        $("#popup").show();
    })
    $(document).on("click",".modal-box button",function(){
        $("#popup").hide();
    })
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            $('.goTop').addClass('active');
        }
        else {
            $('.goTop').removeClass('active');
        }
    }
})

var snsTitle = document.title;
var snsUrl = location.href;

//alert(snsUrl + '|' + snsTitle);

Kakao.init('1cf4885573510d2b8cfa39ebe13a8a55');
function sharedsns_kakaost() {
	Kakao.Story.share({
	  url: snsUrl,
	  text: snsTitle
	});
}


function sharedsns(sns) {
    var o;
    var _url = encodeURIComponent(snsUrl);
    var _title = encodeURIComponent(snsTitle);
    var _br  = encodeURIComponent('\r\n');

    switch(sns)
    {
        case 'facebook':
			window.open("http://www.facebook.com/sharer.php?u="+ _url +"&t="+ _title, "facebook_sharer","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
            break;
        case 'twitter':
			//window.open("http://twitter.com/home?status="+ _url +"&t="+ _title, "twitter_sharer","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
			window.open("http://twitter.com/intent/tweet?text="+ _title +"&url="+ _url, "twitter_sharer","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
            break;
        case 'googleplus':
			window.open("https://plus.google.com/share?url="+ _url +"&t="+ _title, "googleplus_sharer","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
            break;
        case 'kakaostory':
			sharedsns_kakaost();
			//window.open("https://story.kakao.com/share?url="+ _url +"&t="+ _title, "kakaostory_sharer","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
            break;
        case 'band':
			var sharedtxt = _title + ' | ' + _url;
			//window.open("http://www.band.us/plugin/share?body="+ _title + "&route=" + _url, "share_band","width=410, height=540, resizable=no");
			window.open("http://www.band.us/plugin/share?body="+ sharedtxt, "share_band","width=410, height=540, resizable=no");

            break;
        case 'line':
			//window.open("http://line.me/R/msg/text/?"+ _title +"%0D%0A"+ _url, "share_line","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
			window.open("http://line.naver.jp/R/msg/text/?"+ _title +"%0D%0A"+ _url, "share_line","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
            break;
        case 'blog':
        window.open("https://share.naver.com/web/shareView.nhn?url="+_url+"&title="+_title,"share_blog","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
	}
}


/*function newsletter_subscribe_win() {
	openPopup('apply');
	$("#mailChangeAgree").css("display","none");
    $("#emailFind").css("display","none");
	$('.popup-newsletter.popup-wrap > div').removeClass('active').eq(0).addClass('active');
	//window.open("http://www.skhappiness.org/webzine/subscription.do", "newsletter_subscribe_popup","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=450,height=380");
}*/


//공통함수
function fn_prev_site(){
    var trgtSite = $('#prev_site').val();
    if(trgtSite != ''){
    	window.open('http://' + location.hostname + ':'+ location.port + '/webzine/'+trgtSite+'/', '_blank');
    }else{
        alert('지난호를 선택해주십시오.');    	
    	$("#prev_site option:eq(0)").prop("selected", true);
    	
        return;
    }
}

function fn_prev_site_m(){
    var trgtSite = $('#prev_site_m').val();
    if(trgtSite != ''){
    	window.open('http://' + location.hostname + ':' + location.port +'/webzine/'+trgtSite+'/', '_blank');
    }else{
        alert('지난호를 선택해주십시오.');
    	$("#prev_site_m option:eq(0)").prop("selected", true);
        return;
    }
}