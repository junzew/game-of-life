/* start module: pyjsdl.display */
$pyjs['loaded_modules']['pyjsdl.display'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.display']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.display'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.display'];
	$m['__repr__'] = function() { return '<module: pyjsdl.display>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.display';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['display'] = $pyjs['loaded_modules']['pyjsdl.display'];


	$m['base64'] = $p['___import___']('base64', 'pyjsdl');
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
	$m['Window'] = $p['___import___']('pyjsdl.pyjsobj.Window', 'pyjsdl', null, false);
	$m['RootPanel'] = $p['___import___']('pyjsdl.pyjsobj.RootPanel', 'pyjsdl', null, false);
	$m['FocusPanel'] = $p['___import___']('pyjsdl.pyjsobj.FocusPanel', 'pyjsdl', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl', null, false);
	$m['loadImages'] = $p['___import___']('pyjsdl.pyjsobj.loadImages', 'pyjsdl', null, false);
	$m['TextBox'] = $p['___import___']('pyjsdl.pyjsobj.TextBox', 'pyjsdl', null, false);
	$m['TextArea'] = $p['___import___']('pyjsdl.pyjsobj.TextArea', 'pyjsdl', null, false);
	$m['MouseWheelHandler'] = $p['___import___']('pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl', null, false);
	$m['eventGetMouseWheelVelocityY'] = $p['___import___']('pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('pyjsdl.pyjsobj.Event', 'pyjsdl', null, false);
	$m['requestAnimationFrameInit'] = $p['___import___']('pyjsdl.pyjsobj.requestAnimationFrameInit', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['_canvas'] = null;
	$m['_ctx'] = null;
	$m['_img'] = null;
	$m['_wnd'] = null;
	$m['Canvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, buffered) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				buffered = arguments[2];
			}
			var $pyjs_try_err;
			$m['Surface']['__init__'](self, size);
			$m['MouseWheelHandler']['__init__'](self, true);
			if ($p['bool']($p['isinstance'](buffered, $p['bool']))) {
				self['_bufferedimage'] = buffered;
			}
			else {
				self['_bufferedimage'] = true;
			}
			try {
				if ($p['bool']($p['getattr']($p['getattr'](self, 'impl'), 'canvasContext'))) {
					self['_isCanvas'] = true;
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					self['_isCanvas'] = false;
					self['_bufferedimage'] = false;
				}
			}
			if ($p['bool']($p['getattr'](self, '_bufferedimage'))) {
				self['surface'] = $m['Surface'](size);
			}
			else {
				self['surface'] = self;
			}
			self['images'] = $p['dict']([]);
			self['image_list'] = $p['list']([]);
			self['callback'] = null;
			self['time'] = $m['Time']();
			self['event'] = $p['getattr']($m['pyjsdl'], 'event');
			self['addMouseListener'](self);
			self['addMouseWheelListener'](self);
			self['addKeyboardListener'](self);
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONMOUSEDOWN'))|($p['getattr']($m['Event'], 'ONMOUSEUP'))|($p['getattr']($m['Event'], 'ONMOUSEMOVE'))|($p['getattr']($m['Event'], 'ONMOUSEOUT'))|($p['getattr']($m['Event'], 'ONMOUSEWHEEL'))|($p['getattr']($m['Event'], 'ONKEYDOWN'))|($p['getattr']($m['Event'], 'ONKEYPRESS'))|($p['getattr']($m['Event'], 'ONKEYUP')));
			self['modKey'] = $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'modKey');
			self['specialKey'] = $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'specialKey');
			self['event']['_initiate_touch_listener'](self);
			self['_touch_callback'] = $p['getattr']($p['getattr']($p['getattr'](self, 'event'), 'touchlistener'), 'callback');
			self['_repaint'] = false;
			self['_rect_list'] = $p['list']([]);
			self['_rect_len'] = 0;
			self['_rect_num'] = 0;
			self['_framerate'] = 0;
			self['_frametime'] = 0;
			self['_canvas_init']();
			self['initialized'] = false;
			return null;
		}
	, 1, [null,null,['self'],['size'],['buffered']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_canvas_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['_canvas'] = self;
			$m['_ctx'] = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
			$m['_img'] = $p['getattr']($p['getattr'](self, 'surface'), 'canvas');
			$m['_wnd'] = $m['requestAnimationFrameInit']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_canvas_init'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var event;
			event = $m['DOM']['eventGetCurrentEvent']();
			event['pos'] = $p['tuple']([x, y]);
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
			$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign1[0]);
			$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign1[1]);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var event;
			event = $m['DOM']['eventGetCurrentEvent']();
			event['pos'] = $p['tuple']([x, y]);
			$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), true);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var event;
			event = $m['DOM']['eventGetCurrentEvent']();
			event['pos'] = $p['tuple']([x, y]);
			$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), false);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,keycode;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
			$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__'](0, $tupleassign2[0]);
			$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__'](1, $tupleassign2[1]);
			$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__'](2, $tupleassign2[2]);
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]), 2, null);
			$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign3[0]);
			$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign3[1]);
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
			$p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('x', $tupleassign4[0]);
			$p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('y', $tupleassign4[1]);
			$iter1_iter = $p['getattr'](self, 'modKey');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				keycode = $iter1_nextval['$nextval'];
				if ($p['bool']($p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__getitem__'](keycode))) {
					$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var event;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousewheel'))) {
				if ($p['bool']($p['hasattr'](event, 'wheelDeltaX'))) {
					self['onMouseWheel'] = $p['getattr'](self, '_onMouseWheel');
					self['_onMouseWheel'](sender, velocity);
				}
				else {
					self['onMouseWheel'] = $p['getattr'](self, '_onMouseWheelY');
					$m['DOM']['eventGetMouseWheelVelocityY'] = $m['eventGetMouseWheelVelocityY'];
					self['_onMouseWheelY'](sender, $m['eventGetMouseWheelVelocityY'](event));
				}
			}
			else {
				self['onMouseWheel'] = $p['getattr'](self, '_onMouseScroll');
				self['_onMouseScroll'](sender, velocity);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['onMouseWheel'] = $method;
		$method = $pyjs__bind_method2('_onMouseWheel', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,evt,button,$iter2_idx,event,$div8,events,$iter2_array,$div3,$div2,$div7,$div1,$div6,$div4,$div5;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ($p['bool'](!$p['bool']($p['getattr'](event, 'wheelDeltaX')))) {
				if ($p['bool'](($p['cmp'](velocity, 0) == -1))) {
					button = 4;
					events = (typeof ($div1=velocity)==typeof ($div2=(typeof ($usub3=3)=='number'?
						-$usub3:
						$p['op_usub']($usub3))) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
				}
				else {
					button = 5;
					events = (typeof ($div3=velocity)==typeof ($div4=3) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4));
				}
			}
			else {
				if ($p['bool'](($p['cmp'](velocity, 0) == -1))) {
					button = 6;
					events = (typeof ($div5=velocity)==typeof ($div6=(typeof ($usub4=3)=='number'?
						-$usub4:
						$p['op_usub']($usub4))) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6));
				}
				else {
					button = 7;
					events = (typeof ($div7=velocity)==typeof ($div8=3) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8));
				}
			}
			event['btn'] = button;
			event['pos'] = $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
			$iter2_iter = $p['range'](events);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				evt = $iter2_nextval['$nextval'];
				self['event']['_updateQueue'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['_onMouseWheel'] = $method;
		$method = $pyjs__bind_method2('_onMouseWheelY', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $iter3_idx,events,button,$iter3_array,$div10,$div11,$div12,event,$div9,$iter3_iter,$iter3_type,$iter3_nextval,evt;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ($p['bool'](($p['cmp'](velocity, 0) == -1))) {
				button = 4;
				events = (typeof ($div9=velocity)==typeof ($div10=(typeof ($usub5=3)=='number'?
					-$usub5:
					$p['op_usub']($usub5))) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
			}
			else {
				button = 5;
				events = (typeof ($div11=velocity)==typeof ($div12=3) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12));
			}
			event['btn'] = button;
			event['pos'] = $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
			$iter3_iter = $p['range'](events);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				evt = $iter3_nextval['$nextval'];
				self['event']['_updateQueue'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['_onMouseWheelY'] = $method;
		$method = $pyjs__bind_method2('_onMouseScroll', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $or1,$or2,button,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ($p['bool'](($p['bool']($or1=($p['cmp'](velocity, 1) == 1))?$or1:($p['cmp'](velocity, (typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6))) == -1)))) {
				if ($p['bool'](($p['cmp'](velocity, 0) == -1))) {
					button = 4;
				}
				else {
					button = 5;
				}
			}
			else {
				if ($p['bool'](($p['cmp'](velocity, 0) == -1))) {
					button = 6;
				}
				else {
					button = 7;
				}
			}
			event['btn'] = button;
			event['pos'] = $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['_onMouseScroll'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var event;
			if ($p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode))) {
				event = $m['DOM']['eventGetCurrentEvent']();
				$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, true);
				self['event']['_updateQueue'](event);
				$m['DOM']['eventPreventDefault'](event);
			}
			else if ($p['bool']($p['getattr'](self, 'specialKey')['__contains__'](keycode))) {
				event = $m['DOM']['eventGetCurrentEvent']();
				self['event']['_updateQueue'](event);
				$m['DOM']['eventPreventDefault'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $and1,$and2,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ($p['bool'](!$p['bool'](($p['bool']($and1=$p['getattr'](event, 'keyCode'))?$p['getattr'](self, 'specialKey')['__contains__']($p['getattr'](event, 'keyCode')):$and1)))) {
				self['event']['_updateQueue'](event);
			}
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var event;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ($p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode))) {
				$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
			}
			self['event']['_updateQueue'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onTouchInitiate', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter4_nextval,$iter4_idx,callback,$iter4_type,$iter4_array,$iter4_iter;
			self['event']['touchlistener']['activate']();
			$iter4_iter = $p['getattr'](self, '_touch_callback');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				callback = $iter4_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](callback, 'onTouchInitiate'))) {
					callback['onTouchInitiate'](event);
				}
			}
			self['onTouchStart'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchInitiate'] = $method;
		$method = $pyjs__bind_method2('onTouchStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter5_nextval,$iter5_array,callback,$iter5_iter,$iter5_idx,$iter5_type;
			$iter5_iter = $p['getattr'](self, '_touch_callback');
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				callback = $iter5_nextval['$nextval'];
				callback['onTouchStart'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchStart'] = $method;
		$method = $pyjs__bind_method2('onTouchEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter6_idx,$iter6_type,callback,$iter6_array,$iter6_iter,$iter6_nextval;
			$iter6_iter = $p['getattr'](self, '_touch_callback');
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				callback = $iter6_nextval['$nextval'];
				callback['onTouchEnd'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchEnd'] = $method;
		$method = $pyjs__bind_method2('onTouchMove', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter7_nextval,$iter7_iter,$iter7_array,callback,$iter7_idx,$iter7_type;
			$iter7_iter = $p['getattr'](self, '_touch_callback');
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				callback = $iter7_nextval['$nextval'];
				callback['onTouchMove'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchMove'] = $method;
		$method = $pyjs__bind_method2('onTouchCancel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter8_idx,$iter8_array,$iter8_iter,callback,$iter8_nextval,$iter8_type;
			$iter8_iter = $p['getattr'](self, '_touch_callback');
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				callback = $iter8_nextval['$nextval'];
				callback['onTouchCancel'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchCancel'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			$m['Surface']['resize'](self, width, height);
			if ($p['bool']($p['getattr'](self, '_bufferedimage'))) {
				self['surface']['resize'](width, height);
			}
			$p['getattr']($p['getattr'](self, 'surface'), '_display')['_surface_rect'] = self['surface']['get_rect']();
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('set_callback', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['hasattr'](cb, 'run')))) {
				self['callback'] = (typeof Callback == "undefined"?$m['Callback']:Callback)(cb);
			}
			else {
				self['callback'] = cb;
			}
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['set_callback'] = $method;
		$method = $pyjs__bind_method2('load_images', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var name,$iter9_iter,image_list,$iter9_nextval,$iter9_idx,$iter9_array,ext,image,data,$iter9_type;
			if ($p['bool'](images)) {
				image_list = $p['list']([]);
				$iter9_iter = images;
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					image = $iter9_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](image, $p['str']))) {
						image_list['append'](image);
						self['image_list']['append'](image);
					}
					else {
						name = image['__getitem__'](0);
						if ($p['bool']($p['isinstance'](image['__getitem__'](1), $p['str']))) {
							data = image['__getitem__'](1);
						}
						else {
							data = $m['base64']['b64encode'](image['__getitem__'](1)['getvalue']());
						}
						if ($p['bool'](!$p['bool'](data['startswith']('data:')))) {
							ext = name['strip']()['$$split']('.')['__getitem__']((typeof ($usub7=1)=='number'?
								-$usub7:
								$p['op_usub']($usub7)));
							data = $p['sprintf']('data:%s;base64,%s', $p['tuple']([ext, data]));
						}
						image_list['append'](data);
						self['image_list']['append'](name);
					}
				}
				$m['loadImages'](image_list, self);
			}
			else {
				self['start']();
			}
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['load_images'] = $method;
		$method = $pyjs__bind_method2('onImagesLoaded', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var $iter10_nextval,i,$iter10_array,$iter10_type,image,$iter10_iter,$iter10_idx;
			$iter10_iter = $p['enumerate']($p['getattr'](self, 'image_list'));
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				var $tupleassign5 = $p['__ass_unpack']($iter10_nextval['$nextval'], 2, null);
				i = $tupleassign5[0];
				image = $tupleassign5[1];
				$p['getattr'](self, 'images')['__setitem__'](image, images['__getitem__'](i)['getElement']());
			}
			self['start']();
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['onImagesLoaded'] = $method;
		$method = $pyjs__bind_method2('start', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'initialized')))) {
				self['initialized'] = true;
				$m['_wnd']['requestAnimationFrame']((typeof run == "undefined"?$m['run']:run));
				self['time']['timeout'](0, self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda2,$lambda1;
			var 			$lambda1 = function(ts) {

				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['ts']];
			$m['run'] = $lambda1;
			var 			$lambda2 = function() {

				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null];
			self['run'] = $lambda2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('_get_rect', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			if ($p['bool'](($p['cmp']($p['getattr'](self, '_rect_num'), $p['getattr'](self, '_rect_len')) == -1))) {
				return $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
			}
			else {
				self['_rect_list']['append']($m['Rect'](0, 0, 0, 0));
				self['_rect_len'] = $p['__op_add']($add1=$p['getattr'](self, '_rect_len'),$add2=1);
				return $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_rect'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, '_repaint')))) {
				self['callback']['run']();
				self['_repaint'] = true;
			}
			self['time']['timeout'](0, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		var $bases = new Array($m['Surface'],$m['MouseWheelHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
	})();
	$m['run'] = function(timestamp) {
		var $sub5,$sub3,$sub2,$sub1,$sub6,rect,$sub4;
		$m['_wnd']['requestAnimationFrame']($m['run']);
		if ($p['bool']($p['getattr']($m['_canvas'], '_repaint'))) {
			if ($p['bool'](((($p['cmp']($p['__op_sub']($sub1=timestamp,$sub2=$p['getattr']($m['_canvas'], '_frametime')), $p['getattr']($m['_canvas'], '_framerate')))|1) == 1))) {
				$m['_canvas']['_frametime'] = timestamp;
				while ($p['bool']($p['getattr']($m['_canvas'], '_rect_num'))) {
					rect = $p['getattr']($m['_canvas'], '_rect_list')['__getitem__']($p['__op_sub']($sub3=$p['getattr']($m['_canvas'], '_rect_num'),$sub4=1));
					$m['_ctx']['drawImage']($m['_img'], $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'));
					$m['_canvas']['_rect_num'] = $p['__op_sub']($sub5=$p['getattr']($m['_canvas'], '_rect_num'),$sub6=1);
				}
				$m['_canvas']['_repaint'] = false;
			}
		}
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null,['timestamp']];
	$m['Callback'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$cls_definition['__slots__'] = $p['list'](['run']);
		$method = $pyjs__bind_method2('__init__', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}

			self['run'] = cb;
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Callback', $p['tuple']($bases), $data);
	})();
	$m['Display'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_initialized'] = false;
			self['init']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, '_initialized')))) {
				self['id'] = '';
				self['icon'] = null;
				self['_image_list'] = $p['list']([]);
				self['_nonimplemented_methods']();
				self['_initialized'] = true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init'] = $method;
		$method = $pyjs__bind_method2('set_mode', function(size, buffered) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				size = arguments[1];
				buffered = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof buffered != 'undefined') {
					if (buffered !== null && typeof buffered['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = buffered;
						buffered = arguments[3];
					}
				} else 				if (typeof size != 'undefined') {
					if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = size;
						size = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof buffered == 'undefined') buffered=arguments['callee']['__args__'][4][1];
			var $lambda4,$lambda3,panel;
			self['canvas'] = $m['Canvas'](size, buffered);
			$m['env']['canvas'] = $p['getattr'](self, 'canvas');
			self['frame'] = $m['Window']['getDocumentRoot']();
			$m['env']['frame'] = $p['getattr'](self, 'frame');
			panel = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{'Widget':$p['getattr'](self, 'canvas')}]);
			$m['RootPanel']()['add'](panel);
			self['panel'] = panel;
			self['vpanel'] = null;
			self['textbox'] = null;
			self['textarea'] = null;
			self['Textbox'] = (typeof Textbox == "undefined"?$m['Textbox']:Textbox);
			self['Textarea'] = (typeof Textarea == "undefined"?$m['Textarea']:Textarea);
			self['surface'] = $p['getattr']($p['getattr'](self, 'canvas'), 'surface');
			$p['getattr'](self, 'surface')['_display'] = self;
			self['_surface_rect'] = self['surface']['get_rect']();
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'canvas'), '_bufferedimage')))) {
				var 				$lambda3 = function() {

					return null;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = [null,null];
				self['flip'] = $lambda3;
				var 				$lambda4 = function() {
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					return null;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['update'] = $lambda4;
			}
			return $p['getattr'](self, 'surface');
		}
	, 1, ['args',['kwargs'],['self'],['size'],['buffered', true]]);
		$cls_definition['set_mode'] = $method;
		$method = $pyjs__bind_method2('setup', function(callback, images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
				images = arguments[2];
			}
			if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];
			var image_list;
			self['canvas']['set_callback'](callback);
			image_list = $p['list']([]);
			if ($p['bool']($p['getattr'](self, '_image_list'))) {
				image_list['extend']($p['getattr'](self, '_image_list'));
				$p['__setslice']($p['getattr'](self, '_image_list'), 0, null, $p['list']([]));
			}
			if ($p['bool'](images)) {
				image_list['extend'](images);
			}
			self['canvas']['load_images'](image_list);
			return null;
		}
	, 1, [null,null,['self'],['callback'],['images', null]]);
		$cls_definition['setup'] = $method;
		$method = $pyjs__bind_method2('set_callback', function(callback) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
			}

			if ($p['bool']($p['getattr']($p['getattr'](self, 'canvas'), 'initialized'))) {
				self['canvas']['set_callback'](callback);
			}
			else {
				self['setup'](callback);
			}
			return null;
		}
	, 1, [null,null,['self'],['callback']]);
		$cls_definition['set_callback'] = $method;
		$method = $pyjs__bind_method2('setup_images', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}

			if ($p['bool']($p['isinstance'](images, $p['str']))) {
				images = $p['list']([images]);
			}
			self['_image_list']['extend'](images);
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['setup_images'] = $method;
		$method = $pyjs__bind_method2('textbox_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'textbox')))) {
				self['textbox'] = (typeof Textbox == "undefined"?$m['Textbox']:Textbox)();
				self['textarea'] = (typeof Textarea == "undefined"?$m['Textarea']:Textarea)();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['textbox_init'] = $method;
		$method = $pyjs__bind_method2('is_canvas', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvas'), '_isCanvas');
		}
	, 1, [null,null,['self']]);
		$cls_definition['is_canvas'] = $method;
		$method = $pyjs__bind_method2('get_surface', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'surface');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_surface'] = $method;
		$method = $pyjs__bind_method2('get_canvas', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'canvas');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_canvas'] = $method;
		$method = $pyjs__bind_method2('get_panel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'panel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_panel'] = $method;
		$method = $pyjs__bind_method2('get_vpanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'vpanel')))) {
				self['vpanel'] = $m['VerticalPanel']();
				$m['RootPanel']()['add']($p['getattr'](self, 'vpanel'));
			}
			return $p['getattr'](self, 'vpanel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_vpanel'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['canvas']['getAbsoluteLeft']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['canvas']['getAbsoluteTop']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('getScrollLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'frame'), 'scrollLeft');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollLeft'] = $method;
		$method = $pyjs__bind_method2('getScrollTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'frame'), 'scrollTop');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollTop'] = $method;
		$method = $pyjs__bind_method2('quit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_initialized'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['quit'] = $method;
		$method = $pyjs__bind_method2('get_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_initialized');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_init'] = $method;
		$method = $pyjs__bind_method2('get_active', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['hasattr'](self, 'canvas'))) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_active'] = $method;
		$method = $pyjs__bind_method2('set_caption', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $pyjs_try_err;
			self['id'] = text;
			try {
				self['canvas']['setID']($p['getattr'](self, 'id'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['set_caption'] = $method;
		$method = $pyjs__bind_method2('get_caption', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				return self['canvas']['getID']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					return $p['getattr'](self, 'id');
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_caption'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda5;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['set_icon'] = $lambda5;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		$method = $pyjs__bind_method2('flip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvas']['impl']['canvasContext']['drawImage']($p['getattr']($p['getattr'](self, 'surface'), 'canvas'), 0, 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flip'] = $method;
		$method = $pyjs__bind_method2('update', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			if (typeof rect_list == 'undefined') rect_list=arguments['callee']['__args__'][3][1];

			if ($p['bool']($p['hasattr'](rect_list, 'append'))) {
				(typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), rect_list);
			}
			else if ($p['bool'](rect_list)) {
				(typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), $p['list']([rect_list]));
			}
			else {
				self['flip']();
			}
			return null;
		}
	, 1, [null,null,['self'],['rect_list', null]]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Display', $p['tuple']($bases), $data);
	})();
	$m['_update'] = function(canvas, rect_list) {
		var $and3,repaint_rect,$iter11_iter,$iter11_type,$and4,$and5,$and6,$add3,$add5,$add6,$add4,$iter11_array,$iter11_nextval,$iter11_idx,rect;
		$iter11_iter = rect_list;
		$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
		while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
			rect = $iter11_nextval['$nextval'];
			if ($p['bool']($p['hasattr'](rect, 'width'))) {
				if ($p['bool'](($p['bool']($and3=($p['cmp']($p['getattr'](rect, 'width'), 0) == 1))?($p['cmp']($p['getattr'](rect, 'height'), 0) == 1):$and3))) {
					repaint_rect = canvas['_get_rect']();
					repaint_rect['x'] = $p['getattr'](rect, 'x');
					repaint_rect['y'] = $p['getattr'](rect, 'y');
					repaint_rect['width'] = $p['getattr'](rect, 'width');
					repaint_rect['height'] = $p['getattr'](rect, 'height');
					canvas['_rect_num'] = $p['__op_add']($add3=$p['getattr'](canvas, '_rect_num'),$add4=1);
				}
			}
			else if ($p['bool'](rect)) {
				if ($p['bool'](($p['bool']($and5=($p['cmp'](rect['__getitem__'](2), 0) == 1))?($p['cmp'](rect['__getitem__'](3), 0) == 1):$and5))) {
					repaint_rect = canvas['_get_rect']();
					repaint_rect['x'] = rect['__getitem__'](0);
					repaint_rect['y'] = rect['__getitem__'](1);
					repaint_rect['width'] = rect['__getitem__'](2);
					repaint_rect['height'] = rect['__getitem__'](3);
					canvas['_rect_num'] = $p['__op_add']($add5=$p['getattr'](canvas, '_rect_num'),$add6=1);
				}
			}
		}
		return null;
	};
	$m['_update']['__name__'] = '_update';

	$m['_update']['__bind_type__'] = 0;
	$m['_update']['__args__'] = [null,null,['canvas'],['rect_list']];
	$m['Textbox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				panel = arguments[2];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
			var $add9,$pyjs_try_err,$sub8,$add10,$add7,$add8,$sub7;
			$m['TextBox']['__init__'](self);
			if ($p['bool'](!$p['bool'](size))) {
				var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub7=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub8=5), 20]), 2, null);
				self['width'] = $tupleassign6[0];
				self['height'] = $tupleassign6[1];
			}
			else {
				var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$p['float_int'](size['__getitem__'](0)), $p['float_int'](size['__getitem__'](1))]), 2, null);
				self['width'] = $tupleassign7[0];
				self['height'] = $tupleassign7[1];
			}
			self['setSize']($p['__op_add']($add7=$p['str']($p['getattr'](self, 'width')),$add8='px'), $p['__op_add']($add9=$p['str']($p['getattr'](self, 'height')),$add10='px'));
			self['setVisible'](false);
			if ($p['bool'](panel)) {
				panel['add'](self);
			}
			else {
				try {
					$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['vpanel'] = $m['VerticalPanel']();
						$m['RootPanel']()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
			var $or4,$or3,$sub10,$add14,$sub9,$add11,$add12,$add13;
			if ($p['bool'](!$p['bool'](($p['bool']($or3=width)?$or3:height)))) {
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub9=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub10=5), 20]), 2, null);
				self['width'] = $tupleassign8[0];
				self['height'] = $tupleassign8[1];
			}
			else {
				if ($p['bool'](width)) {
					self['width'] = $p['float_int'](width);
				}
				if ($p['bool'](height)) {
					self['height'] = $p['float_int'](height);
				}
			}
			self['setSize']($p['__op_add']($add11=$p['str']($p['getattr'](self, 'width')),$add12='px'), $p['__op_add']($add13=$p['str']($p['getattr'](self, 'height')),$add14='px'));
			return null;
		}
	, 1, [null,null,['self'],['width', null],['height', null]]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('toggle', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

			if ($p['bool'](visible)) {
				self['setVisible'](visible);
			}
			else {
				self['setVisible'](!$p['bool'](self['getVisible']()));
			}
			return null;
		}
	, 1, [null,null,['self'],['visible', null]]);
		$cls_definition['toggle'] = $method;
		var $bases = new Array($m['TextBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Textbox', $p['tuple']($bases), $data);
	})();
	$m['Textarea'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				panel = arguments[2];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
			var $add15,$div14,$sub12,$pyjs_try_err,$sub14,$div13,$sub13,$add16,$add17,$add18,$sub11;
			$m['TextArea']['__init__'](self);
			if ($p['bool'](!$p['bool'](size))) {
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub11=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub12=5), $p['__op_sub']($sub13=$p['float_int']((typeof ($div13=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div14=5) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))),$sub14=5)]), 2, null);
				self['width'] = $tupleassign9[0];
				self['height'] = $tupleassign9[1];
			}
			else {
				var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$p['float_int'](size['__getitem__'](0)), $p['float_int'](size['__getitem__'](1))]), 2, null);
				self['width'] = $tupleassign10[0];
				self['height'] = $tupleassign10[1];
			}
			self['setSize']($p['__op_add']($add15=$p['str']($p['getattr'](self, 'width')),$add16='px'), $p['__op_add']($add17=$p['str']($p['getattr'](self, 'height')),$add18='px'));
			self['setStyleAttribute']($p['dict']([['resize', 'vertical']]));
			self['setVisible'](false);
			if ($p['bool'](panel)) {
				panel['add'](self);
			}
			else {
				try {
					$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['vpanel'] = $m['VerticalPanel']();
						$m['RootPanel']()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
			var $or5,$or6,$add21,$div15,$add22,$sub17,$sub16,$sub15,$sub18,$add19,$add20,$div16;
			if ($p['bool'](!$p['bool'](($p['bool']($or5=width)?$or5:height)))) {
				var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub15=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub16=5), $p['__op_sub']($sub17=$p['float_int']((typeof ($div15=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div16=5) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))),$sub18=5)]), 2, null);
				self['width'] = $tupleassign11[0];
				self['height'] = $tupleassign11[1];
			}
			else {
				if ($p['bool'](width)) {
					self['width'] = $p['float_int'](width);
				}
				if ($p['bool'](height)) {
					self['height'] = $p['float_int'](height);
				}
			}
			self['setSize']($p['__op_add']($add19=$p['str']($p['getattr'](self, 'width')),$add20='px'), $p['__op_add']($add21=$p['str']($p['getattr'](self, 'height')),$add22='px'));
			return null;
		}
	, 1, [null,null,['self'],['width', null],['height', null]]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('toggle', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

			if ($p['bool'](visible)) {
				self['setVisible'](visible);
			}
			else {
				self['setVisible'](!$p['bool'](self['getVisible']()));
			}
			return null;
		}
	, 1, [null,null,['self'],['visible', null]]);
		$cls_definition['toggle'] = $method;
		var $bases = new Array($m['TextArea']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Textarea', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.display */


/* end module: pyjsdl.display */


/*
PYJS_DEPS: ['base64', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.env', 'pyjsdl.event', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.pyjsobj.Window', 'pyjsdl.pyjsobj.RootPanel', 'pyjsdl.pyjsobj.FocusPanel', 'pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl.pyjsobj.loadImages', 'pyjsdl.pyjsobj.TextBox', 'pyjsdl.pyjsobj.TextArea', 'pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl.pyjsobj.Event', 'pyjsdl.pyjsobj.requestAnimationFrameInit']
*/
