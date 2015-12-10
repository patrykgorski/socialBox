$(document).ready(function(){
	createBox();
});
/***INIT OBJECT***/
InitSB.prototype = new SetConf;
var e = new InitSB();

/*** SET CONFIG BOX ***/
function SetConf(){
	if(typeof customSocialBox != 'undefined'){
		this.position = customSocialBox.position || "left";
		this.timeOpenAnimation = customSocialBox.timeOpenAnimation || 300;
		this.widthBox = customSocialBox.widthBox || 300;
		this.heightBox = customSocialBox.heightBox || 350; 
		this.positionScroll = customSocialBox.positionScroll || 20;
		this.type = customSocialBox.type || 'hover';
		this.style = customSocialBox.style || 'round';
	}else{
		this.position = "left";
		this.timeOpenAnimation = 300;
		this.widthBox = 300;
		this.heightBox = 350;
		this.positionScroll = 20; 
		this.type = 'hover';
		this.style = 'round';
	}
	this.$container = $('.sb-container');
	this.$navBox = $('.sb-nav');
	this.$sbBox = $('.sb-box');
}

/*** class Init socialBox ***/
function InitSB(){
	this.uber = InitSB.prototype;
}

InitSB.prototype.setCustomClass = function(){
	this.uber.$container.addClass('sb-position-'+this.uber.position+"-"+this.uber.type);
	this.uber.$navBox.addClass('sb-nav-'+this.uber.position);
	this.uber.$navBox.find('ul li').addClass('sb-hover-'+this.uber.position+'-nav');
	this.uber.$navBox.find('ul li').addClass('sb-radius-'+this.uber.style+'-'+this.uber.position+'-nav');

}

InitSB.prototype.setSizeBox = function(){
	//set conatiner
	this.uber.$container.css({
		width:this.uber.widthBox+"px",
		height:this.uber.heightBox+"px"
	});
	//set LI
	this.uber.$sbBox.find('ul').css({width:(this.uber.widthBox*this.uber.$sbBox.find('ul').find('li').length)+1+"px"})
	this.uber.$sbBox.find('ul li').css({
		width:this.uber.widthBox+"px",
		height:this.uber.heightBox+"px"
	});

}
/*** Hide box ***/
InitSB.prototype.hideBox = function(){
	switch (this.uber.position)
	{
		case "left":
		this.uber.$container.css({
			left:"-"+(this.uber.widthBox)+"px",
			top:this.uber.positionScroll+"%"
		})
		break;
		case "right":
		this.uber.$container.css({
			right:"-"+(this.uber.widthBox)+"px",
			top:this.uber.positionScroll+"%"
		})
		break;
		case "top":
		this.uber.$container.css({
			top:"-"+(this.uber.heightBox)+"px",
			left:this.uber.positionScroll+"%"
		})
		break;
		case "bottom":
		this.uber.$container.css({
			bottom:"-"+(this.uber.heightBox)+"px",
			left:this.uber.positionScroll+"%"
		})
		break;
	}
}
/*** Change display ***/
InitSB.prototype.showBox = function(){
	this.uber.$container.css({
		display:'block'
	})
}

/**** SLIDE BUTTON ****/
$('.sb-nav ul li').on('click', function(){
	if(e.type === 'click'){
		if(e.$container.css('left')!=='0px'){
			e.$container.animate({
				left:0	
			}, 200);
		}else{
			e.$container.animate({
				left:"-"+(e.widthBox)+"px"
			}, 200);
		}
	}
})
/**** NAV POSITION SLIDE *****/
function slideNavTop(){
	$('.sb-nav').animate(
		{bottom:'-45px'}, 
		{
    		duration: e.timeOpenAnimation,
    		specialEasing: {
      			right: "linear",
    		}
    	}
    );
}

function slideNavBottom(){
	$('.sb-nav').animate(
		{top:'-45px'}, 
		{
    		duration: e.timeOpenAnimation,
    		specialEasing: {
      			right: "linear",
    		}
    	}
    );
}

function slideNavLeft(){
	$('.sb-nav').animate(
		{right:'-45px'}, 
		{
    		duration: e.timeOpenAnimation,
    		specialEasing: {
      			right: "linear",
    		}
    	}
    );
}

function slideNavRight(){
	$('.sb-nav').animate(
		{left:'-45px'}, 
		{
    		duration: e.timeOpenAnimation,
    		specialEasing: {
      			right: "linear",
    		}
    	}
    );
}
/*** GENERATE BOX ***/
function createBox(){
	e.setCustomClass();
	e.setSizeBox();
	e.hideBox();
	e.showBox();
	switch(e.position)
	{
		case "left":
		slideNavLeft()
		break;

		case "right":
		slideNavRight()
		break;

		case "top":
		slideNavTop()
		break;

		case "bottom":
		slideNavBottom()
		break;
	}
}
/**** SLIDE ****/
$('.sb-nav ul li').on('mouseover', function(){
	var indexLi = $('.sb-nav ul').find('li').index($(this));
	$('.sb-box ul li').hide();
	$('.sb-box ul li').eq(indexLi).css({
		'margin':0
	}).show();
})