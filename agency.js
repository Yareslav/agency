setSize();
function setSize() {
  $(`.head__img`).css({ height: 0.84 * $(`[alt="main"]`).width() });
}
$(window).on(`resize`, setSize);
$(`[attr="circle"]`).each(function () {
  var This = $(this);
  $(this).css({ height: $(this).width() });
  $(window).on(`resize`, function () {
    This.css({ height: This.width() });
  });
});
$(`[where]`).on(`click`, function () {
  $(`html`).animate(
    { scrollTop: $(`.` + $(this).attr(`where`)).offset().top },
    600
  );
});
$(`.body2__control div`).on(`mouseenter`, function () {
  if ($(this).attr(`type`) == `left`) {
		$(this).find(`img`).attr(`src`,`./images/leftWhite.png`)
  } else {
		$(this).find(`img`).attr(`src`,`./images/rightWhite.png`)
	}
});
$(`.body2__control div`).on(`mouseleave`,function () {
	if ($(this).attr(`type`) == `left`) {
		$(this).find(`img`).attr(`src`,`./images/left.png`)
  } else {
		$(this).find(`img`).attr(`src`,`./images/right.png`)
	}
})
setInterval(()=>{
	const check_=$(window).width()*0.41;
	var size=(check_>410) ? check_ : 410;
	$(`.head__circ-box`).animate({width:`60vw`,height:`60vw`},4000);
	setTimeout(()=>{
		$(`.head__circ-box`).animate({width:size,height:size},4000);
	},4000);
},8000);
$(window).on(`scroll`,setMark);
$(window).on(`resize`,setMark);
function setMark() {
	const per_=$(`body`).height()/($(`body`).height()-$(window).height())*100;
	var percent=($(window).scrollTop()/$(`html`).height()*per_).toFixed(1);
	var taker=String(percent).split(``);
	if (taker.length>5) {
		percent=taker.splice(0,5).join(``);
	}
	$(`.showScroll p`).text(percent+`%`);
	$(`.showScroll`).css({top:(percent>=93) ? 93*$(window).height()/100 : percent*$(window).height()/100})
}
//slider
var img=$(`[alt="imgSlide"]`)
var mass=$(`.body2__slide`) , count=0 , timer=true;
mass.each(function (ind) {
	if (ind!=0) $(this).remove()
})
$(`.body2__control`).children().on(`click`,function () {
	if (!timer) return;
	timer=false;
	var obj={} , left;
	setTimeout(()=>{timer=true},700);
	if ($(this).attr(`type`)==`left`) {
		count--;
		if (count<0) count=mass.length-1;
		obj.left=`100%`;
		left=`-100%`
	}
	else {
		count++;
		if (count>=mass.length) count=0
		obj.left=`-100%`;
		left=`100%`
	}
	$(`.body2__slide`).animate(obj,350);
	$(`[alt="imgSlide"]`).removeClass(`response`);
	setTimeout(()=>{
		$(img[count]).addClass(`response`)
		$(`.body2__slider-content`).empty();
		$(`.body2__slider-content`).append($(mass[count]).css({left:left}).animate({left:0},350))
	},350);
})
//slider
