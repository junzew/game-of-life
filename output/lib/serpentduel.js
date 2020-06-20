/* start module: serpentduel */
$pyjs['loaded_modules']['serpentduel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['serpentduel']['__was_initialized__']) return $pyjs['loaded_modules']['serpentduel'];
	var $m = $pyjs['loaded_modules']['serpentduel'];
	$m['__repr__'] = function() { return '<module: serpentduel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'serpentduel';
	$m['__name__'] = __mod_name__;


	$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
	$m['random'] = $p['___import___']('random', null);
	$m['Matrix'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$method = $pyjs__bind_method2('__init__', function(x, y, screen, background) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				screen = arguments[3];
				background = arguments[4];
			}

			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
			self['x'] = $tupleassign1[0];
			self['y'] = $tupleassign1[1];
			self['screen'] = screen;
			self['background'] = background;
			self['clock'] = $m['pygame']['time']['Clock']();
			self['level'] = 2;
			self['speed'] = 2;
			self['mode'] = $p['dict']([['Serpent1', 'AI'], ['Serpent2', 'AI']]);
			self['ctrl'] = $p['dict']([['Pad', 'Serpent1'], ['Key1', 'Serpent1'], ['Key2', null]]);
			self['points'] = $p['dict']([['Serpent1', 0], ['Serpent2', 0]]);
			self['match'] = 0;
			self['auto'] = true;
			self['controls'] = $p['dict']([]);
			self['dirn'] = $p['dict']([]);
			$p['getattr'](self, 'dirn')['__setitem__']('U', $p['dict']([['U', 'U'], ['D', 'D'], ['L', 'L'], ['R', 'R']]));
			$p['getattr'](self, 'dirn')['__setitem__']('D', $p['dict']([['U', 'D'], ['D', 'U'], ['L', 'R'], ['R', 'L']]));
			$p['getattr'](self, 'dirn')['__setitem__']('L', $p['dict']([['U', 'R'], ['D', 'L'], ['L', 'D'], ['R', 'U']]));
			$p['getattr'](self, 'dirn')['__setitem__']('R', $p['dict']([['U', 'L'], ['D', 'R'], ['L', 'U'], ['R', 'D']]));
			self['serpent_control'] = $p['getattr'](self, 'serpent_control_scr');
			self['update_rect'] = $p['list']([]);
			self['clear_screen']();
			self['active'] = false;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['screen'],['background']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('start', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,serpent,$iter1_iter,$iter2_idx,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
			self['treat'] = $m['pygame']['sprite']['RenderUpdates']();
			self['serpent'] = $p['dict']([['Serpent1', null], ['Serpent2', null]]);
			$iter1_iter = $p['getattr'](self, 'mode');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				serpent = $iter1_nextval['$nextval'];
				if ($p['bool']($p['tuple'](['USER', 'AI'])['__contains__']($p['getattr'](self, 'mode')['__getitem__'](serpent)))) {
					self['serpent_initiate'](serpent);
				}
				else {
					self['match'] = 0;
				}
			}
			self['auto'] = !$p['bool'](self['mode']['values']()['__contains__']('USER'));
			self['clear_screen']();
			$iter2_iter = $p['getattr'](self, 'points');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				serpent = $iter2_nextval['$nextval'];
				$p['getattr'](self, 'points')['__setitem__'](serpent, 0);
			}
			self['active'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method2('clear_screen', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['screen']['blit']($p['getattr'](self, 'background'), $p['tuple']([0, 0]));
			self['draw_edge']();
			$m['pygame']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_screen'] = $method;
		$method = $pyjs__bind_method2('draw_edge', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$sub5,$iter3_type,edge_rect,$sub6,$iter3_iter,$iter3_array,$sub3,$sub2,$sub1,$iter3_nextval,rect,$sub4;
			self['edges'] = $p['list']([]);
			$iter3_iter = $p['list']([$p['tuple']([0, 0, $p['getattr'](self, 'x'), 5]), $p['tuple']([0, $p['__op_sub']($sub1=$p['getattr'](self, 'y'),$sub2=5), $p['getattr'](self, 'x'), 5]), $p['tuple']([0, 0, 5, $p['getattr'](self, 'y')]), $p['tuple']([$p['__op_sub']($sub3=$p['getattr'](self, 'x'),$sub4=5), 0, 5, $p['__op_sub']($sub5=$p['getattr'](self, 'y'),$sub6=5)])]);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				rect = $iter3_nextval['$nextval'];
				edge_rect = $m['pygame']['Rect'](rect);
				self['edges']['append']($m['pygame']['draw']['rect']($p['getattr'](self, 'screen'), $p['tuple']([43, 50, 58]), edge_rect, 0));
				self['update_rect']['append'](edge_rect);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw_edge'] = $method;
		$method = $pyjs__bind_method2('update_screen', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var serpent,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			if ($p['bool']($p['getattr'](self, 'treat'))) {
				self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
				self['update_rect']['extend'](self['treat']['draw']($p['getattr'](self, 'screen')));
			}
			$iter4_iter = $p['getattr'](self, 'serpent');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				serpent = $iter4_nextval['$nextval'];
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'serpent')['__getitem__'](serpent)))) {
					continue;
				}
				$p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
				self['update_rect']['extend']($p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['draw']($p['getattr'](self, 'screen')));
			}
			$m['pygame']['display']['update']($p['getattr'](self, 'update_rect'));
			self['update_rect'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update_screen'] = $method;
		$method = $pyjs__bind_method2('set_active', function(state, pause) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
				pause = arguments[2];
			}
			if (typeof state == 'undefined') state=arguments['callee']['__args__'][3][1];
			if (typeof pause == 'undefined') pause=arguments['callee']['__args__'][4][1];

			if ($p['bool']((state === null))) {
				self['active'] = !$p['bool']($p['getattr'](self, 'active'));
			}
			else {
				self['active'] = state;
			}
			if ($p['bool']($p['getattr'](self, 'active'))) {
				if ($p['bool'](!$p['bool'](pause))) {
					self['start']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['state', null],['pause', false]]);
		$cls_definition['set_active'] = $method;
		$method = $pyjs__bind_method2('set_mode', function(serpent, mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serpent = arguments[1];
				mode = arguments[2];
			}

			$p['getattr'](self, 'mode')['__setitem__'](serpent, mode);
			return null;
		}
	, 1, [null,null,['self'],['serpent'],['mode']]);
		$cls_definition['set_mode'] = $method;
		$method = $pyjs__bind_method2('set_control_mode', function(mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}

			if ($p['bool']($p['op_eq'](mode, 'SCR'))) {
				self['serpent_control'] = $p['getattr'](self, 'serpent_control_scr');
			}
			else if ($p['bool']($p['op_eq'](mode, 'USR'))) {
				self['serpent_control'] = $p['getattr'](self, 'serpent_control_usr');
			}
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['set_control_mode'] = $method;
		$method = $pyjs__bind_method2('set_difficulty', function(level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}

			self['level'] = level;
			self['speed'] = $p['dict']([[1, 1], [2, 2], [3, 5], [4, 10]])['__getitem__'](level);
			return null;
		}
	, 1, [null,null,['self'],['level']]);
		$cls_definition['set_difficulty'] = $method;
		$method = $pyjs__bind_method2('set_control', function(serpent, control) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serpent = arguments[1];
				control = arguments[2];
			}
			var $iter5_nextval,ctr,$iter5_array,$iter5_iter,$iter5_idx,$iter5_type;
			$iter5_iter = $p['getattr'](self, 'ctrl');
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				ctr = $iter5_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'ctrl')['__getitem__'](ctr), serpent))) {
					$p['getattr'](self, 'ctrl')['__setitem__'](ctr, null);
				}
			}
			if ($p['bool']($p['op_eq'](control, 'Pad/Key1'))) {
				$p['getattr'](self, 'ctrl')['__setitem__']('Pad', serpent);
				$p['getattr'](self, 'ctrl')['__setitem__']('Key1', serpent);
			}
			else if ($p['bool'](!$p['op_eq'](control, '-'))) {
				$p['getattr'](self, 'ctrl')['__setitem__'](control, serpent);
			}
			return null;
		}
	, 1, [null,null,['self'],['serpent'],['control']]);
		$cls_definition['set_control'] = $method;
		$method = $pyjs__bind_method2('serpent_control_scr', function(direction, ctrl) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
				ctrl = arguments[2];
			}
			if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
			var $pyjs_try_err;
			try {
				$p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl))['control'](direction);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
		$cls_definition['serpent_control_scr'] = $method;
		$method = $pyjs__bind_method2('serpent_control_usr', function(direction, ctrl) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
				ctrl = arguments[2];
			}
			if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
			var dirn,$pyjs_try_err;
			try {
				dirn = $p['getattr']($p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl)), 'direction');
				direction = $p['getattr'](self, 'dirn')['__getitem__'](dirn)['__getitem__'](direction);
				$p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl))['control'](direction);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
		$cls_definition['serpent_control_usr'] = $method;
		$method = $pyjs__bind_method2('serpent_initiate', function(identity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				identity = arguments[1];
			}
			var $floordiv7,$add4,$floordiv6,$add5,$add2,$add3,$floordiv5,$add1,$floordiv3,$floordiv2,$floordiv1,$floordiv4,$add6,$sub7,$sub8,$floordiv8;
			if ($p['bool']($p['op_eq'](identity, 'Serpent1'))) {
				$p['getattr'](self, 'serpent')['__setitem__']('Serpent1', (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, $p['__op_add']($add1=(typeof ($floordiv1=$p['getattr'](self, 'x'))==typeof ($floordiv2=2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math['floor']($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2)),$add2=50), $p['__op_add']($add3=(typeof ($floordiv3=$p['getattr'](self, 'y'))==typeof ($floordiv4=3) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math['floor']($floordiv3/$floordiv4):
					$p['op_floordiv']($floordiv3,$floordiv4)),$add4=30), identity, $p['getattr'](self, 'speed'), $p['getattr'](self, 'mode')['__getitem__']('Serpent1')));
			}
			else {
				$p['getattr'](self, 'serpent')['__setitem__']('Serpent2', (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, $p['__op_sub']($sub7=(typeof ($floordiv5=$p['getattr'](self, 'x'))==typeof ($floordiv6=2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
					Math['floor']($floordiv5/$floordiv6):
					$p['op_floordiv']($floordiv5,$floordiv6)),$sub8=50), $p['__op_add']($add5=(typeof ($floordiv7=$p['getattr'](self, 'y'))==typeof ($floordiv8=3) && typeof $floordiv7=='number' && $floordiv8 !== 0?
					Math['floor']($floordiv7/$floordiv8):
					$p['op_floordiv']($floordiv7,$floordiv8)),$add6=30), identity, $p['getattr'](self, 'speed'), $p['getattr'](self, 'mode')['__getitem__']('Serpent2')));
			}
			return null;
		}
	, 1, [null,null,['self'],['identity']]);
		$cls_definition['serpent_initiate'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var tm;
			tm = $m['pygame']['time']['wait'](100);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var serpent,$iter6_idx,$iter6_type,$and1,$and3,$and4,$iter6_array,$iter6_iter,$and2,$iter6_nextval;
			if ($p['bool']($p['getattr'](self, 'active'))) {
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'treat')))) {
					self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
					self['update_rect']['extend'](self['treat']['draw']($p['getattr'](self, 'screen')));
					if ($p['bool'](($p['bool']($and1=$p['getattr'](self, 'serpent'))?($p['cmp']($m['random']['random'](), 0.95) == 1):$and1))) {
						self['treat']['add']((typeof Treat == "undefined"?$m['Treat']:Treat)(self));
						self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
						self['update_rect']['extend'](self['treat']['draw']($p['getattr'](self, 'screen')));
					}
				}
				self['treat']['update']();
				$iter6_iter = $p['getattr'](self, 'serpent');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					serpent = $iter6_nextval['$nextval'];
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'serpent')['__getitem__'](serpent)))) {
						continue;
					}
					if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'serpent')['__getitem__'](serpent), 'alive')))) {
						if ($p['bool'](($p['bool']($and3=!$p['bool']($p['getattr'](self, 'match')))?!$p['bool']($p['getattr'](self, 'auto')):$and3))) {
							self['active'] = false;
						}
						else {
							self['serpent_initiate']($p['getattr']($p['getattr'](self, 'serpent')['__getitem__'](serpent), 'identity'));
							self['draw_edge']();
						}
					}
					$p['getattr'](self, 'serpent')['__getitem__'](serpent)['update']();
					$p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
					self['update_rect']['extend']($p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['draw']($p['getattr'](self, 'screen')));
				}
			}
			else {
				self['pause']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Matrix', $p['tuple']($bases), $data);
	})();
	$m['Serpent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$method = $pyjs__bind_method2('__init__', function(matrix, x, y, identity, speed, mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
				x = arguments[2];
				y = arguments[3];
				identity = arguments[4];
				speed = arguments[5];
				mode = arguments[6];
			}
			var $add8,$add7;
			self['matrix'] = matrix;
			self['identity'] = identity;
			self['mode'] = mode;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
			self['x'] = $tupleassign2[0];
			self['y'] = $tupleassign2[1];
			self['speed'] = speed;
			self['DIR'] = $p['dict']([['U', $p['tuple']([0, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))])], ['D', $p['tuple']([0, 1])], ['L', $p['tuple']([(typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)), 0])], ['R', $p['tuple']([1, 0])]]);
			self['DEG'] = $p['dict']([['U', 0], ['D', 180], ['L', 90], ['R', (typeof ($usub3=90)=='number'?
				-$usub3:
				$p['op_usub']($usub3))]]);
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'identity'), 'Serpent1'))) {
				self['direction'] = 'R';
			}
			else {
				self['direction'] = 'L';
			}
			self['new_direction'] = null;
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([0, 0, 0]), 3, null);
			self['step'] = $tupleassign3[0];
			self['growing'] = $tupleassign3[1];
			self['rate'] = $tupleassign3[2];
			self['segments'] = $m['pygame']['sprite']['RenderUpdates']();
			self['segment_spares'] = $p['list']([]);
			self['serpent_body'] = $p['dict']([]);
			self['grow']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction')));
			$p['getattr'](self, 'serpent_body')['__getitem__'](0)['image'] = $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__'](0), 'images')['__getitem__']($p['__op_add']($add7=$p['getattr'](self, 'identity'),$add8='_head'))['__getitem__']($p['getattr'](self, 'direction'));
			self['scan_rect'] = $m['pygame']['sprite']['Sprite']();
			$p['getattr'](self, 'scan_rect')['rect'] = $m['pygame']['Rect'](0, 0, 10, 10);
			self['scan_detect'] = false;
			self['pause'] = 20;
			self['active'] = true;
			self['alive'] = true;
			return null;
		}
	, 1, [null,null,['self'],['matrix'],['x'],['y'],['identity'],['speed'],['mode']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('grow', function(x, y, direction, number) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				direction = arguments[3];
				number = arguments[4];
			}
			if (typeof number == 'undefined') number=arguments['callee']['__args__'][6][1];
			var num,segment,$sub9,$iter7_iter,$iter7_type,$sub12,$sub11,$sub10,$iter7_idx,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter7_nextval,$iter7_array;
			$iter7_iter = $p['range'](0, (typeof ($mul1=number)==typeof ($mul2=10) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)), 10);
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				num = $iter7_nextval['$nextval'];
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'segment_spares')))) {
					self['segment_spares']['append']((typeof Segment == "undefined"?$m['Segment']:Segment)($p['getattr'](self, 'identity'), $p['tuple']([0, 0])));
				}
				segment = self['segment_spares']['pop']();
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub9=x,$sub10=(typeof ($mul3=direction['__getitem__'](0))==typeof ($mul4=num) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))), $p['__op_sub']($sub11=y,$sub12=(typeof ($mul5=direction['__getitem__'](1))==typeof ($mul6=num) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))]), 2, null);
				segment['x'] = $tupleassign4[0];
				segment['y'] = $tupleassign4[1];
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['getattr'](segment, 'x'), $p['getattr'](segment, 'y')]), 2, null);
				segment['x_pre'] = $tupleassign5[0];
				segment['y_pre'] = $tupleassign5[1];
				segment['rect']['__setattr__']('center', $p['tuple']([$p['getattr'](segment, 'x'), $p['getattr'](segment, 'y')]));
				segment['direction'] = direction;
				segment['speed'] = $p['getattr'](self, 'speed');
				self['segments']['add'](segment);
				$p['getattr'](self, 'serpent_body')['__setitem__']($p['len']($p['getattr'](self, 'serpent_body')), segment);
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['direction'],['number', 5]]);
		$cls_definition['grow'] = $method;
		$method = $pyjs__bind_method2('control', function(direction) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
			}
			var $iter8_idx,$iter8_array,$and5,$and6,dirn,$iter8_iter,$iter8_nextval,$iter8_type;
			$iter8_iter = $p['tuple']([$p['tuple'](['L', 'R']), $p['tuple'](['U', 'D'])]);
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				dirn = $iter8_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and5=dirn['__contains__'](direction))?!dirn['__contains__']($p['getattr'](self, 'direction')):$and5))) {
					self['new_direction'] = direction;
					self['last_move'] = direction;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['direction']]);
		$cls_definition['control'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div1,$iter9_iter,i,$iter9_nextval,$iter9_idx,$sub14,$iter9_array,$sub13,$sub16,$add10,$sub15,$add12,$div2,$add9,$iter9_type,$add11;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), 'AI'))) {
				self['move_auto']();
			}
			self['step'] = $p['__op_add']($add9=$p['getattr'](self, 'step'),$add10=1);
			if ($p['bool'](((($p['cmp']($p['getattr'](self, 'step'), (typeof ($div1=10)==typeof ($div2=$p['getattr'](self, 'speed')) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_truediv']($div1,$div2))))|1) == 1))) {
				$iter9_iter = $p['range']($p['__op_sub']($sub13=$p['len']($p['getattr'](self, 'serpent_body')),$sub14=1), 0, (typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					i = $iter9_nextval['$nextval'];
					$p['getattr'](self, 'serpent_body')['__getitem__'](i)['direction'] = $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub15=i,$sub16=1)), 'direction');
				}
				if ($p['bool']($p['getattr'](self, 'new_direction'))) {
					self['direction'] = $p['getattr'](self, 'new_direction');
					$p['getattr'](self, 'serpent_body')['__getitem__'](0)['direction'] = $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction'));
					$p['getattr'](self, 'serpent_body')['__getitem__'](0)['image'] = $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__'](0), 'images')['__getitem__']($p['__op_add']($add11=$p['getattr'](self, 'identity'),$add12='_head'))['__getitem__']($p['getattr'](self, 'direction'));
					self['new_direction'] = null;
				}
				self['step'] = 0;
			}
			self['segments']['update']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('move_auto', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter14_iter,direct,$iter13_idx,$iter14_array,$pyjs_try_err,treat,$iter13_type,$and8,$and9,direction,$iter14_type,new_direction,$iter12_array,collide,$and7,$and12,$and13,$and10,$and11,$and16,$and14,$and15,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,$iter12_type,$iter13_array,$iter12_iter,y,x,$iter12_idx,$iter12_nextval;
			collide = function(direction) {
				var $sub20,$iter10_nextval,serpent,$add13,$sub19,$iter10_iter,collide,$iter10_idx,$sub18,$sub17,$floordiv12,$floordiv11,$floordiv10,$add14,$add15,$add16,$mul9,$mul8,$mul7,$mul10,$iter10_array,$iter10_type,$floordiv9;
				direction = $p['getattr'](self, 'DIR')['__getitem__'](direction);
				$p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['x'] = $p['__op_sub']($sub17=$p['__op_add']($add13=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__'](0), 'x'),$add14=(typeof ($mul7=direction['__getitem__'](0))==typeof ($mul8=10) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))),$sub18=(typeof ($floordiv9=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'width'))==typeof ($floordiv10=2) && typeof $floordiv9=='number' && $floordiv10 !== 0?
					Math['floor']($floordiv9/$floordiv10):
					$p['op_floordiv']($floordiv9,$floordiv10)));
				$p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['y'] = $p['__op_sub']($sub19=$p['__op_add']($add15=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__'](0), 'y'),$add16=(typeof ($mul9=direction['__getitem__'](1))==typeof ($mul10=10) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))),$sub20=(typeof ($floordiv11=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'height'))==typeof ($floordiv12=2) && typeof $floordiv11=='number' && $floordiv12 !== 0?
					Math['floor']($floordiv11/$floordiv12):
					$p['op_floordiv']($floordiv11,$floordiv12)));
				collide = false;
				$iter10_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					serpent = $iter10_nextval['$nextval'];
					if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)))) {
						continue;
					}
					if ($p['bool']($m['pygame']['sprite']['spritecollideany']($p['getattr'](self, 'scan_rect'), $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments')))) {
						collide = true;
						return collide;
					}
				}
				if ($p['bool'](!$p['op_eq'](self['scan_rect']['rect']['collidelist']($p['getattr']($p['getattr'](self, 'matrix'), 'edges')), (typeof ($usub5=1)=='number'?
					-$usub5:
					$p['op_usub']($usub5))))) {
					collide = true;
					return collide;
				}
				return collide;
			};
			collide['__name__'] = 'collide';

			collide['__bind_type__'] = 0;
			collide['__args__'] = [null,null,['direction']];
			try {
				treat = function(){
					var $iter11_iter,$iter11_type,$collcomp1,treat,$iter11_array,$iter11_nextval,$iter11_idx;
	$collcomp1 = $p['list']();
				$iter11_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'treat');
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					treat = $iter11_nextval['$nextval'];
					$collcomp1['append'](treat);
				}

	return $collcomp1;}()['__getitem__'](0);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					treat = null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			if ($p['bool'](($p['bool']($and7=treat)?!$p['bool']($p['getattr'](self, 'new_direction')):$and7))) {
				var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__'](0), 'x'), $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__'](0), 'y')]), 2, null);
				x = $tupleassign6[0];
				y = $tupleassign6[1];
				if ($p['bool'](($p['bool']($and9=($p['cmp'](x, $p['getattr'](treat, 'x')) < 1))?($p['cmp'](y, $p['getattr'](treat, 'y')) < 1):$and9))) {
					direct = $p['tuple'](['R', 'D']);
				}
				else if ($p['bool'](($p['bool']($and11=($p['cmp'](x, $p['getattr'](treat, 'x')) < 1))?((($p['cmp'](y, $p['getattr'](treat, 'y')))|1) == 1):$and11))) {
					direct = $p['tuple'](['R', 'U']);
				}
				else if ($p['bool'](($p['bool']($and13=((($p['cmp'](x, $p['getattr'](treat, 'x')))|1) == 1))?($p['cmp'](y, $p['getattr'](treat, 'y')) < 1):$and13))) {
					direct = $p['tuple'](['L', 'D']);
				}
				else if ($p['bool'](($p['bool']($and15=((($p['cmp'](x, $p['getattr'](treat, 'x')))|1) == 1))?((($p['cmp'](y, $p['getattr'](treat, 'y')))|1) == 1):$and15))) {
					direct = $p['tuple'](['L', 'U']);
				}
				if ($p['bool'](!direct['__contains__']($p['getattr'](self, 'direction')))) {
					new_direction = $p['list']([]);
					$iter12_iter = direct;
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						direction = $iter12_nextval['$nextval'];
						if ($p['bool'](!$p['bool'](collide(direction)))) {
							new_direction['append'](direction);
						}
					}
					if ($p['bool'](new_direction)) {
						self['control']($m['random']['choice'](new_direction));
					}
				}
			}
			if ($p['bool'](collide($p['getattr'](self, 'direction')))) {
				self['new_direction'] = null;
				new_direction = $p['list']([]);
				if ($p['bool']($p['tuple'](['U', 'D'])['__contains__']($p['getattr'](self, 'direction')))) {
					$iter13_iter = $p['tuple'](['L', 'R']);
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						direction = $iter13_nextval['$nextval'];
						if ($p['bool'](!$p['bool'](collide(direction)))) {
							new_direction['append'](direction);
						}
					}
				}
				else if ($p['bool']($p['tuple'](['L', 'R'])['__contains__']($p['getattr'](self, 'direction')))) {
					$iter14_iter = $p['tuple'](['U', 'D']);
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						direction = $iter14_nextval['$nextval'];
						if ($p['bool'](!$p['bool'](collide(direction)))) {
							new_direction['append'](direction);
						}
					}
				}
				if ($p['bool'](new_direction)) {
					self['control']($m['random']['choice'](new_direction));
				}
				self['scan_detect'] = true;
			}
			else {
				self['scan_detect'] = false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move_auto'] = $method;
		$method = $pyjs__bind_method2('growth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub22,$sub23,$sub21,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,$add29,$add28,$add21,$add20,$add22,$add25,$add24,$add27,$add26,tail,treat,$sub31,$sub30,$sub32,$add17,$and17,$div3,$and18,$add18,$add19,$div4,$mul14,$mul13,$mul12,$mul11,$add30,points,$add23;
			if ($p['bool']($m['pygame']['sprite']['spritecollide']($p['getattr'](self, 'serpent_body')['__getitem__'](0), $p['getattr']($p['getattr'](self, 'matrix'), 'treat'), false, $p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'collide_mask')))) {
				points = 0;
				treat = function(){
					var $iter15_iter,$iter15_array,$collcomp2,$iter15_idx,treat,$iter15_nextval,$iter15_type;
	$collcomp2 = $p['list']();
				$iter15_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'treat');
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					treat = $iter15_nextval['$nextval'];
					$collcomp2['append'](treat);
				}

	return $collcomp2;}()['__getitem__'](0);
				if ($p['bool']($p['op_eq']($p['getattr'](treat, 'identity'), 'Food'))) {
					if ($p['bool'](((($p['cmp']($p['getattr'](self, 'growing'), 0))|1) == 1))) {
						self['growing'] = $p['__op_add']($add17=$p['getattr'](self, 'growing'),$add18=5);
					}
					else {
						points = $p['__op_add']($add19=points,$add20=5);
					}
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](treat, 'identity'), 'Bonus'))) {
					if ($p['bool'](($p['bool']($and17=($p['cmp']($p['len']($p['getattr'](self, 'serpent_body')), 5) == 1))?((($p['cmp']($p['getattr'](self, 'growing'), 0))|1) == 1):$and17))) {
						self['growing'] = (typeof ($usub6=$p['__op_sub']($sub21=$p['len']($p['getattr'](self, 'serpent_body')),$sub22=5))=='number'?
							-$usub6:
							$p['op_usub']($usub6));
						self['rate'] = 0;
					}
					points = $p['__op_add']($add21=points,$add22=10);
				}
				if ($p['bool'](points)) {
					self['set_points'](points);
				}
				self['matrix']['treat']['empty']();
			}
			if ($p['bool']($p['getattr'](self, 'growing'))) {
				self['rate'] = $p['__op_add']($add23=$p['getattr'](self, 'rate'),$add24=1);
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'rate'), (typeof ($div3=10)==typeof ($div4=$p['getattr'](self, 'speed')) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_truediv']($div3,$div4))) == 1))) {
					points = 0;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'growing'), 0) == 1))) {
						tail = $p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub23=$p['len']($p['getattr'](self, 'serpent_body')),$sub24=1));
						$pyjs_kwargs_call(self, 'grow', null, null, [{'number':1}, $p['__op_sub']($sub25=$p['getattr'](tail, 'x'),$sub26=(typeof ($mul11=$p['getattr'](tail, 'direction')['__getitem__'](0))==typeof ($mul12=10) && typeof $mul11=='number'?
							$mul11*$mul12:
							$p['op_mul']($mul11,$mul12))), $p['__op_sub']($sub27=$p['getattr'](tail, 'y'),$sub28=(typeof ($mul13=$p['getattr'](tail, 'direction')['__getitem__'](1))==typeof ($mul14=10) && typeof $mul13=='number'?
							$mul13*$mul14:
							$p['op_mul']($mul13,$mul14))), $p['getattr'](tail, 'direction')]);
						self['growing'] = $p['__op_sub']($sub29=$p['getattr'](self, 'growing'),$sub30=1);
						points = $p['__op_add']($add25=points,$add26=1);
					}
					else {
						tail = $p['__op_sub']($sub31=$p['len']($p['getattr'](self, 'serpent_body')),$sub32=1);
						self['segment_spares']['append']($p['getattr'](self, 'serpent_body')['__getitem__'](tail));
						self['segments']['remove']($p['getattr'](self, 'serpent_body')['__getitem__'](tail));
						$p['getattr'](self, 'serpent_body')['__delitem__'](tail);
						self['growing'] = $p['__op_add']($add27=$p['getattr'](self, 'growing'),$add28=1);
						points = $p['__op_add']($add29=points,$add30=1);
					}
					self['rate'] = 0;
					if ($p['bool'](points)) {
						self['set_points'](points);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['growth'] = $method;
		$method = $pyjs__bind_method2('set_points', function(points) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				points = arguments[1];
			}
			var $augexpr1,$and20,$add32,$add31,$augsub1,$and22,$and21,$and19;
			var $augsub1 = $p['getattr'](self, 'identity');
			var $augexpr1 = $p['getattr']($p['getattr'](self, 'matrix'), 'points');
			$augexpr1['__setitem__']($augsub1, $p['__op_add']($add31=$augexpr1['__getitem__']($augsub1),$add32=points));
			if ($p['bool'](($p['bool']($and19=$p['getattr']($p['getattr'](self, 'matrix'), 'match'))?!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'auto')):$and19))) {
				if ($p['bool'](($p['bool']($and21=((($p['cmp']($p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity')), $p['getattr']($p['getattr'](self, 'matrix'), 'match')))|1) == 1))?!$p['bool']($p['getattr'](self, 'growing')):$and21))) {
					self['matrix']['set_active'](false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['points']]);
		$cls_definition['set_points'] = $method;
		$method = $pyjs__bind_method2('collision', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter16_array,$iter17_nextval,$iter17_iter,serpent,$iter16_type,segment,$iter16_idx,$iter17_array,$iter17_idx,$iter17_type,$and23,$iter16_nextval,$iter16_iter,$and24;
			if ($p['bool'](($p['bool']($and23=$p['op_eq']($p['getattr'](self, 'mode'), 'AI'))?!$p['bool']($p['getattr'](self, 'scan_detect')):$and23))) {
				return null;
			}
			$iter16_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				serpent = $iter16_nextval['$nextval'];
				if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)))) {
					continue;
				}
				$iter17_iter = $m['pygame']['sprite']['spritecollide']($p['getattr'](self, 'serpent_body')['__getitem__'](0), $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments'), false);
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					segment = $iter17_nextval['$nextval'];
					if ($p['bool'](!$p['tuple']([$p['getattr'](self, 'serpent_body')['__getitem__'](0), $p['getattr'](self, 'serpent_body')['__getitem__'](1)])['__contains__'](segment))) {
						return true;
					}
				}
			}
			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'serpent_body')['__getitem__'](0)['rect']['collidelist']($p['getattr']($p['getattr'](self, 'matrix'), 'edges')), (typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7))))) {
				return true;
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['collision'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add36,$sub33,$or1,$sub34,$or2,$add33,$floordiv14,$floordiv13,$add34,$add35,penalty,$sub35,$sub36,$and26,$and25;
			if ($p['bool']($p['getattr'](self, 'active'))) {
				self['move']();
				self['growth']();
				self['active'] = !$p['bool'](self['collision']());
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'active')))) {
					$p['getattr'](self, 'serpent_body')['__getitem__'](0)['image'] = $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__'](0), 'images')['__getitem__']($p['__op_add']($add33=$p['getattr'](self, 'identity'),$add34='_ko'))['__getitem__']($p['getattr'](self, 'direction'));
					if ($p['bool'](($p['bool']($or1=$p['getattr']($p['getattr'](self, 'matrix'), 'match'))?$or1:$p['getattr']($p['getattr'](self, 'matrix'), 'auto')))) {
						if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'serpent_body')), 5) == 1))) {
							penalty = $p['__op_add']($add35=5,$add36=(typeof ($floordiv13=$p['len']($p['getattr'](self, 'serpent_body')))==typeof ($floordiv14=5) && typeof $floordiv13=='number' && $floordiv14 !== 0?
								Math['floor']($floordiv13/$floordiv14):
								$p['op_floordiv']($floordiv13,$floordiv14)));
							if ($p['bool'](($p['cmp']($p['__op_sub']($sub33=$p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity')),$sub34=penalty), 0) == -1))) {
								penalty = $p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity'));
							}
							self['set_points']((typeof ($usub8=penalty)=='number'?
								-$usub8:
								$p['op_usub']($usub8)));
						}
					}
				}
			}
			else {
				if ($p['bool'](($p['bool']($and25=!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'match')))?!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'auto')):$and25))) {
					self['alive'] = false;
				}
				else {
					self['pause'] = $p['__op_sub']($sub35=$p['getattr'](self, 'pause'),$sub36=1);
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'pause')))) {
						self['segment_spares']['extend'](self['segments']['sprites']());
						self['segments']['empty']();
						self['alive'] = false;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Serpent', $p['tuple']($bases), $data);
	})();
	$m['Segment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$cls_definition['images'] = null;
		$cls_definition['mask'] = null;
		$method = $pyjs__bind_method2('__init__', function(serpent, position, direction, speed) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serpent = arguments[1];
				position = arguments[2];
				direction = arguments[3];
				speed = arguments[4];
			}
			if (typeof direction == 'undefined') direction=arguments['callee']['__args__'][5][1];
			if (typeof speed == 'undefined') speed=arguments['callee']['__args__'][6][1];
			var $add42,species,$add44,$add43,$iter19_nextval,$add41,$add40,segment_head,$iter19_iter,$iter18_idx,$iter18_nextval,$iter18_type,$iter18_iter,$iter19_array,$iter19_idx,dirn,$add38,$add39,segment_ko,$iter18_array,$add37,$iter19_type,deg;
			$m['pygame']['sprite']['Sprite']['__init__'](self);
			self['type'] = $p['dict']([['Serpent1', $p['tuple']([0, 0, 255])], ['Serpent2', $p['tuple']([255, 0, 0])]]);
			if ($p['bool'](!$p['bool']($p['getattr']($m['Segment'], 'images')))) {
				$m['Segment']['images'] = $p['dict']([]);
				$iter18_iter = $p['tuple'](['Serpent1', 'Serpent2']);
				$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
				while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
					species = $iter18_nextval['$nextval'];
					$p['getattr']($m['Segment'], 'images')['__setitem__'](species, $m['pygame']['Surface']($p['tuple']([10, 10])));
					$m['pygame']['draw']['circle']($p['getattr']($m['Segment'], 'images')['__getitem__'](species), $p['getattr'](self, 'type')['__getitem__'](species), $p['tuple']([5, 5]), 6, 0);
					$p['getattr']($m['Segment'], 'images')['__getitem__'](species)['set_colorkey']($p['tuple']([0, 0, 0]));
					segment_head = $p['getattr']($m['Segment'], 'images')['__getitem__'](species)['copy']();
					$m['pygame']['draw']['line'](segment_head, $p['tuple']([0, 255, 0]), $p['tuple']([2, 2]), $p['tuple']([0, 5]), 3);
					$m['pygame']['draw']['line'](segment_head, $p['tuple']([0, 255, 0]), $p['tuple']([7, 2]), $p['tuple']([9, 5]), 3);
					segment_ko = $p['getattr']($m['Segment'], 'images')['__getitem__'](species)['copy']();
					$m['pygame']['draw']['circle'](segment_ko, $p['tuple']([0, 255, 0]), $p['tuple']([2, 3]), 2, 1);
					$m['pygame']['draw']['circle'](segment_ko, $p['tuple']([0, 255, 0]), $p['tuple']([8, 3]), 2, 1);
					$p['getattr']($m['Segment'], 'images')['__setitem__']($p['__op_add']($add37=species,$add38='_head'), $p['dict']([]));
					$p['getattr']($m['Segment'], 'images')['__setitem__']($p['__op_add']($add39=species,$add40='_ko'), $p['dict']([]));
					deg = $p['dict']([['U', 0], ['D', 180], ['L', 90], ['R', (typeof ($usub9=90)=='number'?
						-$usub9:
						$p['op_usub']($usub9))]]);
					$iter19_iter = $p['tuple'](['U', 'D', 'L', 'R']);
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						dirn = $iter19_nextval['$nextval'];
						$p['getattr']($m['Segment'], 'images')['__getitem__']($p['__op_add']($add41=species,$add42='_head'))['__setitem__'](dirn, $m['pygame']['transform']['rotate'](segment_head, deg['__getitem__'](dirn)));
						$p['getattr']($m['Segment'], 'images')['__getitem__']($p['__op_add']($add43=species,$add44='_ko'))['__setitem__'](dirn, $m['pygame']['transform']['rotate'](segment_ko, deg['__getitem__'](dirn)));
					}
				}
				$m['Segment']['mask'] = $m['pygame']['mask']['from_surface']($p['getattr']($m['Segment'], 'images')['__getitem__']('Serpent1'));
			}
			var $tupleassign7 = $p['__ass_unpack'](position, 2, null);
			self['x'] = $tupleassign7[0];
			self['y'] = $tupleassign7[1];
			self['direction'] = direction;
			self['speed'] = speed;
			self['image'] = $p['getattr']($m['Segment'], 'images')['__getitem__'](serpent);
			self['rect'] = $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')])}]);
			var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]), 2, null);
			self['x_pre'] = $tupleassign8[0];
			self['y_pre'] = $tupleassign8[1];
			self['mask'] = $p['getattr']($m['Segment'], 'mask');
			return null;
		}
	, 1, [null,null,['self'],['serpent'],['position'],['direction', null],['speed', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul17,$mul16,$mul15,$sub37,$add48,$add47,$add46,$mul18,$sub39,$sub38,$sub40,$add45;
			self['x'] = $p['__op_add']($add45=$p['getattr'](self, 'x'),$add46=(typeof ($mul15=$p['getattr'](self, 'direction')['__getitem__'](0))==typeof ($mul16=$p['getattr'](self, 'speed')) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)));
			self['y'] = $p['__op_add']($add47=$p['getattr'](self, 'y'),$add48=(typeof ($mul17=$p['getattr'](self, 'direction')['__getitem__'](1))==typeof ($mul18=$p['getattr'](self, 'speed')) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)));
			self['rect']['move_ip']($p['__op_sub']($sub37=$p['getattr'](self, 'x'),$sub38=$p['getattr'](self, 'x_pre')), $p['__op_sub']($sub39=$p['getattr'](self, 'y'),$sub40=$p['getattr'](self, 'y_pre')));
			var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]), 2, null);
			self['x_pre'] = $tupleassign9[0];
			self['y_pre'] = $tupleassign9[1];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Segment', $p['tuple']($bases), $data);
	})();
	$m['Treat'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$cls_definition['images'] = null;
		$cls_definition['mask'] = null;
		$method = $pyjs__bind_method2('__init__', function(matrix) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
			}
			var $iter20_nextval,serpent,$sub41,$sub42,$sub43,$sub44,$iter20_array,$add49,disrupt,$iter20_iter,$floordiv16,$floordiv15,$div6,$div5,$add50,$iter20_type,placed,$iter20_idx,y,x;
			$m['pygame']['sprite']['Sprite']['__init__'](self);
			self['matrix'] = matrix;
			if ($p['bool'](!$p['bool']($p['getattr']($m['Treat'], 'images')))) {
				$m['Treat']['images'] = $p['dict']([]);
				$m['Treat']['mask'] = $p['dict']([]);
				$p['getattr']($m['Treat'], 'images')['__setitem__']('Food', $m['pygame']['Surface']($p['tuple']([15, 15])));
				$m['pygame']['draw']['circle']($p['getattr']($m['Treat'], 'images')['__getitem__']('Food'), $p['tuple']([0, 255, 0]), $p['tuple']([7, 7]), 5, 0);
				$p['getattr']($m['Treat'], 'images')['__getitem__']('Food')['set_colorkey']($p['tuple']([0, 0, 0]));
				$p['getattr']($m['Treat'], 'images')['__setitem__']('Bonus', $m['pygame']['Surface']($p['tuple']([15, 15])));
				$m['pygame']['draw']['circle']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus'), $p['tuple']([255, 0, 0]), $p['tuple']([7, 10]), 5, 0);
				$m['pygame']['draw']['arc']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus'), $p['tuple']([0, 255, 0]), $p['tuple']([(typeof ($usub10=7)=='number'?
					-$usub10:
					$p['op_usub']($usub10)), 0, 15, 15]), 0, 1, 1);
				$p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus')['set_colorkey']($p['tuple']([0, 0, 0]));
				$p['getattr']($m['Treat'], 'mask')['__setitem__']('Food', $m['pygame']['mask']['from_surface']($p['getattr']($m['Treat'], 'images')['__getitem__']('Food')));
				$p['getattr']($m['Treat'], 'mask')['__setitem__']('Bonus', $m['pygame']['mask']['from_surface']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus')));
			}
			placed = false;
			while ($p['bool'](!$p['bool'](placed))) {
				var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$m['random']['randrange'](20, $p['__op_sub']($sub41=$p['getattr']($p['getattr'](self, 'matrix'), 'x'),$sub42=20)), $m['random']['randrange'](20, $p['__op_sub']($sub43=$p['getattr']($p['getattr'](self, 'matrix'), 'y'),$sub44=20))]), 2, null);
				x = $tupleassign10[0];
				y = $tupleassign10[1];
				var $tupleassign11 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				self['x'] = $tupleassign11[0];
				self['y'] = $tupleassign11[1];
				if ($p['bool'](($p['cmp']($m['random']['random'](), $p['__op_add']($add49=0.1,$add50=(typeof ($div5=matrix['clock']['get_time']())==typeof ($div6=300.0) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_truediv']($div5,$div6)))) == 1))) {
					self['identity'] = 'Food';
					self['duration'] = $m['random']['randrange'](800, 2000);
				}
				else {
					self['identity'] = 'Bonus';
					self['duration'] = $m['random']['randrange'](400, 800);
				}
				self['duration'] = (typeof ($floordiv15=$p['getattr'](self, 'duration'))==typeof ($floordiv16=$p['getattr'](matrix, 'level')) && typeof $floordiv15=='number' && $floordiv16 !== 0?
					Math['floor']($floordiv15/$floordiv16):
					$p['op_floordiv']($floordiv15,$floordiv16));
				self['image'] = $p['getattr']($m['Treat'], 'images')['__getitem__']($p['getattr'](self, 'identity'));
				self['rect'] = $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([x, y])}]);
				self['mask'] = $p['getattr']($m['Treat'], 'mask')['__getitem__']($p['getattr'](self, 'identity'));
				disrupt = false;
				$iter20_iter = $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
					serpent = $iter20_nextval['$nextval'];
					if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)))) {
						continue;
					}
					if ($p['bool']($m['pygame']['sprite']['spritecollideany'](self, $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments')))) {
						disrupt = true;
						break;
					}
				}
				if ($p['bool'](!$p['bool'](disrupt))) {
					placed = true;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['matrix']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub45,$sub46;
			self['duration'] = $p['__op_sub']($sub45=$p['getattr'](self, 'duration'),$sub46=1);
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'duration')))) {
				self['matrix']['treat']['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Treat', $p['tuple']($bases), $data);
	})();
	$m['Control'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$method = $pyjs__bind_method2('__init__', function(matrix) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
			}
			var font;
			self['matrix'] = matrix;
			$m['pygame']['font']['init']();
			font = $m['pygame']['font']['get_default_font']();
			self['font'] = $m['pygame']['font']['Font'](font, 24);
			self['font2'] = $m['pygame']['font']['Font'](font, 14);
			self['matrix_start'] = false;
			self['quit_request'] = false;
			$m['pygame']['event']['set_blocked']($p['getattr']($m['pygame'], 'MOUSEMOTION'));
			self['quit'] = false;
			self['pause'] = true;
			self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
			return null;
		}
	, 1, [null,null,['self'],['matrix']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('pause_program', function(text1, text2, text3) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text1 = arguments[1];
				text2 = arguments[2];
				text3 = arguments[3];
			}
			if (typeof text2 == 'undefined') text2=arguments['callee']['__args__'][4][1];
			if (typeof text3 == 'undefined') text3=arguments['callee']['__args__'][5][1];
			var $floordiv26,$floordiv27,$floordiv24,$floordiv25,$floordiv22,$floordiv23,$floordiv20,$floordiv21,text,$floordiv33,$floordiv28,$floordiv29,$sub48,$sub49,$floordiv32,$floordiv35,$floordiv34,$sub47,$sub56,$sub51,$sub50,$floordiv39,$sub60,size,$floordiv37,$floordiv31,$floordiv30,$sub55,$sub54,$sub53,$sub52,$floordiv19,$floordiv18,$floordiv17,$floordiv38,$sub59,$sub58,$floordiv36,$floordiv40,$add51,$add52,$add53,$add54,$sub57;
			self['matrix']['screen']['fill']($p['tuple']([0, 0, 0]));
			text = self['font']['render'](text1, true, $p['tuple']([100, 100, 100]));
			size = self['font']['size'](text1);
			self['matrix']['screen']['blit'](text, $p['tuple']([$p['__op_sub']($sub47=(typeof ($floordiv17=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv18=2) && typeof $floordiv17=='number' && $floordiv18 !== 0?
				Math['floor']($floordiv17/$floordiv18):
				$p['op_floordiv']($floordiv17,$floordiv18)),$sub48=(typeof ($floordiv19=size['__getitem__'](0))==typeof ($floordiv20=2) && typeof $floordiv19=='number' && $floordiv20 !== 0?
				Math['floor']($floordiv19/$floordiv20):
				$p['op_floordiv']($floordiv19,$floordiv20))), $p['__op_sub']($sub51=$p['__op_sub']($sub49=(typeof ($floordiv21=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv22=2) && typeof $floordiv21=='number' && $floordiv22 !== 0?
				Math['floor']($floordiv21/$floordiv22):
				$p['op_floordiv']($floordiv21,$floordiv22)),$sub50=(typeof ($floordiv23=size['__getitem__'](1))==typeof ($floordiv24=2) && typeof $floordiv23=='number' && $floordiv24 !== 0?
				Math['floor']($floordiv23/$floordiv24):
				$p['op_floordiv']($floordiv23,$floordiv24))),$sub52=12)]));
			if ($p['bool'](text2)) {
				text = self['font2']['render'](text2, true, $p['tuple']([100, 100, 100]));
				size = self['font2']['size'](text2);
				self['matrix']['screen']['blit'](text, $p['tuple']([$p['__op_sub']($sub53=(typeof ($floordiv25=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv26=2) && typeof $floordiv25=='number' && $floordiv26 !== 0?
					Math['floor']($floordiv25/$floordiv26):
					$p['op_floordiv']($floordiv25,$floordiv26)),$sub54=(typeof ($floordiv27=size['__getitem__'](0))==typeof ($floordiv28=2) && typeof $floordiv27=='number' && $floordiv28 !== 0?
					Math['floor']($floordiv27/$floordiv28):
					$p['op_floordiv']($floordiv27,$floordiv28))), $p['__op_add']($add51=$p['__op_sub']($sub55=(typeof ($floordiv29=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv30=2) && typeof $floordiv29=='number' && $floordiv30 !== 0?
					Math['floor']($floordiv29/$floordiv30):
					$p['op_floordiv']($floordiv29,$floordiv30)),$sub56=(typeof ($floordiv31=size['__getitem__'](1))==typeof ($floordiv32=2) && typeof $floordiv31=='number' && $floordiv32 !== 0?
					Math['floor']($floordiv31/$floordiv32):
					$p['op_floordiv']($floordiv31,$floordiv32))),$add52=25)]));
			}
			if ($p['bool'](text3)) {
				text = self['font2']['render'](text3, true, $p['tuple']([100, 100, 100]));
				size = self['font2']['size'](text3);
				self['matrix']['screen']['blit'](text, $p['tuple']([$p['__op_sub']($sub57=(typeof ($floordiv33=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv34=2) && typeof $floordiv33=='number' && $floordiv34 !== 0?
					Math['floor']($floordiv33/$floordiv34):
					$p['op_floordiv']($floordiv33,$floordiv34)),$sub58=(typeof ($floordiv35=size['__getitem__'](0))==typeof ($floordiv36=2) && typeof $floordiv35=='number' && $floordiv36 !== 0?
					Math['floor']($floordiv35/$floordiv36):
					$p['op_floordiv']($floordiv35,$floordiv36))), $p['__op_add']($add53=$p['__op_sub']($sub59=(typeof ($floordiv37=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv38=2) && typeof $floordiv37=='number' && $floordiv38 !== 0?
					Math['floor']($floordiv37/$floordiv38):
					$p['op_floordiv']($floordiv37,$floordiv38)),$sub60=(typeof ($floordiv39=size['__getitem__'](1))==typeof ($floordiv40=2) && typeof $floordiv39=='number' && $floordiv40 !== 0?
					Math['floor']($floordiv39/$floordiv40):
					$p['op_floordiv']($floordiv39,$floordiv40))),$add54=40)]));
			}
			$m['pygame']['display']['flip']();
			$p['getattr'](self, 'matrix')['active'] = false;
			return null;
		}
	, 1, [null,null,['self'],['text1'],['text2', null],['text3', null]]);
		$cls_definition['pause_program'] = $method;
		$method = $pyjs__bind_method2('matrix_control', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'pause')))) {
				self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
				self['pause'] = true;
			}
			else {
				if ($p['bool']($p['getattr'](self, 'matrix_start'))) {
					self['matrix']['clear_screen']();
					self['matrix']['update_screen']();
					$p['getattr'](self, 'matrix')['active'] = true;
				}
				else {
					self['matrix']['start']();
					self['matrix_start'] = true;
				}
				self['quit_request'] = false;
				self['pause'] = false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['matrix_control'] = $method;
		$method = $pyjs__bind_method2('check_control', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter21_idx,$iter21_nextval,$iter21_type,$iter21_iter,$iter21_array,event;
			$iter21_iter = $m['pygame']['event']['get']();
			$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
			while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
				event = $iter21_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'MOUSEBUTTONDOWN')))) {
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'button'), 1))) {
						self['matrix_control']();
					}
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'KEYDOWN')))) {
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_p')))) {
						self['matrix_control']();
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_r')))) {
						self['pause'] = false;
						self['quit_request'] = false;
						self['matrix']['start']();
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_q')))) {
						self['pause_program']('Serpent Duel', 'Quit (y/n)?');
						self['pause'] = true;
						self['quit_request'] = true;
					}
					else if ($p['bool']($p['tuple']([$p['getattr']($m['pygame'], 'K_y'), $p['getattr']($m['pygame'], 'K_n')])['__contains__']($p['getattr'](event, 'key')))) {
						if ($p['bool']($p['getattr'](self, 'quit_request'))) {
							if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_n')))) {
								self['matrix_control']();
							}
							else {
								self['matrix']['screen']['fill']($p['tuple']([0, 0, 0]));
								$m['pygame']['display']['flip']();
								$m['pygame']['time']['delay'](10);
								$m['pygame']['quit']();
								self['quit'] = true;
							}
						}
					}
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'QUIT')))) {
					self['quit'] = true;
				}
			}
			return $p['getattr'](self, 'quit');
		}
	, 1, [null,null,['self']]);
		$cls_definition['check_control'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Control', $p['tuple']($bases), $data);
	})();
	$m['setup'] = function(x, y, screen) {
		if (typeof x == 'undefined') x=arguments['callee']['__args__'][2][1];
		if (typeof y == 'undefined') y=arguments['callee']['__args__'][3][1];
		if (typeof screen == 'undefined') screen=arguments['callee']['__args__'][4][1];
		var control,$iter23_type,$iter22_array,$iter23_iter,$iter22_nextval,$iter22_idx,matrix,$iter23_nextval,$iter23_array,$iter22_type,background,$iter23_idx,line,$iter22_iter;
		$m['pygame']['display']['init']();
		$m['pygame']['display']['set_caption']('Serpent Duel');
		if ($p['bool'](!$p['bool'](screen))) {
			screen = $m['pygame']['display']['set_mode']($p['tuple']([x, y]));
		}
		background = $m['pygame']['Surface']($p['tuple']([x, y]));
		background['fill']($p['tuple']([50, 50, 50]));
		$iter22_iter = $p['range'](0, 300, 25);
		$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
		while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
			line = $iter22_nextval['$nextval'];
			$m['pygame']['draw']['line'](background, $p['tuple']([43, 50, 58]), $p['tuple']([0, line]), $p['tuple']([400, line]), 1);
		}
		$iter23_iter = $p['range'](0, 400, 25);
		$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
		while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
			line = $iter23_nextval['$nextval'];
			$m['pygame']['draw']['line'](background, $p['tuple']([43, 50, 58]), $p['tuple']([line, 0]), $p['tuple']([line, 300]), 1);
		}
		matrix = $m['Matrix'](x, y, screen, background);
		control = $m['Control'](matrix);
		return $p['tuple']([matrix, control]);
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null,['x', 500],['y', 500],['screen', null]];
	$m['program_exec'] = function(matrix, control) {
		var quit;
		matrix['update_rect'] = $p['list']([]);
		matrix['update']();
		$m['pygame']['display']['update']($p['getattr'](matrix, 'update_rect'));
		matrix['clock']['tick'](30);
		quit = control['check_control']();
		return quit;
	};
	$m['program_exec']['__name__'] = 'program_exec';

	$m['program_exec']['__bind_type__'] = 0;
	$m['program_exec']['__args__'] = [null,null,['matrix'],['control']];
	$m['run'] = function() {

		$m['program_exec']((typeof matrix == "undefined"?$m['matrix']:matrix), (typeof control == "undefined"?$m['control']:control));
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	var $tupleassign12 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
	$m['matrix'] = $tupleassign12[0];
	$m['control'] = $tupleassign12[1];
	$m['main'] = function() {

		var $tupleassign13 = $p['__ass_unpack']($m['setup'](400, 300), 2, null);
		$m['matrix'] = $tupleassign13[0];
		$m['control'] = $tupleassign13[1];
		$m['pygame']['display']['setup']($m['run']);
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['main']();
	}
	return this;
}; /* end serpentduel */


/* end module: serpentduel */


/*
PYJS_DEPS: ['pyjsdl', 'random']
*/
