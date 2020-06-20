/* start module: pyjsdl.mouse */
$pyjs['loaded_modules']['pyjsdl.mouse'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mouse']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mouse'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mouse'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mouse>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mouse';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['mouse'] = $pyjs['loaded_modules']['pyjsdl.mouse'];


	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
	$m['cursors'] = $p['___import___']('pyjsdl.cursors', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Mouse'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mouse';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['mousePress'] = $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mousePress');
			self['mouseMove'] = $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMove');
			self['mouseMoveRel'] = $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMoveRel');
			self['_cursorVisible'] = true;
			self['_cursor'] = 'default';
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_pressed', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['tuple']([$p['getattr'](self, 'mousePress')['__getitem__'](0), $p['getattr'](self, 'mousePress')['__getitem__'](1), $p['getattr'](self, 'mousePress')['__getitem__'](2)]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_pressed'] = $method;
		$method = $pyjs__bind_method2('get_pos', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add3,$add1,$add4;
			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'mouseMove')['__getitem__']('x'), (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))))) {
				return $p['tuple']([$p['__op_add']($add1=$p['getattr'](self, 'mouseMove')['__getitem__']('x'),$add2=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add3=$p['getattr'](self, 'mouseMove')['__getitem__']('y'),$add4=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
			}
			else {
				return $p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_pos'] = $method;
		$method = $pyjs__bind_method2('get_rel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,rel,$sub3,$sub2,$sub1,$sub4;
			try {
				rel = $p['tuple']([$p['__op_sub']($sub1=$p['getattr'](self, 'mouseMove')['__getitem__']('x'),$sub2=$p['getattr'](self, 'mouseMoveRel')['__getitem__']('x')), $p['__op_sub']($sub3=$p['getattr'](self, 'mouseMove')['__getitem__']('y'),$sub4=$p['getattr'](self, 'mouseMoveRel')['__getitem__']('y'))]);
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]), 2, null);
				$p['getattr'](self, 'mouseMoveRel')['__setitem__']('x', $tupleassign1[0]);
				$p['getattr'](self, 'mouseMoveRel')['__setitem__']('y', $tupleassign1[1]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					rel = $p['tuple']([0, 0]);
					if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'mouseMove')['__getitem__']('x'), (typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2))))) {
						var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]), 2, null);
						$p['getattr'](self, 'mouseMoveRel')['__setitem__']('x', $tupleassign2[0]);
						$p['getattr'](self, 'mouseMoveRel')['__setitem__']('y', $tupleassign2[1]);
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return rel;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_rel'] = $method;
		$method = $pyjs__bind_method2('set_visible', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			var visible_pre;
			visible_pre = $p['getattr'](self, '_cursorVisible');
			if ($p['bool'](visible)) {
				$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', $p['getattr'](self, '_cursor'));
				self['_cursorVisible'] = true;
			}
			else {
				$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', 'none');
				self['_cursorVisible'] = false;
			}
			return visible_pre;
		}
	, 1, [null,null,['self'],['visible']]);
		$cls_definition['set_visible'] = $method;
		$method = $pyjs__bind_method2('set_cursor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var cursor = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var cursor = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var url,args,mask,hotspot,surface,fallback,data,size;
			args = $p['len'](cursor);
			if ($p['bool']($p['op_eq'](args, 1))) {
				self['_cursor'] = cursor['__getitem__'](0);
			}
			else if ($p['bool']($p['tuple']([2, 3])['__contains__'](args))) {
				if ($p['bool']($p['isinstance'](cursor['__getitem__'](0), $p['str']))) {
					url = cursor['__getitem__'](0);
				}
				else {
					url = cursor['__getitem__'](0)['toDataURL']();
				}
				hotspot = cursor['__getitem__'](1);
				if ($p['bool']($p['op_eq'](args, 2))) {
					fallback = 'default';
				}
				else {
					fallback = cursor['__getitem__'](2);
				}
				self['_cursor'] = $p['sprintf']('url("%s") %d %d, %s', $p['tuple']([url, hotspot['__getitem__'](0), hotspot['__getitem__'](1), fallback]));
			}
			else if ($p['bool']($p['tuple']([4, 5])['__contains__'](args))) {
				size = cursor['__getitem__'](0);
				hotspot = cursor['__getitem__'](1);
				data = cursor['__getitem__'](2);
				mask = cursor['__getitem__'](3);
				if ($p['bool']($p['op_eq'](args, 4))) {
					fallback = 'default';
				}
				else {
					fallback = cursor['__getitem__'](4);
				}
				surface = $m['cursors']['create_cursor'](size, data, mask);
				url = surface['toDataURL']();
				self['_cursor'] = $p['sprintf']('url("%s") %d %d, %s', $p['tuple']([url, hotspot['__getitem__'](0), hotspot['__getitem__'](1), fallback]));
			}
			else {
				self['_cursor'] = 'default';
			}
			if ($p['bool']($p['getattr'](self, '_cursorVisible'))) {
				$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', $p['getattr'](self, '_cursor'));
			}
			return null;
		}
	, 1, ['cursor',null,['self']]);
		$cls_definition['set_cursor'] = $method;
		$method = $pyjs__bind_method2('get_cursor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_cursor');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_cursor'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['set_pos'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return true;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_focused'] = $lambda2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Mouse', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.mouse */


/* end module: pyjsdl.mouse */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.cursors', 'pyjsdl.env']
*/
