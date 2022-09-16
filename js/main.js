$('.navBtn').on('click',function(){
    $(this).toggleClass('on');
})

$('.center').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 2,
    'nextArrow' : '.next',
    'prevArrow' : '.prev',
    
  });



  
  let tgts;
  
  $('.pic').on('click',function(e){
    e.preventDefault(); //a때문에 새로고침 되는거 막기!
    
    tgts = $(this);
    console.log(tgts)

    $('.view').fadeIn(1000);
    let pic = $(this).html();
    $('figure').html(pic);

});


$('.prevBtn').on('click',function(){

  let prv = tgts.parents('.slick-slide').prev().find('.pic').html();
    
  $('figure').html(prv);

  tgts = tgts.parents('.slick-slide').prev().find('.pic');
}

);

$('.nextBtn').on('click',function(){

  let nxt = tgts.parents('.slick-slide').next().find('.pic').html();
    
  $('figure').html(nxt);

  tgts = tgts.parents('.slick-slide').next().find('.pic');
})



$('.btnClose, .wrapClose').on('click',function(){
    $('.view').hide();
    $('.show2').hide();
    $('.vidBox2').find('iframe').remove();
});




$('.site1 img').on('mouseover',function(){
    $('.txt2').show();
    $('.site2 img').stop().fadeOut(500);
    $('.txt2').fadeIn(100,function(){
        $(this).stop().animate({'left' : '105px'});
    });
}).on('mouseout',function(){
    $('.txt2').hide();
    $('.txt2').fadeOut(function(){
        $(this).stop().animate({'left' : '700px'});
    });
    $('.site2 img').stop().fadeIn(500);
})

$('.site2 img').on('mouseover',function(){
    $('.txt1').show();
    $('.site1 img').stop().fadeOut(500);
    $('.txt1').fadeIn(100,function(){
        $(this).animate({'left' : '150px'});
    })
}).on('mouseout',function(){
    $('.txt1').hide();

    $('.txt1').fadeOut(function(){
        $(this).stop().animate({'left' : '-400px'});
});
    $('.site1 img').stop().fadeIn(500);
})


$('.item').on('mouseover',function(){
    let tit = $(this).find('h3').text();
    console.log(tit);
    $('.left').find('h1').text(tit);
    $('.left').find('h1').css({'text-transform' : 'uppercase',
    
  });
})

$('.navBtn').click(function(){

    $('nav').toggleClass('open')

})

$('nav li').on('click',function(){
    let i = $(this).index();
    let hig = $('.right>div').eq(i).offset().top;
    $('body,html').animate({'scrollTop' : hig})

/*  let i = $(this).index();
    let px = $('#wrap div').eq(i).offset().top;

    $('html,body').animate({'scrollTop' : px})
*/
})


$('.vidCard2').click(function(){

    let key = $(this).find('.vidKey').text();

    let youtubeSrc = '<iframe width="1280" height="720" src="https://www.youtube.com/embed/'+key+'?list=RD13jhFFYCWVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


    $('.show2').fadeIn();
    $('.vidBox2').html(youtubeSrc);


    
});//vidCard2


