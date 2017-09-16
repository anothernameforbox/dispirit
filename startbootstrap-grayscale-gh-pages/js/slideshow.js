/**********
SLIDESHOW FOR MERCH
***********/
$(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });
sjs = $('#slides').data('plugin_slidesjs');
// power up next button
	$('.sjs .next').click( function(clickevent){ sjs.next() } );
  // power up number input
	$('.sjs .goto').hide( function(clickevent){ sjs.goto( parseInt(this.value) ) } );
