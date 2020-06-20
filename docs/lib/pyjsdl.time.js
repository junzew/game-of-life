/* start module: pyjsdl.time */
$pyjs['loaded_modules']['pyjsdl.time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.time']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.time'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.time'];
	$m['__repr__'] = function() { return '<module: pyjsdl.time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.time';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['time'] = $pyjs['loaded_modules']['pyjsdl.time'];


	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Clock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_time'] = self['time']();
			self['_time_init'] = $p['getattr'](self, '_time');
			self['_time_diff'] = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range'](10);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				$collcomp1['append'](33);
			}

	return $collcomp1;}();
			self['_pos'] = 0;
			self['_framerate'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_time_diff')['__getitem__']($p['getattr'](self, '_pos'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_time'] = $method;
		$method = $pyjs__bind_method2('tick', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
			var $sub3,$div2,$sub2,$sub1,$div1,$sub4;
			if ($p['bool']($p['getattr'](self, '_pos'))) {
				self['_pos'] = $p['__op_sub']($sub1=$p['getattr'](self, '_pos'),$sub2=1);
			}
			else {
				self['_pos'] = 9;
				if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_framerate'), framerate))) {
					if ($p['bool'](framerate)) {
						self['_framerate'] = framerate;
						$p['getattr']($m['env'], 'canvas')['_framerate'] = (typeof ($div1=1000)==typeof ($div2=framerate) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
					}
					else {
						$p['getattr']($m['env'], 'canvas')['_framerate'] = 0;
					}
				}
			}
			self['_time'] = self['time']();
			$p['getattr'](self, '_time_diff')['__setitem__']($p['getattr'](self, '_pos'), $p['__op_sub']($sub3=$p['getattr'](self, '_time'),$sub4=$p['getattr'](self, '_time_init')));
			self['_time_init'] = $p['getattr'](self, '_time');
			return $p['getattr'](self, '_time_diff')['__getitem__']($p['getattr'](self, '_pos'));
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['tick'] = $method;
		$method = $pyjs__bind_method2('tick_busy_loop', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];

			return self['tick'](framerate);
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['tick_busy_loop'] = $method;
		$method = $pyjs__bind_method2('get_fps', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div3,$div6,$div4,$div5;
			return (typeof ($div5=1000)==typeof ($div6=(typeof ($div3=$p['sum']($p['getattr'](self, '_time_diff')))==typeof ($div4=10) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_fps'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ctime;
			ctime = new Date();
			return ctime['getTime']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Clock', $p['tuple']($bases), $data);
	})();
	$m['Time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda1;
			self['_time_init'] = self['time']();
			var 			$lambda1 = function() {

				return self['wait']();
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null];
			self['run'] = $lambda1;
			self['framerate'] = null;
			self['Clock'] = $m['Clock'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_ticks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub6,$sub5;
			return $p['__op_sub']($sub5=self['time'](),$sub6=$p['getattr'](self, '_time_init'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_ticks'] = $method;
		$method = $pyjs__bind_method2('delay', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $sub10,start,$sub9,$sub8,$sub7;
			start = self['time']();
			while ($p['bool'](($p['cmp']($p['__op_sub']($sub7=self['time'](),$sub8=start), time) == -1))) {
			}
			return $p['__op_sub']($sub9=self['time'](),$sub10=start);
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['delay'] = $method;
		$method = $pyjs__bind_method2('wait', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
			var $mul2,$mul1;
			if ($p['bool'](time)) {
				if ($p['bool'](($p['getattr'](self, 'framerate') === null))) {
					self['framerate'] = $p['getattr']($p['getattr']($m['env'], 'canvas'), '_framerate');
					$p['getattr']($m['env'], 'canvas')['_framerate'] = (typeof ($mul1=time)==typeof ($mul2=10) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
					self['timeout'](time, self);
				}
			}
			else {
				if ($p['bool'](($p['getattr'](self, 'framerate') !== null))) {
					$p['getattr']($m['env'], 'canvas')['_framerate'] = $p['getattr'](self, 'framerate');
					self['framerate'] = null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['time', 0]]);
		$cls_definition['wait'] = $method;
		$method = $pyjs__bind_method2('set_timer', function(eventid, time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventid = arguments[1];
				time = arguments[2];
			}

			if ($p['bool'](!$p['getattr']((typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer), 'timers')['__contains__'](eventid))) {
				$p['getattr']((typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer), 'timers')['__setitem__'](eventid, (typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer)(eventid));
			}
			$p['getattr']((typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer), 'timers')['__getitem__'](eventid)['set_timer'](time);
			return null;
		}
	, 1, [null,null,['self'],['eventid'],['time']]);
		$cls_definition['set_timer'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ctime;
			ctime = new Date();
			return ctime['getTime']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		$method = $pyjs__bind_method2('timeout', function(time, obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
				obj = arguments[2];
			}
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
			if (typeof obj == 'undefined') obj=arguments['callee']['__args__'][4][1];
			var run,$lambda2;
			var 			$lambda2 = function() {

				return obj['run']();
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null];
			run = $lambda2;
$wnd['setTimeout'](function() {run();}, time);
		}
	, 1, [null,null,['self'],['time', null],['obj', null]]);
		$cls_definition['timeout'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Time', $p['tuple']($bases), $data);
	})();
	$m['_EventTimer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$cls_definition['timers'] = $p['dict']([]);
		$method = $pyjs__bind_method2('__init__', function(eventid) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventid = arguments[1];
			}

			self['event'] = $m['pyjsdl']['event']['Event'](eventid);
			self['timer'] = null;
			self['time'] = 0;
			self['repeat'] = true;
			return null;
		}
	, 1, [null,null,['self'],['eventid']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_timer', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, 'timer'))) {
				self['repeat'] = false;
				self['clearTimeout']();
			}
			if ($p['bool'](time)) {
				self['time'] = time;
				self['repeat'] = true;
				self['setTimeout']();
			}
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['set_timer'] = $method;
		$method = $pyjs__bind_method2('setTimeout', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var timer;
			timer = $wnd['setTimeout'](function() {self['run']();}, self['time']);;
			self['timer'] = timer;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setTimeout'] = $method;
		$method = $pyjs__bind_method2('clearTimeout', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

$wnd['clearTimeout'](self['timer']);
			self['timer'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearTimeout'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['pyjsdl']['event']['post']($p['getattr'](self, 'event'));
			if ($p['bool']($p['getattr'](self, 'repeat'))) {
				self['setTimeout']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_EventTimer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.time */


/* end module: pyjsdl.time */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'pyjsdl.env']
*/
