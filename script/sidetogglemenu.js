/*
* Responsive Side Toggle Menu (c) Dynamic Drive (www.dynamicdrive.com)
* Last updated: June 2nd, 2013
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
* Requires: jQuery 1.7 or higher
*
* modified by Yuyin Shao, 2014-1-24
*/

(function(w, $){

	var defaults = {
		position: 'right',
		pushcontent: true,
		source: 'inline',
		revealamt: 0,
		marginoffset: 0,
		dismissonclick: true,
		curstate: 'open'
	}

	var menusarray = []

	w.sidetogglemenu = function(options){
		var s = $.extend({}, defaults, options)

		var thismenu = this,
				$body = $('body'),
				$menu = '',
				expandlength = ''
		menusarray.push( [this, s] )

		function init(menuref){
			$menu = $(menuref).css({top: 0, visibility: 'hidden', zIndex: 1000}).prependTo(document.body)
			$menu.on('click', function(e){
				if (e.target.tagName != 'A')
					e.stopPropagation();
			})
			var delta = parseInt($menu.outerWidth()) - s.revealamt;
			$menu.css((s.position == 'left')? 'left' : 'right', 0);
			$menu.css({visibility: 'visible'});
			
			if (s.pushcontent){
				var animprop = (s.position == 'left')? 'margin-left' : 'margin-right';
				$body.css(animprop, (s.curstate == 'open')? delta + s.marginoffset : 0)
			}

			return delta;
		}

		this.getmenu = function(){
			return $menu
		}

		this.toggle = function(action, w){
			var delta = w || expandlength;
			s.curstate = action || ( (s.curstate == 'closed')? 'open' : 'closed' );
			if ($menu.css('position') != 'static'){
				var animprop = (s.position == 'left')? 'margin-left' : 'margin-right';
				$menu.css(animprop, (s.curstate == 'open')? 0 : -delta)
				if (s.pushcontent){
					$body.css(animprop, (s.curstate == 'open')? delta + s.marginoffset : 0)
				}
			}
		}

		//if (s.pushcontent === true){
			//$body.css({position: 'absolute'})
		//}

		if (s.source == 'inline'){
			expandlength = init.call(this, 'div#' + s.id)
		}
		else{
			$.ajax({
				url: s.source,
				dataType: 'html',
				error:function(ajaxrequest){
					alert('Error fetching content.<br />Server Response: '+ajaxrequest.responseText)
				},
				success:function(content){
					expandlength = init.call(thismenu, content)
				}
			})
		}

		return this;

	}

}) (window, jQuery)