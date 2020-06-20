/* start module: pyjsdl.pyjsarray */
$pyjs['loaded_modules']['pyjsdl.pyjsarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsarray';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['pyjsarray'] = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];


	$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
	$m['PyTypedArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length, typedarray) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
				typedarray = arguments[4];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			if (typeof typedarray == 'undefined') typedarray=arguments['callee']['__args__'][6][1];
			var $and1,$and2;
			if ($p['bool'](data)) {
				if ($p['bool']($p['isinstance'](data, $p['float_int']))) {
					if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
						self['__data'] = new typedarray(data);
					}
					else {
						self['__data'] = new typedarray(data['valueOf']());
					}
				}
				else if ($p['bool']($p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']])))) {
					if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
						self['__data'] = new typedarray(data['getArray']());
					}
					else {
						data = function(){
							var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,dat,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
						$iter1_iter = data;
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
							dat = $iter1_nextval['$nextval'];
							$collcomp1['append'](dat['valueOf']());
						}

	return $collcomp1;}();
						self['__data'] = new typedarray(data['getArray']());
					}
				}
				else if ($p['bool']($p['isinstance'](data, $m['PyTypedArray']))) {
					self['__data'] = new typedarray(data['__data']);
				}
				else {
					if ($p['bool'](($p['bool']($and1=(offset === null))?(length === null):$and1))) {
						self['__data'] = new typedarray(data);
					}
					else {
						if ($p['bool']((offset === null))) {
							offset = 0;
						}
						if ($p['bool']((length === null))) {
							self['__data'] = new typedarray(data, offset);
						}
						else {
							self['__data'] = new typedarray(data, offset, length);
						}
					}
				}
			}
			else {
				self['__data'] = null;
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null],['typedarray', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__data']['toString']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$add2,$add3,$add1,$add4;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					index = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||($p['bool'](($p['cmp'](index, $p['getattr']($p['getattr'](self, '__data'), 'length')) == -1)));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = self['__getitem__'](index);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							index = $p['__op_add']($add3=index,$add4=1);
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return $p['float_int'](self['__data'][index]);;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

			if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
self['__data'][index]=value;
			}
			else {
				value = value['valueOf']();
self['__data'][index]=value;
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__data'), 'length');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('set', function(data, offset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
			}
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];

			if ($p['bool']($p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']])))) {
				if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
					self['__data']['set'](data['getArray'](), offset);
				}
				else {
					data = function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,dat,$iter2_idx,$iter2_array;
	$collcomp2 = $p['list']();
					$iter2_iter = data;
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						dat = $iter2_nextval['$nextval'];
						$collcomp2['append'](dat['valueOf']());
					}

	return $collcomp2;}();
					self['__data']['set'](data['getArray'](), offset);
				}
			}
			else if ($p['bool']($p['isinstance'](data, $m['PyTypedArray']))) {
				self['__data']['set']($p['getattr'](data, '__data'), offset);
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['offset', 0]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('subarray', function(begin, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				begin = arguments[1];
				end = arguments[2];
			}
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
			var array,pytypedarray;
			if ($p['bool']((end === null))) {
				end = $p['getattr']($p['getattr'](self, '__data'), 'length');
			}
			array = self['__data']['subarray'](begin, end);
			pytypedarray = self['__class__']();
			pytypedarray['__data'] = array;
			return pytypedarray;
		}
	, 1, [null,null,['self'],['begin'],['end', null]]);
		$cls_definition['subarray'] = $method;
		$method = $pyjs__bind_method2('getLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__data'), 'length');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLength'] = $method;
		$method = $pyjs__bind_method2('getByteLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__data'), 'byteLength');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getByteLength'] = $method;
		$method = $pyjs__bind_method2('getBuffer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__data'), 'buffer');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBuffer'] = $method;
		$method = $pyjs__bind_method2('getByteOffset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__data'), 'byteOffset');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getByteOffset'] = $method;
		$method = $pyjs__bind_method2('getBytesPerElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__data'), 'BYTES_PER_ELEMENT');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBytesPerElement'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '__data');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('setArray', function(array) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
			}

			self['__data'] = array;
			return null;
		}
	, 1, [null,null,['self'],['array']]);
		$cls_definition['setArray'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyTypedArray', $p['tuple']($bases), $data);
	})();
	$m['PyUint8ClampedArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint8ClampedArray', $p['tuple']($bases), $data);
	})();
	$m['PyUint8Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8Array == "undefined"?$m['Uint8Array']:Uint8Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint8Array', $p['tuple']($bases), $data);
	})();
	$m['PyUint16Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint16Array == "undefined"?$m['Uint16Array']:Uint16Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint16Array', $p['tuple']($bases), $data);
	})();
	$m['PyUint32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint32Array == "undefined"?$m['Uint32Array']:Uint32Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyUint32Array', $p['tuple']($bases), $data);
	})();
	$m['PyInt8Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int8Array == "undefined"?$m['Int8Array']:Int8Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyInt8Array', $p['tuple']($bases), $data);
	})();
	$m['PyInt16Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int16Array == "undefined"?$m['Int16Array']:Int16Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyInt16Array', $p['tuple']($bases), $data);
	})();
	$m['PyInt32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int32Array == "undefined"?$m['Int32Array']:Int32Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyInt32Array', $p['tuple']($bases), $data);
	})();
	$m['PyFloat32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float32Array == "undefined"?$m['Float32Array']:Float32Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['__data'][index];;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyFloat32Array', $p['tuple']($bases), $data);
	})();
	$m['PyFloat64Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float64Array == "undefined"?$m['Float64Array']:Float64Array)}, self, data, offset, length]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['__data'][index];;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyFloat64Array', $p['tuple']($bases), $data);
	})();
	$m['PyCanvasPixelArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];

			$m['PyTypedArray']['__init__'](self, data, offset, length);
			self['_superArray'] = null;
			self['_superIndex'] = $p['tuple']([0, 0]);
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$add6,$add7,$add5,$add8;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[2] = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							$m['PyTypedArray']['__iter__'](self);
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
						}
					}
					else if ($generator_state[1]==0||$generator_state[1]==2) {
						$generator_state[1]=2;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = $p['getattr'](self, '_superIndex')['__getitem__'](0);
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '_superIndex')['__getitem__'](1)) == -1)));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = $p['getattr'](self, '_superArray')['__getitem__'](index);
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index = $p['__op_add']($add7=index,$add8=1);
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $add9,$add10;
			if ($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))) {
				return $m['PyTypedArray']['__getitem__'](self, index);
			}
			else {
				return self['_superArray']['__getitem__']($p['__op_add']($add9=index,$add10=$p['getattr'](self, '_superIndex')['__getitem__'](0)));
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $add12,$add11;
			if ($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))) {
				$m['PyTypedArray']['__setitem__'](self, index, value);
			}
			else {
				self['_superArray']['__setitem__']($p['__op_add']($add11=index,$add12=$p['getattr'](self, '_superIndex')['__getitem__'](0)), value);
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('set', function(data, offset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
			}
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			var index,$iter3_idx,$iter3_array,$add14,$add15,$add16,$iter3_iter,$add13,$iter3_type,$iter3_nextval;
			if ($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))) {
				$iter3_iter = $p['xrange']($p['len'](data));
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					index = $iter3_nextval['$nextval'];
					self['__setitem__']($p['__op_add']($add13=index,$add14=offset), data['__getitem__'](index));
				}
			}
			else {
				self['_superArray']['set'](data, $p['__op_add']($add15=offset,$add16=$p['getattr'](self, '_superIndex')['__getitem__'](0)));
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['offset', 0]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('subarray', function(begin, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				begin = arguments[1];
				end = arguments[2];
			}
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
			var array;
			if ($p['bool']((end === null))) {
				end = $p['getattr']($p['getattr'](self, '__data'), 'length');
			}
			array = self['__class__']();
			array['__data'] = $p['getattr'](self, '__data');
			array['_superArray'] = self;
			array['_superIndex'] = $p['tuple']([begin, end]);
			return array;
		}
	, 1, [null,null,['self'],['begin'],['end', null]]);
		$cls_definition['subarray'] = $method;
		var $bases = new Array($m['PyTypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyCanvasPixelArray', $p['tuple']($bases), $data);
	})();
	$m['Ndarray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__typedarray'] = $p['dict']([[0, $m['PyUint8ClampedArray']], [1, $m['PyUint8Array']], [2, $m['PyUint16Array']], [3, $m['PyUint32Array']], [4, $m['PyInt8Array']], [5, $m['PyInt16Array']], [6, $m['PyInt32Array']], [7, $m['PyFloat32Array']], [8, $m['PyFloat64Array']]]);
		$method = $pyjs__bind_method2('__init__', function(dim, dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
				dtype = arguments[2];
			}
			if (typeof dtype == 'undefined') dtype=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$iter5_idx,$div2,i,$iter4_nextval,$iter5_array,$iter4_idx,indices,$iter5_iter,$iter4_type,$iter4_array,$iter5_type,$div1,$iter4_iter,$mul2,$mul1,size;
			self['_dtype'] = dtype;
			if ($p['bool']($p['isinstance'](dim, $p['tuple']))) {
				size = 1;
				$iter4_iter = dim;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					i = $iter4_nextval['$nextval'];
					size = (typeof ($mul1=size)==typeof ($mul2=i) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
				}
				self['__data'] = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(size);
				self['_shape'] = dim;
				indices = $p['list']([]);
				$iter5_iter = $p['getattr'](self, '_shape');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					i = $iter5_nextval['$nextval'];
					size = (typeof ($div1=size)==typeof ($div2=i) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
					indices['append'](size);
				}
				self['_indices'] = $p['tuple'](indices);
			}
			else if ($p['bool']($p['isinstance'](dim, $p['float_int']))) {
				self['__data'] = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim);
				self['_shape'] = $p['tuple']([dim]);
				self['_indices'] = $p['tuple']([$p['getattr'](self, '_shape')['__getitem__'](0)]);
			}
			else if ($p['bool']($p['isinstance'](dim, $p['list']))) {
				self['__data'] = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim);
				self['_shape'] = $p['tuple']([$p['len'](dim)]);
				self['_indices'] = $p['tuple']([$p['getattr'](self, '_shape')['__getitem__'](0)]);
			}
			else {
				self['__data'] = dim;
				self['_shape'] = $p['tuple']([$p['len'](dim)]);
				self['_indices'] = $p['tuple']([$p['getattr'](self, '_shape')['__getitem__'](0)]);
			}
			return null;
		}
	, 1, [null,null,['self'],['dim'],['dtype', 8]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('shape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_shape');
		}
	, 1, [null,null,['self']]);
		$cls_definition['shape'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('shape', function(dim) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
			}

			self['setshape'](dim);
			return null;
		}
	, 1, [null,null,['self'],['dim']]);
		$cls_definition['shape'] = $cls_definition['shape']['setter']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var begin,end,indexLn,$mul8,$add19,shapeLn,$add17,$add20,subarray,$mul7,$sub2,$sub1,$add18,array;
			if ($p['bool']($p['hasattr'](index, '__len__'))) {
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([index['__len__'](), $p['len']($p['getattr'](self, '_shape'))]), 2, null);
				indexLn = $tupleassign1[0];
				shapeLn = $tupleassign1[1];
				if ($p['bool']($p['op_eq'](indexLn, shapeLn))) {
					return $p['getattr'](self, '__data')['__getitem__']($p['sum'](function(){
						var $iter6_idx,$iter6_type,$collcomp3,i,$iter6_array,$iter6_iter,$mul4,$mul3,$iter6_nextval;
	$collcomp3 = $p['list']();
					$iter6_iter = $p['range'](indexLn);
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						i = $iter6_nextval['$nextval'];
						$collcomp3['append']((typeof ($mul3=index['__getitem__'](i))==typeof ($mul4=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)));
					}

	return $collcomp3;}()));
				}
				else {
					begin = $p['sum'](function(){
						var $iter7_array,$iter7_nextval,i,$iter7_iter,$collcomp4,$iter7_idx,$mul6,$mul5,$iter7_type;
	$collcomp4 = $p['list']();
					$iter7_iter = $p['range'](indexLn);
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						i = $iter7_nextval['$nextval'];
						$collcomp4['append']((typeof ($mul5=index['__getitem__'](i))==typeof ($mul6=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)));
					}

	return $collcomp4;}());
					end = $p['__op_add']($add17=begin,$add18=$p['getattr'](self, '_indices')['__getitem__']($p['__op_sub']($sub1=indexLn,$sub2=1)));
					subarray = self['__data']['subarray'](begin, end);
					array = $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
					array['_shape'] = $p['__getslice']($p['getattr'](self, '_shape'), indexLn, null);
					array['_indices'] = $p['__getslice']($p['getattr'](self, '_indices'), indexLn, null);
					return array;
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, '_shape')), 1))) {
					return $p['getattr'](self, '__data')['__getitem__'](index);
				}
				else {
					begin = (typeof ($mul7=index)==typeof ($mul8=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8));
					end = $p['__op_add']($add19=begin,$add20=$p['getattr'](self, '_indices')['__getitem__'](0));
					subarray = self['__data']['subarray'](begin, end);
					array = $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
					array['_shape'] = $p['__getslice']($p['getattr'](self, '_shape'), 1, null);
					array['_indices'] = $p['__getslice']($p['getattr'](self, '_indices'), 1, null);
					return array;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var begin,$mul14,end,$mul13,$add21,indexLn,$add22,$add24,shapeLn,$sub3,subarray,unpack,$add23,$sub4;
			unpack = function(obj, lst) {
				if (typeof lst == 'undefined') lst=arguments['callee']['__args__'][3][1];
				var $iter8_type,$iter8_array,element,$iter8_iter,$iter8_nextval,$iter8_idx;
				if ($p['bool']((lst === null))) {
					lst = $p['list']([]);
				}
				$iter8_iter = obj;
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					element = $iter8_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](element, $p['tuple']([$p['list'], $p['tuple']])))) {
						unpack(element, lst);
					}
					else {
						lst['append'](element);
					}
				}
				return lst;
			};
			unpack['__name__'] = 'unpack';

			unpack['__bind_type__'] = 0;
			unpack['__args__'] = [null,null,['obj'],['lst', null]];
			if ($p['bool']($p['hasattr'](index, '__len__'))) {
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([index['__len__'](), $p['len']($p['getattr'](self, '_shape'))]), 2, null);
				indexLn = $tupleassign2[0];
				shapeLn = $tupleassign2[1];
				if ($p['bool']($p['op_eq'](indexLn, shapeLn))) {
					$p['getattr'](self, '__data')['__setitem__']($p['sum'](function(){
						var $iter9_iter,i,$collcomp5,$mul10,$iter9_nextval,$iter9_idx,$iter9_type,$mul9,$iter9_array;
	$collcomp5 = $p['list']();
					$iter9_iter = $p['range'](indexLn);
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						i = $iter9_nextval['$nextval'];
						$collcomp5['append']((typeof ($mul9=index['__getitem__'](i))==typeof ($mul10=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul9=='number'?
							$mul9*$mul10:
							$p['op_mul']($mul9,$mul10)));
					}

	return $collcomp5;}()), value);
				}
				else {
					begin = $p['sum'](function(){
						var $iter10_nextval,$mul12,$mul11,i,$collcomp6,$iter10_idx,$iter10_array,$iter10_type,$iter10_iter;
	$collcomp6 = $p['list']();
					$iter10_iter = $p['range'](indexLn);
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						i = $iter10_nextval['$nextval'];
						$collcomp6['append']((typeof ($mul11=index['__getitem__'](i))==typeof ($mul12=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul11=='number'?
							$mul11*$mul12:
							$p['op_mul']($mul11,$mul12)));
					}

	return $collcomp6;}());
					end = $p['__op_add']($add21=begin,$add22=$p['getattr'](self, '_indices')['__getitem__']($p['__op_sub']($sub3=indexLn,$sub4=1)));
					subarray = self['__data']['subarray'](begin, end);
					if ($p['bool']($p['isinstance'](value, $m['Ndarray']))) {
						value = $p['getattr'](value, '__data');
					}
					else {
						if ($p['bool']($p['isinstance'](value['__getitem__'](0), $p['tuple']([$p['list'], $p['tuple']])))) {
							value = unpack(value);
						}
					}
					subarray['set'](value);
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, '_shape')), 1))) {
					$p['getattr'](self, '__data')['__setitem__'](index, value);
				}
				else {
					begin = (typeof ($mul13=index)==typeof ($mul14=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14));
					end = $p['__op_add']($add23=begin,$add24=$p['getattr'](self, '_indices')['__getitem__'](0));
					subarray = self['__data']['subarray'](begin, end);
					if ($p['bool']($p['isinstance'](value, $m['Ndarray']))) {
						value = $p['getattr'](value, '__data');
					}
					else {
						if ($p['bool']($p['isinstance'](value['__getitem__'](0), $p['tuple']([$p['list'], $p['tuple']])))) {
							value = unpack(value);
						}
					}
					subarray['set'](value);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}
			var subarray;
			subarray = self['__data']['subarray'](lower, upper);
			return $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var subarray;
			subarray = self['__data']['subarray'](lower, upper);
			subarray['set'](data);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var array,$mul18,$add29,index,end,$add25,$add27,$add26,subarray,begin,$add28,$mul17,$mul16,$mul15,$add32,$add33,$add30,$add31,$add36,$add34,$add35;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[2] = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool'](($p['cmp']($p['len']($p['getattr'](self, '_shape')), 1) == 1))))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = 0;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '_shape')['__getitem__'](0)) == -1)));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									begin = (typeof ($mul17=index)==typeof ($mul18=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul17=='number'?
										$mul17*$mul18:
										$p['op_mul']($mul17,$mul18));
									end = $p['__op_add']($add31=begin,$add32=$p['getattr'](self, '_indices')['__getitem__'](0));
									subarray = self['__data']['subarray'](begin, end);
									array = $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
									array['_shape'] = $p['__getslice']($p['getattr'](self, '_shape'), 1, null);
									array['_indices'] = $p['__getslice']($p['getattr'](self, '_indices'), 1, null);
									$yield_value = array;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index = $p['__op_add']($add33=index,$add34=1);
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					else if ($generator_state[1]==0||$generator_state[1]==2) {
						$generator_state[1]=2;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = 0;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '_shape')['__getitem__'](0)) == -1)));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = $p['getattr'](self, '__data')['__getitem__'](index);
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index = $p['__op_add']($add35=index,$add36=1);
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var alst,tab,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$add40,$pyjs_try_err,array_str,$add50,$add52,count,$add51,$add38,$add39,i,$add37,$add45;
			array_str = function(array, width, strval) {
				var a,$iter12_type,alst,$iter12_array,$iter12_iter,$iter12_idx,$iter12_nextval;
				alst = $p['list']([]);
				if ($p['bool']($p['op_eq']($p['len']($p['getattr'](array, '_shape')), 1))) {
					alst['append']('[');
					alst['extend'](function(){
						var val,$collcomp7,$iter11_iter,$iter11_type,$mod2,$mod1,$iter11_array,$iter11_nextval,$iter11_idx;
	$collcomp7 = $p['list']();
					$iter11_iter = array;
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						val = $iter11_nextval['$nextval'];
						$collcomp7['append']((typeof ($mod1=strval)==typeof ($mod2=$p['tuple']([width, val])) && typeof $mod1=='number'?
							(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
							$p['op_mod']($mod1,$mod2)));
					}

	return $collcomp7;}());
					alst['__setitem__']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)), alst['__getitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)))['rstrip']());
					alst['append'](']');
				}
				else {
					alst['append']('[');
					$iter12_iter = array;
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						a = $iter12_nextval['$nextval'];
						alst['extend'](array_str(a, width, strval));
					}
					alst['append'](']');
				}
				return alst;
			};
			array_str['__name__'] = 'array_str';

			array_str['__bind_type__'] = 0;
			array_str['__args__'] = [null,null,['array'],['width'],['strval']];
			if ($p['bool'](($p['cmp']($p['getattr'](self, '_dtype'), 7) == -1))) {
				alst = array_str(self, $p['len']($p['str']($p['max'](function(){
					var $iter13_nextval,$iter13_iter,i,$collcomp8,$iter13_type,$iter13_idx,$iter13_array;
	$collcomp8 = $p['list']();
				$iter13_iter = $p['getattr'](self, '__data');
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					i = $iter13_nextval['$nextval'];
					$collcomp8['append'](i);
				}

	return $collcomp8;}()))), '%*d ');
			}
			else {
				alst = array_str(self, $p['__op_add']($add37=$p['len']($p['str']($p['max'](function(){
					var $iter14_array,$iter14_type,$collcomp9,i,$iter14_iter,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
				$iter14_iter = $p['getattr'](self, '__data');
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					i = $iter14_nextval['$nextval'];
					$collcomp9['append'](i);
				}

	return $collcomp9;}()))),$add38=7), '%*f ');
			}
			tab = $p['len']($p['getattr'](self, '_shape'));
			i = tab;
			while ($p['bool'](true)) {
				try {
					i = alst['index']('[', i);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						break;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				count = 0;
				while ($p['bool'](true)) {
					if ($p['bool']($p['op_eq'](alst['__getitem__']($p['__op_add']($add39=i,$add40=count)), '['))) {
						count = $p['__op_add']($add41=count,$add42=1);
						continue;
					}
					else {
						if ($p['bool']($p['op_eq'](count, 1))) {
							alst['__setitem__'](i, $p['__op_add']($add45=$p['__op_add']($add43='\n',$add44=''['join'](function(){
								var $iter15_iter,$sub6,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,x,$collcomp10,$sub5;
	$collcomp10 = $p['list']();
							$iter15_iter = $p['range']($p['__op_sub']($sub5=tab,$sub6=count));
							$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
							while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
								x = $iter15_nextval['$nextval'];
								$collcomp10['append'](' ');
							}

	return $collcomp10;}())),$add46=alst['__getitem__'](i)));
						}
						else {
							alst['__setitem__'](i, $p['__op_add']($add49=$p['__op_add']($add47='\n\n',$add48=''['join'](function(){
								var $iter16_array,$iter16_type,$sub7,$iter16_idx,$sub8,$collcomp11,x,$iter16_nextval,$iter16_iter;
	$collcomp11 = $p['list']();
							$iter16_iter = $p['range']($p['__op_sub']($sub7=tab,$sub8=count));
							$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
							while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
								x = $iter16_nextval['$nextval'];
								$collcomp11['append'](' ');
							}

	return $collcomp11;}())),$add50=alst['__getitem__'](i)));
						}
						i = $p['__op_add']($add51=i,$add52=count);
						break;
					}
				}
			}
			return ''['join'](alst);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_shape')['__getitem__'](0);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter17_nextval,$iter18_type,$iter18_iter,$iter17_iter,$add54,$add53,$iter18_array,i,$iter17_array,$iter18_idx,$add56,$iter17_idx,$iter17_type,array,$iter18_nextval,ndarray,$add55;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter17_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					i = $iter17_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add53=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add54=other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter18_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						i = $iter18_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add55=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add56=$p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$iter19_type,i,$sub12,$sub10,$sub9,$iter19_array,$iter19_iter,$iter19_nextval,$iter20_type,array,$sub11,ndarray,$iter20_array;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter19_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
				while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
					i = $iter19_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub9=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub10=other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter20_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						i = $iter20_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub11=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub12=$p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter21_idx,$iter22_array,i,$iter21_nextval,$iter22_nextval,$iter22_type,$mul19,$iter22_idx,$iter21_type,$iter21_iter,$mul20,$iter21_array,array,$mul21,$mul22,ndarray,$iter22_iter;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter21_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
				while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
					i = $iter21_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul19=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul20=other) && typeof $mul19=='number'?
						$mul19*$mul20:
						$p['op_mul']($mul19,$mul20)));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter22_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
					while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
						i = $iter22_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul21=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul22=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul21=='number'?
							$mul21*$mul22:
							$p['op_mul']($mul21,$mul22)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__div__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter23_type,$iter23_nextval,$iter24_nextval,$iter23_iter,$iter24_array,$iter24_type,i,$iter23_array,$div4,$div3,$iter23_idx,array,$div5,$div6,$iter24_iter,ndarray,$iter24_idx;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter23_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
				while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
					i = $iter23_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div3=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div4=other) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter24_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
					while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
						i = $iter24_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div5=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div6=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__div__'] = $method;
		$method = $pyjs__bind_method2('add', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter26_nextval,$iter26_type,$add60,$iter25_nextval,i,$add59,$add57,$iter25_iter,$add58,$iter26_idx,$iter25_idx,$iter26_array,array,$iter26_iter,$iter25_type,$iter25_array,ndarray;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter25_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					i = $iter25_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add57=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add58=other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter26_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
					while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
						i = $iter26_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add59=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add60=$p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('sub', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter27_nextval,i,$iter28_array,$iter27_array,$iter28_idx,$sub16,$sub15,$sub14,$iter27_idx,$iter27_iter,$iter27_type,$iter28_iter,array,$iter28_type,$sub13,$iter28_nextval,ndarray;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter27_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
				while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
					i = $iter27_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub13=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub14=other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter28_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
					while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
						i = $iter28_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub15=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub16=$p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['sub'] = $method;
		$method = $pyjs__bind_method2('mul', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter30_type,$mul24,$iter30_nextval,$iter29_type,$iter29_iter,$iter29_idx,$mul23,i,$iter29_nextval,$iter30_array,$iter29_array,$mul26,$iter30_idx,array,$mul25,ndarray,$iter30_iter;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter29_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
				while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
					i = $iter29_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul23=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul24=other) && typeof $mul23=='number'?
						$mul23*$mul24:
						$p['op_mul']($mul23,$mul24)));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter30_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
					while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
						i = $iter30_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul25=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul26=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul25=='number'?
							$mul25*$mul26:
							$p['op_mul']($mul25,$mul26)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['mul'] = $method;
		$method = $pyjs__bind_method2('div', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter32_idx,$iter31_array,i,$div10,$iter32_nextval,$iter31_nextval,$iter31_idx,$iter32_iter,$iter32_type,$div8,$iter31_type,$iter32_array,$div9,array,$div7,ndarray,$iter31_iter;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter31_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
				while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
					i = $iter31_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div7=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div8=other) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter32_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
					while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
						i = $iter32_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div9=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div10=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div9=='number' && $div10 !== 0?
							$div9/$div10:
							$p['op_div']($div9,$div10)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['div'] = $method;
		$method = $pyjs__bind_method2('iadd', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter33_iter,$iter33_nextval,$iter33_type,$add61,$add63,$add62,i,$add64,$iter34_nextval,$iter34_array,$iter34_iter,$iter34_idx,$iter33_idx,$iter34_type,$iter33_array;
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter33_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
				while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
					i = $iter33_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_add']($add61=$p['getattr'](self, '__data')['__getitem__'](i),$add62=other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter34_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
					while (typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
						i = $iter34_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_add']($add63=$p['getattr'](self, '__data')['__getitem__'](i),$add64=$p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['iadd'] = $method;
		$method = $pyjs__bind_method2('isub', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $sub19,$sub18,i,$iter35_idx,$iter35_nextval,$iter36_nextval,$sub17,$sub20,$iter36_iter,$iter35_type,$iter36_idx,$iter35_array,$iter35_iter,$iter36_type,$iter36_array;
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter35_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter35_nextval=$p['__iter_prepare']($iter35_iter,false);
				while (typeof($p['__wrapped_next']($iter35_nextval)['$nextval']) != 'undefined') {
					i = $iter35_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_sub']($sub17=$p['getattr'](self, '__data')['__getitem__'](i),$sub18=other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter36_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter36_nextval=$p['__iter_prepare']($iter36_iter,false);
					while (typeof($p['__wrapped_next']($iter36_nextval)['$nextval']) != 'undefined') {
						i = $iter36_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_sub']($sub19=$p['getattr'](self, '__data')['__getitem__'](i),$sub20=$p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isub'] = $method;
		$method = $pyjs__bind_method2('imul', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter38_iter,$iter37_idx,i,$iter38_idx,$iter38_nextval,$iter37_iter,$iter37_array,$mul30,$mul28,$mul29,$mul27,$iter38_type,$iter37_type,$iter38_array,$iter37_nextval;
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter37_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter37_nextval=$p['__iter_prepare']($iter37_iter,false);
				while (typeof($p['__wrapped_next']($iter37_nextval)['$nextval']) != 'undefined') {
					i = $iter37_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($mul27=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($mul28=other) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28)));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter38_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter38_nextval=$p['__iter_prepare']($iter38_iter,false);
					while (typeof($p['__wrapped_next']($iter38_nextval)['$nextval']) != 'undefined') {
						i = $iter38_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($mul29=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($mul30=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul29=='number'?
							$mul29*$mul30:
							$p['op_mul']($mul29,$mul30)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['imul'] = $method;
		$method = $pyjs__bind_method2('idiv', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter39_idx,i,$iter40_array,$iter39_array,$div12,$iter39_type,$div13,$iter39_nextval,$div11,$iter39_iter,$iter40_iter,$iter40_nextval,$iter40_idx,$div14,$iter40_type;
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter39_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter39_nextval=$p['__iter_prepare']($iter39_iter,false);
				while (typeof($p['__wrapped_next']($iter39_nextval)['$nextval']) != 'undefined') {
					i = $iter39_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($div11=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($div12=other) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12)));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter40_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter40_nextval=$p['__iter_prepare']($iter40_iter,false);
					while (typeof($p['__wrapped_next']($iter40_nextval)['$nextval']) != 'undefined') {
						i = $iter40_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($div13=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($div14=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div13=='number' && $div14 !== 0?
							$div13/$div14:
							$p['op_div']($div13,$div14)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['idiv'] = $method;
		$method = $pyjs__bind_method2('bitwise_and', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter42_idx,$iter41_array,$iter42_type,i,$iter42_nextval,$iter42_array,$iter42_iter,$iter41_type,$iter41_nextval,$iter41_iter,$iter41_idx,array,ndarray;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter41_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter41_nextval=$p['__iter_prepare']($iter41_iter,false);
				while (typeof($p['__wrapped_next']($iter41_nextval)['$nextval']) != 'undefined') {
					i = $iter41_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, ($p['getattr'](ndarray, '__data')['__getitem__'](i))&(other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter42_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter42_nextval=$p['__iter_prepare']($iter42_iter,false);
					while (typeof($p['__wrapped_next']($iter42_nextval)['$nextval']) != 'undefined') {
						i = $iter42_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, ($p['getattr'](ndarray, '__data')['__getitem__'](i))&($p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_and'] = $method;
		$method = $pyjs__bind_method2('bitwise_or', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter43_type,$iter44_type,$iter43_iter,$iter43_array,$iter44_idx,i,$iter44_array,$iter44_iter,$iter43_idx,$iter44_nextval,array,$iter43_nextval,ndarray;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter43_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter43_nextval=$p['__iter_prepare']($iter43_iter,false);
				while (typeof($p['__wrapped_next']($iter43_nextval)['$nextval']) != 'undefined') {
					i = $iter43_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, ($p['getattr'](ndarray, '__data')['__getitem__'](i))|(other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter44_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter44_nextval=$p['__iter_prepare']($iter44_iter,false);
					while (typeof($p['__wrapped_next']($iter44_nextval)['$nextval']) != 'undefined') {
						i = $iter44_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, ($p['getattr'](ndarray, '__data')['__getitem__'](i))|($p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_or'] = $method;
		$method = $pyjs__bind_method2('bitwise_xor', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter46_array,$iter45_iter,i,$iter46_iter,$iter45_type,$iter45_nextval,$iter46_nextval,$iter46_idx,$iter45_array,$iter45_idx,array,ndarray,$iter46_type;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter45_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter45_nextval=$p['__iter_prepare']($iter45_iter,false);
				while (typeof($p['__wrapped_next']($iter45_nextval)['$nextval']) != 'undefined') {
					i = $iter45_nextval['$nextval'];
					$p['getattr'](ndarray, '__data')['__setitem__'](i, ($p['getattr'](ndarray, '__data')['__getitem__'](i))^(other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter46_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter46_nextval=$p['__iter_prepare']($iter46_iter,false);
					while (typeof($p['__wrapped_next']($iter46_nextval)['$nextval']) != 'undefined') {
						i = $iter46_nextval['$nextval'];
						$p['getattr'](ndarray, '__data')['__setitem__'](i, ($p['getattr'](ndarray, '__data')['__getitem__'](i))^($p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_xor'] = $method;
		$method = $pyjs__bind_method2('bitwise_iand', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter48_nextval,$iter47_idx,$iter48_iter,i,$iter47_type,$iter48_array,$iter48_idx,$iter47_nextval,$iter47_array,$iter48_type,$iter47_iter;
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter47_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter47_nextval=$p['__iter_prepare']($iter47_iter,false);
				while (typeof($p['__wrapped_next']($iter47_nextval)['$nextval']) != 'undefined') {
					i = $iter47_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, ($p['getattr'](self, '__data')['__getitem__'](i))&(other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter48_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter48_nextval=$p['__iter_prepare']($iter48_iter,false);
					while (typeof($p['__wrapped_next']($iter48_nextval)['$nextval']) != 'undefined') {
						i = $iter48_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](i, ($p['getattr'](self, '__data')['__getitem__'](i))&($p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_iand'] = $method;
		$method = $pyjs__bind_method2('bitwise_ior', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter50_idx,$iter49_type,i,$iter50_type,$iter49_array,$iter49_iter,$iter50_nextval,$iter50_array,$iter49_idx,$iter49_nextval,$iter50_iter;
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter49_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter49_nextval=$p['__iter_prepare']($iter49_iter,false);
				while (typeof($p['__wrapped_next']($iter49_nextval)['$nextval']) != 'undefined') {
					i = $iter49_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, ($p['getattr'](self, '__data')['__getitem__'](i))|(other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter50_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter50_nextval=$p['__iter_prepare']($iter50_iter,false);
					while (typeof($p['__wrapped_next']($iter50_nextval)['$nextval']) != 'undefined') {
						i = $iter50_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](i, ($p['getattr'](self, '__data')['__getitem__'](i))|($p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_ior'] = $method;
		$method = $pyjs__bind_method2('bitwise_ixor', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter51_array,$iter52_iter,i,$iter52_idx,$iter51_iter,$iter51_nextval,$iter52_nextval,$iter52_type,$iter51_idx,$iter52_array,$iter51_type;
			if ($p['bool'](!$p['bool']($p['hasattr'](other, '__iter__')))) {
				$iter51_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter51_nextval=$p['__iter_prepare']($iter51_iter,false);
				while (typeof($p['__wrapped_next']($iter51_nextval)['$nextval']) != 'undefined') {
					i = $iter51_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, ($p['getattr'](self, '__data')['__getitem__'](i))^(other));
				}
			}
			else {
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
					$iter52_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter52_nextval=$p['__iter_prepare']($iter52_iter,false);
					while (typeof($p['__wrapped_next']($iter52_nextval)['$nextval']) != 'undefined') {
						i = $iter52_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](i, ($p['getattr'](self, '__data')['__getitem__'](i))^($p['getattr'](other, '__data')['__getitem__'](i)));
					}
				}
				else {
					throw ($p['TypeError']('array shapes are not compatible'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['bitwise_ixor'] = $method;
		$method = $pyjs__bind_method2('bitwise_not', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter53_type,$iter53_idx,i,$iter53_array,$iter53_iter,$iter53_nextval,array,ndarray;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			$iter53_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
			$iter53_nextval=$p['__iter_prepare']($iter53_iter,false);
			while (typeof($p['__wrapped_next']($iter53_nextval)['$nextval']) != 'undefined') {
				i = $iter53_nextval['$nextval'];
				$p['getattr'](ndarray, '__data')['__setitem__'](i, ~($p['getattr'](self, '__data')['__getitem__'](i)));
			}
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['bitwise_not'] = $method;
		$method = $pyjs__bind_method2('setshape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var dim = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var dim = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter56_array,size,$div15,$iter54_idx,$iter55_iter,$iter55_nextval,$iter54_nextval,$iter54_type,$iter54_iter,$iter56_idx,$iter55_array,$iter56_type,$iter56_nextval,$iter56_iter,$iter55_idx,$iter54_array,array_size,i,$iter55_type,indices,$mul34,$mul31,$div16,$mul33,$mul32;
			if ($p['bool']($p['isinstance'](dim['__getitem__'](0), $p['tuple']))) {
				dim = dim['__getitem__'](0);
			}
			size = 1;
			$iter54_iter = dim;
			$iter54_nextval=$p['__iter_prepare']($iter54_iter,false);
			while (typeof($p['__wrapped_next']($iter54_nextval)['$nextval']) != 'undefined') {
				i = $iter54_nextval['$nextval'];
				size = (typeof ($mul31=size)==typeof ($mul32=i) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32));
			}
			array_size = 1;
			$iter55_iter = $p['getattr'](self, '_shape');
			$iter55_nextval=$p['__iter_prepare']($iter55_iter,false);
			while (typeof($p['__wrapped_next']($iter55_nextval)['$nextval']) != 'undefined') {
				i = $iter55_nextval['$nextval'];
				array_size = (typeof ($mul33=array_size)==typeof ($mul34=i) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34));
			}
			if ($p['bool'](!$p['op_eq'](size, array_size))) {
				throw ($p['TypeError']('array size cannot change'));
			}
			self['_shape'] = dim;
			indices = $p['list']([]);
			$iter56_iter = $p['getattr'](self, '_shape');
			$iter56_nextval=$p['__iter_prepare']($iter56_iter,false);
			while (typeof($p['__wrapped_next']($iter56_nextval)['$nextval']) != 'undefined') {
				i = $iter56_nextval['$nextval'];
				size = (typeof ($div15=size)==typeof ($div16=i) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16));
				indices['append'](size);
			}
			self['_indices'] = $p['tuple'](indices);
			return null;
		}
	, 1, ['dim',null,['self']]);
		$cls_definition['setshape'] = $method;
		$method = $pyjs__bind_method2('getshape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_shape');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getshape'] = $method;
		$method = $pyjs__bind_method2('reshape', function(dim) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
			}
			var array,$iter57_idx,size,$div18,$iter59_iter,$div17,$iter57_iter,subarray,$iter57_array,$iter58_array,$iter58_type,$iter59_array,$mul35,$iter58_iter,$iter58_idx,$iter58_nextval,$iter57_type,array_size,i,$iter59_idx,$mul38,$iter59_nextval,$iter59_type,indices,$mul37,$mul36,$iter57_nextval;
			size = 1;
			$iter57_iter = dim;
			$iter57_nextval=$p['__iter_prepare']($iter57_iter,false);
			while (typeof($p['__wrapped_next']($iter57_nextval)['$nextval']) != 'undefined') {
				i = $iter57_nextval['$nextval'];
				size = (typeof ($mul35=size)==typeof ($mul36=i) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36));
			}
			array_size = 1;
			$iter58_iter = $p['getattr'](self, '_shape');
			$iter58_nextval=$p['__iter_prepare']($iter58_iter,false);
			while (typeof($p['__wrapped_next']($iter58_nextval)['$nextval']) != 'undefined') {
				i = $iter58_nextval['$nextval'];
				array_size = (typeof ($mul37=array_size)==typeof ($mul38=i) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38));
			}
			if ($p['bool'](!$p['op_eq'](size, array_size))) {
				throw ($p['TypeError']('array size cannot change'));
			}
			subarray = self['__data']['subarray'](0);
			array = $m['Ndarray'](subarray);
			array['_shape'] = dim;
			indices = $p['list']([]);
			$iter59_iter = $p['getattr'](array, '_shape');
			$iter59_nextval=$p['__iter_prepare']($iter59_iter,false);
			while (typeof($p['__wrapped_next']($iter59_nextval)['$nextval']) != 'undefined') {
				i = $iter59_nextval['$nextval'];
				size = (typeof ($div17=size)==typeof ($div18=i) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18));
				indices['append'](size);
			}
			array['_indices'] = $p['tuple'](indices);
			return array;
		}
	, 1, [null,null,['self'],['dim']]);
		$cls_definition['reshape'] = $method;
		$method = $pyjs__bind_method2('set', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter67_array,$iter68_idx,index,dataLn,$iter66_iter,$iter67_type,$iter65_array,$iter67_iter,$iter65_type,$iter67_idx,$iter67_nextval,$iter68_type,$iter65_nextval,$iter66_idx,$iter66_nextval,$iter65_iter,$iter68_array,$iter65_idx,$iter68_iter,$iter68_nextval,$iter66_type,$iter66_array;
			if ($p['bool']($p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']])))) {
				if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
					if ($p['bool']($p['isinstance'](data['__getitem__'](0), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']])))) {
						data = function(){
							var $iter61_array,$iter61_type,$iter60_iter,$iter60_array,value,$iter60_idx,dat,$collcomp12,$iter60_nextval,$iter60_type,$iter61_iter,$iter61_idx,$iter61_nextval;
	$collcomp12 = $p['list']();
						$iter60_iter = data;
						$iter60_nextval=$p['__iter_prepare']($iter60_iter,false);
						while (typeof($p['__wrapped_next']($iter60_nextval)['$nextval']) != 'undefined') {
							dat = $iter60_nextval['$nextval'];
							$iter61_iter = dat;
							$iter61_nextval=$p['__iter_prepare']($iter61_iter,false);
							while (typeof($p['__wrapped_next']($iter61_nextval)['$nextval']) != 'undefined') {
								value = $iter61_nextval['$nextval'];
								$collcomp12['append'](value);
							}
						}

	return $collcomp12;}();
					}
				}
				else {
					if ($p['bool'](!$p['bool']($p['isinstance'](data['__getitem__'](0), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]))))) {
						data = function(){
							var $iter62_nextval,$iter62_iter,dat,$iter62_array,$collcomp13,$iter62_idx,$iter62_type;
	$collcomp13 = $p['list']();
						$iter62_iter = data;
						$iter62_nextval=$p['__iter_prepare']($iter62_iter,false);
						while (typeof($p['__wrapped_next']($iter62_nextval)['$nextval']) != 'undefined') {
							dat = $iter62_nextval['$nextval'];
							$collcomp13['append'](dat['valueOf']());
						}

	return $collcomp13;}();
					}
					else {
						data = function(){
							var $iter63_array,dat,$iter63_type,$iter64_iter,$iter64_type,value,$iter63_idx,$collcomp14,$iter64_array,$iter63_nextval,$iter64_nextval,$iter64_idx,$iter63_iter;
	$collcomp14 = $p['list']();
						$iter63_iter = data;
						$iter63_nextval=$p['__iter_prepare']($iter63_iter,false);
						while (typeof($p['__wrapped_next']($iter63_nextval)['$nextval']) != 'undefined') {
							dat = $iter63_nextval['$nextval'];
							$iter64_iter = dat;
							$iter64_nextval=$p['__iter_prepare']($iter64_iter,false);
							while (typeof($p['__wrapped_next']($iter64_nextval)['$nextval']) != 'undefined') {
								value = $iter64_nextval['$nextval'];
								$collcomp14['append'](value['valueOf']());
							}
						}

	return $collcomp14;}();
					}
				}
				dataLn = $p['len'](data);
				data = data['getArray']();
			}
			else if ($p['bool']($p['isinstance'](data, $p['tuple']([$m['Ndarray'], $m['PyTypedArray']])))) {
				data = data['getArray']();
				dataLn = $p['getattr'](data, 'length');
			}
			else {
				if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
					$iter65_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
					$iter65_nextval=$p['__iter_prepare']($iter65_iter,false);
					while (typeof($p['__wrapped_next']($iter65_nextval)['$nextval']) != 'undefined') {
						index = $iter65_nextval['$nextval'];
self['__data']['__data'][index]=data;
					}
				}
				else {
					data = data['valueOf']();
					$iter66_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
					$iter66_nextval=$p['__iter_prepare']($iter66_iter,false);
					while (typeof($p['__wrapped_next']($iter66_nextval)['$nextval']) != 'undefined') {
						index = $iter66_nextval['$nextval'];
self['__data']['__data'][index]=data;
					}
				}
				return null;
			}
			if ($p['bool']($p['op_eq'](dataLn, $p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length')))) {
				$iter67_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
				$iter67_nextval=$p['__iter_prepare']($iter67_iter,false);
				while (typeof($p['__wrapped_next']($iter67_nextval)['$nextval']) != 'undefined') {
					index = $iter67_nextval['$nextval'];
self['__data']['__data'][index]=data[index];
				}
			}
			else {
				$iter68_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
				$iter68_nextval=$p['__iter_prepare']($iter68_iter,false);
				while (typeof($p['__wrapped_next']($iter68_nextval)['$nextval']) != 'undefined') {
					index = $iter68_nextval['$nextval'];
self['__data']['__data'][index]=data[index%dataLn];
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('fill', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $iter70_array,index,$iter70_type,$iter69_idx,$iter69_type,$iter70_idx,$iter69_nextval,$iter70_nextval,$iter69_array,$iter70_iter,$iter69_iter;
			if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
				$iter69_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
				$iter69_nextval=$p['__iter_prepare']($iter69_iter,false);
				while (typeof($p['__wrapped_next']($iter69_nextval)['$nextval']) != 'undefined') {
					index = $iter69_nextval['$nextval'];
self['__data']['__data'][index]=value;
				}
			}
			else {
				value = value['valueOf']();
				$iter70_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
				$iter70_nextval=$p['__iter_prepare']($iter70_iter,false);
				while (typeof($p['__wrapped_next']($iter70_nextval)['$nextval']) != 'undefined') {
					index = $iter70_nextval['$nextval'];
self['__data']['__data'][index]=value;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var array,ndarray;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('astype', function(dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dtype = arguments[1];
			}
			var array,ndarray;
			array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)($p['getattr'](self, '__data'));
			ndarray = $m['Ndarray'](array, dtype);
			ndarray['_shape'] = $p['getattr'](self, '_shape');
			ndarray['_indices'] = $p['getattr'](self, '_indices');
			return ndarray;
		}
	, 1, [null,null,['self'],['dtype']]);
		$cls_definition['astype'] = $method;
		$method = $pyjs__bind_method2('view', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var subarray,array;
			subarray = self['__data']['subarray'](0);
			array = $m['Ndarray'](subarray);
			array['_shape'] = $p['getattr'](self, '_shape');
			array['_indices'] = $p['getattr'](self, '_indices');
			return array;
		}
	, 1, [null,null,['self']]);
		$cls_definition['view'] = $method;
		$method = $pyjs__bind_method2('swapaxes', function(axis1, axis2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				axis1 = arguments[1];
				axis2 = arguments[2];
			}
			var shape,indices,array;
			array = $m['Ndarray']($p['getattr'](self, '__data'), $p['getattr'](self, '_dtype'));
			shape = $p['list']($p['getattr'](self, '_shape'));
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([shape['__getitem__'](axis2), shape['__getitem__'](axis1)]), 2, null);
			shape['__setitem__'](axis1, $tupleassign3[0]);
			shape['__setitem__'](axis2, $tupleassign3[1]);
			array['_shape'] = $p['tuple'](shape);
			indices = $p['list']($p['getattr'](self, '_indices'));
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([indices['__getitem__'](axis2), indices['__getitem__'](axis1)]), 2, null);
			indices['__setitem__'](axis1, $tupleassign4[0]);
			indices['__setitem__'](axis2, $tupleassign4[1]);
			array['_indices'] = $p['tuple'](indices);
			return array;
		}
	, 1, [null,null,['self'],['axis1'],['axis2']]);
		$cls_definition['swapaxes'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__data']['getArray']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Ndarray', $p['tuple']($bases), $data);
	})();
	$m['NP'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('zeros', function(size, dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				dtype = arguments[2];
			}

			if ($p['bool']($p['op_eq'](dtype, 'i'))) {
				dtype = 3;
			}
			return $m['Ndarray'](size, dtype);
		}
	, 1, [null,null,['self'],['size'],['dtype']]);
		$cls_definition['zeros'] = $method;
		$method = $pyjs__bind_method2('swapaxes', function(array, axis1, axis2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
				axis1 = arguments[2];
				axis2 = arguments[3];
			}

			return array['swapaxes'](axis1, axis2);
		}
	, 1, [null,null,['self'],['array'],['axis1'],['axis2']]);
		$cls_definition['swapaxes'] = $method;
		$method = $pyjs__bind_method2('append', function(array, values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
				values = arguments[2];
			}
			var $add65,$add66,newarray;
			if ($p['bool']($p['isinstance'](values['__getitem__'](0), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']])))) {
				values = function(){
					var $iter71_nextval,$iter72_array,$iter71_iter,$iter72_type,value,dat,$iter71_array,$collcomp15,$iter72_iter,$iter71_idx,$iter71_type,$iter72_idx,$iter72_nextval;
	$collcomp15 = $p['list']();
				$iter71_iter = values;
				$iter71_nextval=$p['__iter_prepare']($iter71_iter,false);
				while (typeof($p['__wrapped_next']($iter71_nextval)['$nextval']) != 'undefined') {
					dat = $iter71_nextval['$nextval'];
					$iter72_iter = dat;
					$iter72_nextval=$p['__iter_prepare']($iter72_iter,false);
					while (typeof($p['__wrapped_next']($iter72_nextval)['$nextval']) != 'undefined') {
						value = $iter72_nextval['$nextval'];
						$collcomp15['append'](value);
					}
				}

	return $collcomp15;}();
			}
			newarray = $m['Ndarray']($p['__op_add']($add65=$p['len'](array),$add66=$p['len'](values)), $p['getattr'](array, '_dtype'));
			newarray['__data']['set']($p['getattr'](array, '__data'));
			newarray['__data']['set'](values, $p['len'](array));
			return newarray;
		}
	, 1, [null,null,['self'],['array'],['values']]);
		$cls_definition['append'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NP', $p['tuple']($bases), $data);
	})();
	$m['np'] = $m['NP']();
	$m['PyImageData'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}

			self['__imagedata'] = imagedata;
			if ($p['bool'](!$p['bool']($p['isUndefined']((typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray))))) {
				self['data'] = $m['PyUint8ClampedArray']();
			}
			else {
				self['data'] = $m['PyCanvasPixelArray']();
			}
			$p['getattr'](self, 'data')['__data'] = $p['getattr'](imagedata, 'data');
			self['width'] = $p['getattr'](imagedata, 'width');
			self['height'] = $p['getattr'](imagedata, 'height');
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '__imagedata');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageData', $p['tuple']($bases), $data);
	})();
	$m['PyImageMatrix'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}

			self['__imagedata'] = $m['PyImageData'](imagedata);
			if ($p['bool']($p['isinstance']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'), $m['PyUint8ClampedArray']))) {
				$m['Ndarray']['__init__'](self, $p['getattr']($p['getattr'](self, '__imagedata'), 'data'), 0);
			}
			else {
				$m['Ndarray']['__init__'](self, $p['getattr']($p['getattr'](self, '__imagedata'), 'data'), 1);
			}
			self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), 4);
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__imagedata'), 'width');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, '__imagedata'), 'height');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('getPixel', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $add67,$add72,$add73,$add70,$add71,i,$add69,$mul40,$mul41,$mul42,$add68,$mul39,$add74;
			i = $p['__op_add']($add67=(typeof ($mul39=index['__getitem__'](0))==typeof ($mul40=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul39=='number'?
				$mul39*$mul40:
				$p['op_mul']($mul39,$mul40)),$add68=(typeof ($mul41=index['__getitem__'](1))==typeof ($mul42=4) && typeof $mul41=='number'?
				$mul41*$mul42:
				$p['op_mul']($mul41,$mul42)));
			return $p['tuple']([$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add69=i,$add70=1)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add71=i,$add72=2)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add73=i,$add74=3))]);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixel'] = $method;
		$method = $pyjs__bind_method2('setPixel', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $add76,$add75,$add77,$mul44,$mul45,$add80,$mul43,i,$add81,$add78,$add82,$add79,$mul46;
			i = $p['__op_add']($add75=(typeof ($mul43=index['__getitem__'](0))==typeof ($mul44=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul43=='number'?
				$mul43*$mul44:
				$p['op_mul']($mul43,$mul44)),$add76=(typeof ($mul45=index['__getitem__'](1))==typeof ($mul46=4) && typeof $mul45=='number'?
				$mul45*$mul46:
				$p['op_mul']($mul45,$mul46)));
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([value['__getitem__'](0), value['__getitem__'](1), value['__getitem__'](2), value['__getitem__'](3)]), 4, null);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign5[0]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add77=i,$add78=1), $tupleassign5[1]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add79=i,$add80=2), $tupleassign5[2]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add81=i,$add82=3), $tupleassign5[3]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixel'] = $method;
		$method = $pyjs__bind_method2('getPixelRGB', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $mul50,$mul48,$mul49,$add83,$mul47,$add87,$add86,$add85,$add84,i,$add88;
			i = $p['__op_add']($add83=(typeof ($mul47=index['__getitem__'](0))==typeof ($mul48=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul47=='number'?
				$mul47*$mul48:
				$p['op_mul']($mul47,$mul48)),$add84=(typeof ($mul49=index['__getitem__'](1))==typeof ($mul50=4) && typeof $mul49=='number'?
				$mul49*$mul50:
				$p['op_mul']($mul49,$mul50)));
			return $p['tuple']([$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add85=i,$add86=1)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add87=i,$add88=2))]);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelRGB'] = $method;
		$method = $pyjs__bind_method2('setPixelRGB', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $add89,$add94,$mul53,$mul52,$add90,$add91,$mul54,i,$add92,$add93,$mul51;
			i = $p['__op_add']($add89=(typeof ($mul51=index['__getitem__'](0))==typeof ($mul52=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul51=='number'?
				$mul51*$mul52:
				$p['op_mul']($mul51,$mul52)),$add90=(typeof ($mul53=index['__getitem__'](1))==typeof ($mul54=4) && typeof $mul53=='number'?
				$mul53*$mul54:
				$p['op_mul']($mul53,$mul54)));
			var $tupleassign6 = $p['__ass_unpack']($p['tuple']([value['__getitem__'](0), value['__getitem__'](1), value['__getitem__'](2)]), 3, null);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign6[0]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add91=i,$add92=1), $tupleassign6[1]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add93=i,$add94=2), $tupleassign6[2]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelRGB'] = $method;
		$method = $pyjs__bind_method2('getPixelAlpha', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $mul58,$add98,i,$add95,$add97,$mul57,$mul56,$mul55,$add96;
			i = $p['__op_add']($add95=(typeof ($mul55=index['__getitem__'](0))==typeof ($mul56=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul55=='number'?
				$mul55*$mul56:
				$p['op_mul']($mul55,$mul56)),$add96=(typeof ($mul57=index['__getitem__'](1))==typeof ($mul58=4) && typeof $mul57=='number'?
				$mul57*$mul58:
				$p['op_mul']($mul57,$mul58)));
			return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add97=i,$add98=3));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelAlpha'] = $method;
		$method = $pyjs__bind_method2('setPixelAlpha', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $mul62,$mul60,$mul61,$add101,$add99,$add100,i,$mul59,$add102;
			i = $p['__op_add']($add99=(typeof ($mul59=index['__getitem__'](0))==typeof ($mul60=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul59=='number'?
				$mul59*$mul60:
				$p['op_mul']($mul59,$mul60)),$add100=(typeof ($mul61=index['__getitem__'](1))==typeof ($mul62=4) && typeof $mul61=='number'?
				$mul61*$mul62:
				$p['op_mul']($mul61,$mul62)));
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add101=i,$add102=3), value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelAlpha'] = $method;
		$method = $pyjs__bind_method2('getPixelInteger', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $add103,$mul66,$add104,$mul64,$mul65,i,$add108,$add106,$add110,$add109,$add107,$add105,$mul63;
			i = $p['__op_add']($add103=(typeof ($mul63=index['__getitem__'](0))==typeof ($mul64=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul63=='number'?
				$mul63*$mul64:
				$p['op_mul']($mul63,$mul64)),$add104=(typeof ($mul65=index['__getitem__'](1))==typeof ($mul66=4) && typeof $mul65=='number'?
				$mul65*$mul66:
				$p['op_mul']($mul65,$mul66)));
			return (($p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i))<<(16))|(($p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add105=i,$add106=1)))<<(8))|($p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add107=i,$add108=2)))|(($p['getattr']($p['getattr'](self, 'imagedata'), 'data')['__getitem__']($p['__op_add']($add109=i,$add110=3)))<<(24));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelInteger'] = $method;
		$method = $pyjs__bind_method2('setPixelInteger', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $add114,$add115,$mul67,$add118,$mul70,i,$add117,$mul69,$add112,$add113,$add111,$add116,$mul68;
			i = $p['__op_add']($add111=(typeof ($mul67=index['__getitem__'](0))==typeof ($mul68=$p['getattr'](self, '_indices')['__getitem__'](0)) && typeof $mul67=='number'?
				$mul67*$mul68:
				$p['op_mul']($mul67,$mul68)),$add112=(typeof ($mul69=index['__getitem__'](1))==typeof ($mul70=4) && typeof $mul69=='number'?
				$mul69*$mul70:
				$p['op_mul']($mul69,$mul70)));
			var $tupleassign7 = $p['__ass_unpack']($p['tuple']([((value)>>(16))&(255), ((value)>>(8))&(255), (value)&(255), ((value)>>(24))&(255)]), 4, null);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign7[0]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add113=i,$add114=1), $tupleassign7[1]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add115=i,$add116=2), $tupleassign7[2]);
			$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add117=i,$add118=3), $tupleassign7[3]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelInteger'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageMatrix', $p['tuple']($bases), $data);
	})();
	$m['BitSet'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__bit'] = 8;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint8Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			var $mul71,$sub30,$mul72,$sub27,$div20,$sub29,$sub28,$div19;
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')))) {
				$p['getattr'](self, '__class__')['__bitmask'] = $p['dict'](function(){
					var $sub22,$sub23,$sub21,$sub26,$iter73_iter,$sub24,$sub25,i,$iter73_array,$iter73_idx,$collcomp16,$iter73_nextval,$iter73_type;
	$collcomp16 = $p['list']();
				$iter73_iter = $p['range']($p['__op_sub']($sub21=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub22=1), (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)), (typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				$iter73_nextval=$p['__iter_prepare']($iter73_iter,false);
				while (typeof($p['__wrapped_next']($iter73_nextval)['$nextval']) != 'undefined') {
					i = $iter73_nextval['$nextval'];
					$collcomp16['append']($p['tuple']([$p['__op_sub']($sub25=$p['__op_sub']($sub23=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub24=i),$sub26=1), (1)<<(i)]));
				}

	return $collcomp16;}());
				$p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__setitem__']($p['__op_sub']($sub29=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub30=1), $p['float_int']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__getitem__']($p['__op_sub']($sub27=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub28=1))));
			}
			if ($p['bool'](width)) {
				self['__width'] = $p['abs'](width);
			}
			else {
				self['__width'] = $p['getattr'](self, '__bit');
			}
			self['__data'] = self['__typedarray']($m['_ceil']((typeof ($div19=$p['getattr'](self, '__width'))==typeof ($div20=(typeof ($mul71=$p['getattr'](self, '__bit'))==typeof ($mul72=1.0) && typeof $mul71=='number'?
				$mul71*$mul72:
				$p['op_mul']($mul71,$mul72))) && typeof $div19=='number' && $div20 !== 0?
				$div19/$div20:
				$p['op_div']($div19,$div20))));
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s', $p['getattr'](self, '__class__'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$add122,$add121,$add119,$add120,$iter74_array,$iter74_nextval,$iter74_iter,$iter74_idx,$iter74_type,setBit;
			setBit = $p['list']([]);
			$iter74_iter = $p['xrange']($p['getattr'](self, '__width'));
			$iter74_nextval=$p['__iter_prepare']($iter74_iter,false);
			while (typeof($p['__wrapped_next']($iter74_nextval)['$nextval']) != 'undefined') {
				index = $iter74_nextval['$nextval'];
				if ($p['bool'](self['get'](index))) {
					setBit['append']($p['str'](index));
				}
			}
			return $p['__op_add']($add121=$p['__op_add']($add119='{',$add120=', '['join'](setBit)),$add122='}');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['get'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

			self['set'](index, value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub31,index,$sub32,$iter75_nextval,$iter75_iter,$iter75_type,$add124,$iter75_idx,$add123,$iter75_array;
			$iter75_iter = $p['xrange']($p['__op_sub']($sub31=$p['getattr'](self, '__width'),$sub32=1), (typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)), (typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)));
			$iter75_nextval=$p['__iter_prepare']($iter75_iter,false);
			while (typeof($p['__wrapped_next']($iter75_nextval)['$nextval']) != 'undefined') {
				index = $iter75_nextval['$nextval'];
				if ($p['bool'](self['get'](index))) {
					break;
				}
			}
			return $p['__op_add']($add123=index,$add124=1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add127,index,$add125,$add126,$add128;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					index = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '__width')) == -1)));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = self['get'](index);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							index = $p['__op_add']($add127=index,$add128=1);
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('get', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var ix,$iter76_nextval,$add130,$mod5,$mod4,$mod6,$mod3,$iter76_iter,size,$sub33,$sub35,$sub34,$sub37,$sub36,$sub38,$div23,$add129,bitset,$div21,$div22,$div24,i,$iter76_array,$iter76_type,$iter76_idx;
			if ($p['bool'](($p['cmp'](index, $p['__op_sub']($sub33=$p['getattr'](self, '__width'),$sub34=1)) == 1))) {
				if ($p['bool'](!$p['bool'](toIndex))) {
					return false;
				}
				else {
					size = $p['__op_sub']($sub35=toIndex,$sub36=index);
					if ($p['bool'](($p['cmp'](size, 0) == 1))) {
						return self['__class__'](size);
					}
					else {
						return null;
					}
				}
			}
			if ($p['bool']((toIndex === null))) {
				return $p['bool'](($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div21=index)==typeof ($div22=$p['getattr'](self, '__bit')) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22)))))&($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod3=index)==typeof ($mod4=$p['getattr'](self, '__bit')) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)))));
			}
			else {
				size = $p['__op_sub']($sub37=toIndex,$sub38=index);
				if ($p['bool'](($p['cmp'](size, 0) == 1))) {
					bitset = self['__class__'](size);
					ix = 0;
					if ($p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1))) {
						toIndex = $p['getattr'](self, '__width');
					}
					$iter76_iter = $p['xrange'](index, toIndex);
					$iter76_nextval=$p['__iter_prepare']($iter76_iter,false);
					while (typeof($p['__wrapped_next']($iter76_nextval)['$nextval']) != 'undefined') {
						i = $iter76_nextval['$nextval'];
						bitset['set'](ix, $p['bool'](($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div23=i)==typeof ($div24=$p['getattr'](self, '__bit')) && typeof $div23=='number' && $div24 !== 0?
							$div23/$div24:
							$p['op_div']($div23,$div24)))))&($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod5=i)==typeof ($mod6=$p['getattr'](self, '__bit')) && typeof $mod5=='number'?
							(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
							$p['op_mod']($mod5,$mod6))))));
						ix = $p['__op_add']($add129=ix,$add130=1);
					}
					return bitset;
				}
				else {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('set', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
			var $div32,$div30,$div31,$div25,$add131,$add132,$div26,$sub39,$div28,$div29,$div27,$mod7,$sub40,$mod9,$mod8,$mod10;
			if ($p['bool'](($p['cmp'](index, $p['__op_sub']($sub39=$p['getattr'](self, '__width'),$sub40=1)) == 1))) {
				if ($p['bool'](value)) {
					self['resize']($p['__op_add']($add131=index,$add132=1));
				}
				else {
					return null;
				}
			}
			if ($p['bool'](value)) {
				$p['getattr'](self, '__data')['__setitem__']($p['float_int']((typeof ($div27=index)==typeof ($div28=$p['getattr'](self, '__bit')) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28))), ($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div25=index)==typeof ($div26=$p['getattr'](self, '__bit')) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)))))|($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod7=index)==typeof ($mod8=$p['getattr'](self, '__bit')) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8)))));
			}
			else {
				$p['getattr'](self, '__data')['__setitem__']($p['float_int']((typeof ($div31=index)==typeof ($div32=$p['getattr'](self, '__bit')) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32))), ($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div29=index)==typeof ($div30=$p['getattr'](self, '__bit')) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30)))))&(~($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod9=index)==typeof ($mod10=$p['getattr'](self, '__bit')) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10))))));
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value', 1]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('fill', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter77_type,$iter78_iter,i,$iter77_iter,$and3,$and4,$iter78_type,$iter78_nextval,$iter78_idx,$iter77_array,$iter78_array,$iter77_nextval,$iter77_idx;
			if ($p['bool'](($p['bool']($and3=(index === null))?(toIndex === null):$and3))) {
				$iter77_iter = $p['xrange'](0, $p['getattr'](self, '__width'));
				$iter77_nextval=$p['__iter_prepare']($iter77_iter,false);
				while (typeof($p['__wrapped_next']($iter77_nextval)['$nextval']) != 'undefined') {
					i = $iter77_nextval['$nextval'];
					self['set'](i, 1);
				}
			}
			else {
				if ($p['bool']((toIndex === null))) {
					self['set'](index, 1);
				}
				else {
					$iter78_iter = $p['xrange'](index, toIndex);
					$iter78_nextval=$p['__iter_prepare']($iter78_iter,false);
					while (typeof($p['__wrapped_next']($iter78_nextval)['$nextval']) != 'undefined') {
						i = $iter78_nextval['$nextval'];
						self['set'](i, 1);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('clear', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter81_array,$iter79_idx,$iter80_idx,$iter81_idx,$iter79_nextval,$iter80_type,$iter81_iter,$iter79_type,$iter80_iter,$iter81_type,$iter79_array,$and5,$and6,dat,$iter81_nextval,$iter80_nextval,i,$iter79_iter,$iter80_array;
			if ($p['bool']((index === null))) {
				$iter79_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter79_nextval=$p['__iter_prepare']($iter79_iter,false);
				while (typeof($p['__wrapped_next']($iter79_nextval)['$nextval']) != 'undefined') {
					i = $iter79_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, 0);
				}
			}
			else {
				if ($p['bool']((toIndex === null))) {
					self['set'](index, 0);
				}
				else {
					if ($p['bool'](($p['bool']($and5=$p['op_eq'](index, 0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and5))) {
						$iter80_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
						$iter80_nextval=$p['__iter_prepare']($iter80_iter,false);
						while (typeof($p['__wrapped_next']($iter80_nextval)['$nextval']) != 'undefined') {
							dat = $iter80_nextval['$nextval'];
							$p['getattr'](self, '__data')['__setitem__'](dat, 0);
						}
					}
					else {
						$iter81_iter = $p['xrange'](index, toIndex);
						$iter81_nextval=$p['__iter_prepare']($iter81_iter,false);
						while (typeof($p['__wrapped_next']($iter81_nextval)['$nextval']) != 'undefined') {
							i = $iter81_nextval['$nextval'];
							self['set'](i, 0);
						}
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('flip', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $and8,$iter83_type,$iter82_iter,i,$iter82_array,$iter83_iter,$iter83_array,$and7,dat,$iter82_nextval,$iter82_type,$iter82_idx,$iter83_idx,$iter83_nextval;
			if ($p['bool']((toIndex === null))) {
				self['set'](index, !$p['bool'](self['get'](index)));
			}
			else {
				if ($p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1))) {
					self['resize'](toIndex);
					toIndex = $p['getattr'](self, '__width');
				}
				if ($p['bool'](($p['bool']($and7=$p['op_eq'](index, 0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and7))) {
					$iter82_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter82_nextval=$p['__iter_prepare']($iter82_iter,false);
					while (typeof($p['__wrapped_next']($iter82_nextval)['$nextval']) != 'undefined') {
						dat = $iter82_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](dat, ~($p['getattr'](self, '__data')['__getitem__'](dat)));
					}
				}
				else {
					$iter83_iter = $p['xrange'](index, toIndex);
					$iter83_nextval=$p['__iter_prepare']($iter83_iter,false);
					while (typeof($p['__wrapped_next']($iter83_nextval)['$nextval']) != 'undefined') {
						i = $iter83_nextval['$nextval'];
						self['set'](i, !$p['bool'](self['get'](i)));
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['flip'] = $method;
		$method = $pyjs__bind_method2('cardinality', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var count,$add134,$iter84_nextval,$iter84_iter,$add133,$iter84_array,$iter84_idx,bit,$iter84_type;
			count = 0;
			$iter84_iter = $p['xrange']($p['getattr'](self, '__width'));
			$iter84_nextval=$p['__iter_prepare']($iter84_iter,false);
			while (typeof($p['__wrapped_next']($iter84_nextval)['$nextval']) != 'undefined') {
				bit = $iter84_nextval['$nextval'];
				if ($p['bool'](self['get'](bit))) {
					count = $p['__op_add']($add133=count,$add134=1);
				}
			}
			return count;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cardinality'] = $method;
		$method = $pyjs__bind_method2('intersects', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var dat,$iter85_array,$iter85_nextval,$iter85_iter,$iter85_idx,$iter85_type;
			$iter85_iter = $p['xrange']($p['len']($p['getattr'](bitset, '__data')));
			$iter85_nextval=$p['__iter_prepare']($iter85_iter,false);
			while (typeof($p['__wrapped_next']($iter85_nextval)['$nextval']) != 'undefined') {
				dat = $iter85_nextval['$nextval'];
				if ($p['bool'](($p['getattr'](bitset, '__data')['__getitem__'](dat))&($p['getattr'](self, '__data')['__getitem__'](dat)))) {
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('andSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $iter86_iter,$iter86_type,dat,$iter86_array,$iter86_nextval,$iter86_idx,data;
			data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
			$iter86_iter = $p['xrange'](data);
			$iter86_nextval=$p['__iter_prepare']($iter86_iter,false);
			while (typeof($p['__wrapped_next']($iter86_nextval)['$nextval']) != 'undefined') {
				dat = $iter86_nextval['$nextval'];
				$p['getattr'](self, '__data')['__setitem__'](dat, ($p['getattr'](self, '__data')['__getitem__'](dat))&($p['getattr'](bitset, '__data')['__getitem__'](dat)));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['andSet'] = $method;
		$method = $pyjs__bind_method2('orSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $iter87_nextval,$iter87_array,dat,$iter87_type,$iter87_iter,data,$iter87_idx;
			data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
			$iter87_iter = $p['xrange'](data);
			$iter87_nextval=$p['__iter_prepare']($iter87_iter,false);
			while (typeof($p['__wrapped_next']($iter87_nextval)['$nextval']) != 'undefined') {
				dat = $iter87_nextval['$nextval'];
				$p['getattr'](self, '__data')['__setitem__'](dat, ($p['getattr'](self, '__data')['__getitem__'](dat))|($p['getattr'](bitset, '__data')['__getitem__'](dat)));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['orSet'] = $method;
		$method = $pyjs__bind_method2('xorSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $iter88_type,$iter88_idx,$iter88_array,$iter88_iter,dat,$iter88_nextval,data;
			data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
			$iter88_iter = $p['xrange'](data);
			$iter88_nextval=$p['__iter_prepare']($iter88_iter,false);
			while (typeof($p['__wrapped_next']($iter88_nextval)['$nextval']) != 'undefined') {
				dat = $iter88_nextval['$nextval'];
				$p['getattr'](self, '__data')['__setitem__'](dat, ($p['getattr'](self, '__data')['__getitem__'](dat))^($p['getattr'](bitset, '__data')['__getitem__'](dat)));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['xorSet'] = $method;
		$method = $pyjs__bind_method2('resize', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $mul80,$div33,$mul73,$div36,$mul75,$mul74,$div34,$mul76,$mul79,$mul78,$mul77,$mul82,$div35,$div38,$mul81,$sub41,array,$sub42,$div37;
			if ($p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == 1))) {
				self['__width'] = width;
				if ($p['bool'](($p['cmp']($p['getattr'](self, '__width'), (typeof ($mul73=$p['len']($p['getattr'](self, '__data')))==typeof ($mul74=$p['getattr'](self, '__bit')) && typeof $mul73=='number'?
					$mul73*$mul74:
					$p['op_mul']($mul73,$mul74))) == 1))) {
					array = self['__typedarray']($m['_ceil']((typeof ($div33=$p['getattr'](self, '__width'))==typeof ($div34=(typeof ($mul75=$p['getattr'](self, '__bit'))==typeof ($mul76=1.0) && typeof $mul75=='number'?
						$mul75*$mul76:
						$p['op_mul']($mul75,$mul76))) && typeof $div33=='number' && $div34 !== 0?
						$div33/$div34:
						$p['op_div']($div33,$div34))));
					array['set']($p['getattr'](self, '__data'));
					self['__data'] = array;
				}
			}
			else if ($p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == -1))) {
				if ($p['bool'](($p['cmp'](width, $p['len'](self)) == -1))) {
					width = $p['len'](self);
				}
				self['__width'] = width;
				if ($p['bool'](($p['cmp']($p['getattr'](self, '__width'), $p['__op_sub']($sub41=(typeof ($mul77=$p['len']($p['getattr'](self, '__data')))==typeof ($mul78=$p['getattr'](self, '__bit')) && typeof $mul77=='number'?
					$mul77*$mul78:
					$p['op_mul']($mul77,$mul78)),$sub42=$p['getattr'](self, '__bit'))) < 1))) {
					array = self['__typedarray']($m['_ceil']((typeof ($div35=$p['getattr'](self, '__width'))==typeof ($div36=(typeof ($mul79=$p['getattr'](self, '__bit'))==typeof ($mul80=1.0) && typeof $mul79=='number'?
						$mul79*$mul80:
						$p['op_mul']($mul79,$mul80))) && typeof $div35=='number' && $div36 !== 0?
						$div35/$div36:
						$p['op_div']($div35,$div36))));
					array['set'](self['__data']['subarray'](0, $m['_ceil']((typeof ($div37=$p['getattr'](self, '__width'))==typeof ($div38=(typeof ($mul81=$p['getattr'](self, '__bit'))==typeof ($mul82=1.0) && typeof $mul81=='number'?
						$mul81*$mul82:
						$p['op_mul']($mul81,$mul82))) && typeof $div37=='number' && $div38 !== 0?
						$div37/$div38:
						$p['op_div']($div37,$div38)))));
					self['__data'] = array;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul83,$mul84;
			return (typeof ($mul83=$p['len']($p['getattr'](self, '__data')))==typeof ($mul84=$p['getattr'](self, '__bit')) && typeof $mul83=='number'?
				$mul83*$mul84:
				$p['op_mul']($mul83,$mul84));
		}
	, 1, [null,null,['self']]);
		$cls_definition['size'] = $method;
		$method = $pyjs__bind_method2('isEmpty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter89_iter,$iter89_type,$iter89_nextval,$iter89_array,data,$iter89_idx;
			$iter89_iter = $p['getattr'](self, '__data');
			$iter89_nextval=$p['__iter_prepare']($iter89_iter,false);
			while (typeof($p['__wrapped_next']($iter89_nextval)['$nextval']) != 'undefined') {
				data = $iter89_nextval['$nextval'];
				if ($p['bool'](data)) {
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEmpty'] = $method;
		$method = $pyjs__bind_method2('clone', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_bitset,data;
			new_bitset = self['__class__'](1);
			data = self['__typedarray']($p['getattr'](self, '__data'));
			new_bitset['__data'] = data;
			new_bitset['__width'] = $p['getattr'](self, '__width');
			return new_bitset;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clone'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet', $p['tuple']($bases), $data);
	})();
	$m['BitSet16'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__bit'] = 16;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint16Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet16', $p['tuple']($bases), $data);
	})();
	$m['BitSet32'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__bit'] = 32;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint32Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet32', $p['tuple']($bases), $data);
	})();
	$m['Pyjs_Mode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			var $tupleassign8 = $p['__ass_unpack'](self['_setmode'](), 2, null);
			self['strict'] = $tupleassign8[0];
			self['optimized'] = $tupleassign8[1];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}

			if ($p['bool']($p['op_eq'](attr, '__strict_mode'))) {
				return true;
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('_setmode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, '__strict_mode'), true))) {
				return $p['tuple']([true, false]);
			}
			else {
				return $p['tuple']([false, true]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_setmode'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Pyjs_Mode', $p['tuple']($bases), $data);
	})();
	$m['pyjs_mode'] = $m['Pyjs_Mode']();
	return this;
}; /* end pyjsdl.pyjsarray */


/* end module: pyjsdl.pyjsarray */


/*
PYJS_DEPS: ['math.ceil', 'math']
*/
