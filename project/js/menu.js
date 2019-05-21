/*
 * ================= HORIZONTAL MENU =================
 */
//Make timeout before menu dropdown
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

function menu(menu_name)
{
  //initilize
  $(menu_name + ' > li').append('<span></span>');
  $(menu_name + ' > li:last span').remove();
  
  have_sub = $(menu_name + ' ul li').find('ul');
  if (have_sub)
    have_sub.parent().children('a').addClass('have_sub');

  //Have timeout
  $(menu_name + " > li:not(:first-child)").hoverIntent({
    timeout: 100,
    over: function() {
      $(this).children('a').addClass('current');
      $(this).children('ul').show('slow');
    },
    out: function() {
      $(this).children('a').removeClass('current');
      $(this).children('ul').fadeOut('fast');
    }
  });

  // > level 2
  $(menu_name + ' li li').hoverIntent({
    timeout: 100,
    over: function() {
      $(this).children('ul').show('slow');
    },

    out: function() {
      $(this).children('ul').fadeOut('fast');
    }
  });
}
/*
 * ================= END OF MENU =================
 */