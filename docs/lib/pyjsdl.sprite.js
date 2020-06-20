/* start module: pyjsdl.sprite */
$pyjs['loaded_modules']['pyjsdl.sprite'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.sprite']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.sprite'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.sprite'];
	$m['__repr__'] = function() { return '<module: pyjsdl.sprite>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.sprite';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['sprite'] = $pyjs['loaded_modules']['pyjsdl.sprite'];


	$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
	$m['mask'] = $p['___import___']('pyjsdl.mask', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['id'] = function(obj) {

		return $p['getattr'](obj, '_identity');
	};
	$m['id']['__name__'] = 'id';

	$m['id']['__bind_type__'] = 0;
	$m['id']['__args__'] = [null,null,['obj']];
	$m['Sprite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['_identity'] = 0;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $add2,$add1;
			self['_identity'] = $p['getattr']($m['Sprite'], '_identity');
			$m['Sprite']['_identity'] = $p['__op_add']($add1=$p['getattr']($m['Sprite'], '_identity'),$add2=1);
			self['_groups'] = $p['dict']([]);
			if ($p['bool'](groups)) {
				$pyjs_kwargs_call(self, 'add', groups, null, [{}]);
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s(in %d groups)', $p['tuple']([$p['getattr'](self, '__class__'), $p['len']($p['getattr'](self, '_groups'))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,group,$iter1_idx;
			$iter1_iter = groups;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				group = $iter1_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](group, '_sprites'))) {
					group['add'](self);
				}
				else {
					$pyjs_kwargs_call(self, 'add', group, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,group,$iter2_array;
			$iter2_iter = groups;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				group = $iter2_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](group, '_sprites'))) {
					group['remove'](self);
				}
				else {
					$pyjs_kwargs_call(self, 'remove', group, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('kill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,group,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = self['_groups']['values']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				group = $iter3_nextval['$nextval'];
				group['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['kill'] = $method;
		$method = $pyjs__bind_method2('alive', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, '_groups'))) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['alive'] = $method;
		$method = $pyjs__bind_method2('groups', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_groups']['values']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['groups'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

 			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Sprite', $p['tuple']($bases), $data);
	})();
	$m['DirtySprite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call($m['Sprite'], '__init__', groups, null, [{}, self]);
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Sprite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DirtySprite', $p['tuple']($bases), $data);
	})();
	$m['Group'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['_identity'] = 0;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $add3,$add4;
			self['_identity'] = $p['getattr']($m['Group'], '_identity');
			$m['Group']['_identity'] = $p['__op_add']($add3=$p['getattr']($m['Group'], '_identity'),$add4=1);
			self['_sprites'] = $p['dict']([]);
			if ($p['bool'](sprites)) {
				$pyjs_kwargs_call(self, 'add', sprites, null, [{}]);
			}
			self['_clear_active'] = false;
			self['_sprites_drawn'] = $p['dict']([]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s(%d sprites)', $p['tuple']([$p['getattr'](self, '__class__'), $p['len']($p['getattr'](self, '_sprites'))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_sprites']['itervalues']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}

			return $p['getattr'](self, '_sprites')['__contains__']($m['id'](sprite));
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len']($p['getattr'](self, '_sprites'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('sprites', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_sprites']['values']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['sprites'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newgroup;
			newgroup = self['__class__']();
			newgroup['_sprites'] = self['_sprites']['copy']();
			return newgroup;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var sprite,$iter4_nextval,spriteID,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = sprites;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				sprite = $iter4_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](sprite, '_groups'))) {
					spriteID = $m['id'](sprite);
					if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](spriteID))) {
						$p['getattr'](self, '_sprites')['__setitem__'](spriteID, sprite);
						$p['getattr'](sprite, '_groups')['__setitem__']($m['id'](self), self);
					}
				}
				else {
					$pyjs_kwargs_call(self, 'add', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter5_nextval,sprite,$iter5_array,spriteID,$iter5_iter,$iter5_idx,$iter5_type;
			$iter5_iter = sprites;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				sprite = $iter5_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](sprite, '_groups'))) {
					spriteID = $m['id'](sprite);
					if ($p['bool']($p['getattr'](self, '_sprites')['__contains__'](spriteID))) {
						$p['getattr'](self, '_sprites')['__delitem__'](spriteID);
						$p['getattr'](sprite, '_groups')['__delitem__']($m['id'](self));
					}
				}
				else {
					$pyjs_kwargs_call(self, 'remove', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('has', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var sprite,$iter6_idx,$iter6_type,$iter6_array,$iter6_iter,$iter6_nextval;
			$iter6_iter = sprites;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				sprite = $iter6_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](sprite, '_groups'))) {
					if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__']($m['id'](sprite)))) {
						return false;
					}
				}
				else {
					if ($p['bool'](!$p['bool']($pyjs_kwargs_call(self, 'has', sprite, null, [{}])))) {
						return false;
					}
				}
			}
			return true;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['has'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var sprite,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
			surface['_blits'](self['_sprites']['itervalues']());
			if ($p['bool']($p['getattr'](self, '_clear_active'))) {
				$m['rectPool']['extend'](self['_sprites_drawn']['itervalues']());
				self['_sprites_drawn']['clear']();
				$iter7_iter = $p['getattr'](self, '_sprites');
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					sprite = $iter7_nextval['$nextval'];
					$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('clear', function(surface, background) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				background = arguments[2];
			}
			var $iter8_idx,sprite,$iter8_array,$iter8_iter,$iter8_nextval,$iter8_type;
			self['_clear_active'] = true;
			if ($p['bool']($p['hasattr'](background, 'width'))) {
				surface['_blit_clear'](background, self['_sprites_drawn']['itervalues']());
			}
			else {
				$iter8_iter = $p['getattr'](self, '_sprites_drawn');
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					sprite = $iter8_nextval['$nextval'];
					background(surface, $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['background']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sprite,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$iter9_array;
			$iter9_iter = self['_sprites']['itervalues']();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				sprite = $iter9_nextval['$nextval'];
				$p['getattr'](sprite, '_groups')['__delitem__']($m['id'](self));
			}
			self['_sprites']['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter10_nextval,sprite,$iter10_array,$iter10_type,$iter10_iter,$iter10_idx;
			$iter10_iter = self['_sprites']['values']();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				sprite = $iter10_nextval['$nextval'];
				$pyjs_kwargs_call(sprite, 'update', args, null, [{}]);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Group', $p['tuple']($bases), $data);
	})();
	$m['GroupSingle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			if (typeof sprite == 'undefined') sprite=arguments['callee']['__args__'][3][1];

			if ($p['bool'](sprite)) {
				$m['Group']['__init__'](self, sprite);
			}
			else {
				$m['Group']['__init__'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['sprite', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}

			if ($p['bool']($p['op_eq'](attr, 'sprite'))) {
				if ($p['bool']($p['getattr'](self, '_sprites'))) {
					return self['_sprites']['values']()['__getitem__'](0);
				}
				else {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('add', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}

			self['empty']();
			$p['getattr'](self, '_sprites')['__setitem__']($m['id'](sprite), sprite);
			$p['getattr'](sprite, '_groups')['__setitem__']($m['id'](self), self);
			return null;
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			if ($p['bool']($p['getattr'](self, '_sprites'))) {
				$pyjs_kwargs_call(self['_sprites']['values']()['__getitem__'](0), 'update', args, null, [{}]);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GroupSingle', $p['tuple']($bases), $data);
	})();
	$m['RenderUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call($m['Group'], '__init__', sprites, null, [{}, self]);
			self['changed_areas'] = $p['list']([]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var $iter12_type,sprite,$iter11_iter,$iter11_type,$iter12_array,$iter12_iter,$iter11_array,$iter11_nextval,$iter11_idx,$iter12_idx,$iter12_nextval;
			surface['_blits'](self['_sprites']['itervalues']());
			if ($p['bool']($p['getattr'](self, '_clear_active'))) {
				$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
				$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
				$iter11_iter = $p['getattr'](self, '_sprites');
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					sprite = $iter11_nextval['$nextval'];
					if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite))) {
						if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')))) {
							$p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
						}
						else {
							self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
						}
					}
					else {
						self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
				}
				self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
				self['_sprites_drawn']['clear']();
				$iter12_iter = $p['getattr'](self, '_sprites');
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					sprite = $iter12_nextval['$nextval'];
					$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
				}
			}
			else {
				$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
				$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
				self['changed_areas']['extend'](function(){
					var $iter13_nextval,sprite,$iter13_iter,$collcomp1,$iter13_type,$iter13_idx,$iter13_array;
	$collcomp1 = $p['list']();
				$iter13_iter = self['_sprites']['itervalues']();
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					sprite = $iter13_nextval['$nextval'];
					$collcomp1['append']($m['rectPool']['copy']($p['getattr'](sprite, 'rect')));
				}

	return $collcomp1;}());
			}
			return $p['getattr'](self, 'changed_areas');
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RenderUpdates', $p['tuple']($bases), $data);
	})();
	$m['OrderedUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var index,$iter14_array,$iter14_type,sprite,spriteID,$iter14_iter,$iter14_idx,$iter14_nextval;
			self['order'] = $p['dict']([]);
			self['place'] = $p['dict']([]);
			self['range'] = 1000;
			self['index'] = $p['iter']($p['xrange']($p['getattr'](self, 'range')));
			self['sort'] = null;
			$iter14_iter = sprites;
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				sprite = $iter14_nextval['$nextval'];
				if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite))) {
					spriteID = $m['id'](sprite);
					index = self['index']['next']();
					$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
					$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
				}
			}
			$pyjs_kwargs_call($m['RenderUpdates'], '__init__', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var order_sprite,keys;
			if ($p['bool']($p['getattr'](self, 'sort'))) {
				order_sprite = $p['iter']($p['getattr'](self, 'sort'));
			}
			else {
				keys = self['order']['keys']();
				keys['sort']();
				self['sort'] = function(){
					var key,$iter15_iter,$iter15_array,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type;
	$collcomp2 = $p['list']();
				$iter15_iter = keys;
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					key = $iter15_nextval['$nextval'];
					$collcomp2['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
				}

	return $collcomp2;}();
				order_sprite = $p['iter']($p['getattr'](self, 'sort'));
			}
			return order_sprite;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('sprites', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var order_sprite,keys;
			if ($p['bool']($p['getattr'](self, 'sort'))) {
				order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
			}
			else {
				keys = self['order']['keys']();
				keys['sort']();
				self['sort'] = function(){
					var $iter16_array,$iter16_type,$collcomp3,$iter16_idx,key,$iter16_nextval,$iter16_iter;
	$collcomp3 = $p['list']();
				$iter16_iter = keys;
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					key = $iter16_nextval['$nextval'];
					$collcomp3['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
				}

	return $collcomp3;}();
				order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
			}
			return order_sprite;
		}
	, 1, [null,null,['self']]);
		$cls_definition['sprites'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newgroup,$add6,$add5;
			newgroup = $m['RenderUpdates']['copy'](self);
			newgroup['order'] = self['order']['copy']();
			newgroup['place'] = self['place']['copy']();
			newgroup['range'] = $p['getattr'](self, 'range');
			newgroup['index'] = $p['iter']($p['xrange']($p['__op_add']($add5=$p['max'](self['order']['keys']()),$add6=1), $p['getattr'](self, 'range')));
			return newgroup;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter18_type,spriteID,$iter17_type,index,$iter17_iter,$iter18_idx,$iter18_nextval,$iter17_nextval,$iter18_iter,sprite,keys,$iter17_array,key,$mul4,$mul3,$mul2,$mul1,$iter18_array,$iter17_idx,order;
			$iter17_iter = sprites;
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				sprite = $iter17_nextval['$nextval'];
				if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite))) {
					index = self['_get_index']();
					if ($p['bool']((index !== null))) {
						spriteID = $m['id'](sprite);
						$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
						$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
					}
					else {
						keys = self['order']['keys']();
						keys['sort']();
						if ($p['bool'](($p['cmp']((typeof ($mul1=$p['len'](keys))==typeof ($mul2=2) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2)), $p['getattr'](self, 'range')) == 1))) {
							self['range'] = (typeof ($mul3=$p['len'](keys))==typeof ($mul4=2) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4));
						}
						self['index'] = $p['iter']($p['xrange']($p['getattr'](self, 'range')));
						order = $p['getattr'](self, 'order');
						self['order'] = $p['dict']([]);
						self['place'] = $p['dict']([]);
						$iter18_iter = keys;
						$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
						while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
							key = $iter18_nextval['$nextval'];
							index = self['index']['next']();
							$p['getattr'](self, 'order')['__setitem__'](index, order['__getitem__'](key));
							$p['getattr'](self, 'place')['__setitem__'](order['__getitem__'](key), index);
						}
						index = self['index']['next']();
						spriteID = $m['id'](sprite);
						$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
						$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
					}
				}
			}
			self['sort'] = null;
			$pyjs_kwargs_call($m['RenderUpdates'], 'add', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('_get_index', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				return self['index']['next']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_index'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter19_idx,sprite,spriteID,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type;
			$iter19_iter = sprites;
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				sprite = $iter19_nextval['$nextval'];
				spriteID = $m['id'](sprite);
				if ($p['bool']($p['getattr'](self, 'place')['__contains__'](spriteID))) {
					$p['getattr'](self, 'order')['__delitem__']($p['getattr'](self, 'place')['__getitem__'](spriteID));
					$p['getattr'](self, 'place')['__delitem__'](spriteID);
				}
			}
			self['sort'] = null;
			$pyjs_kwargs_call($m['RenderUpdates'], 'remove', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['order'] = $p['dict']([]);
			self['place'] = $p['dict']([]);
			self['index'] = $p['iter']($p['xrange']($p['getattr'](self, 'range')));
			self['sort'] = null;
			$m['RenderUpdates']['empty'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var $iter22_array,$iter21_idx,sprite,keys,$iter21_nextval,$iter22_nextval,$iter22_idx,$iter21_type,$iter21_iter,$iter22_type,$iter21_array,order_sprite,$iter22_iter;
			if ($p['bool']($p['getattr'](self, 'sort'))) {
				order_sprite = $p['iter']($p['getattr'](self, 'sort'));
			}
			else {
				keys = self['order']['keys']();
				keys['sort']();
				self['sort'] = function(){
					var $iter20_iter,$iter20_nextval,$iter20_type,$collcomp4,$iter20_idx,key,$iter20_array;
	$collcomp4 = $p['list']();
				$iter20_iter = keys;
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
					key = $iter20_nextval['$nextval'];
					$collcomp4['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
				}

	return $collcomp4;}();
				order_sprite = $p['iter']($p['getattr'](self, 'sort'));
			}
			surface['_blits'](order_sprite);
			if ($p['bool']($p['getattr'](self, '_clear_active'))) {
				$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
				$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
				$iter21_iter = $p['getattr'](self, '_sprites');
				$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
				while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
					sprite = $iter21_nextval['$nextval'];
					if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite))) {
						if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')))) {
							$p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
						}
						else {
							self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
						}
					}
					else {
						self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
				}
				self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
				self['_sprites_drawn']['clear']();
				$iter22_iter = $p['getattr'](self, '_sprites');
				$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
				while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
					sprite = $iter22_nextval['$nextval'];
					$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
				}
			}
			else {
				$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
				$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
				self['changed_areas']['extend'](function(){
					var $iter23_type,$iter23_nextval,$iter23_iter,$collcomp5,$iter23_idx,$iter23_array,sprite;
	$collcomp5 = $p['list']();
				$iter23_iter = self['_sprites']['itervalues']();
				$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
				while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
					sprite = $iter23_nextval['$nextval'];
					$collcomp5['append']($m['rectPool']['copy']($p['getattr'](sprite, 'rect')));
				}

	return $collcomp5;}());
			}
			return $p['getattr'](self, 'changed_areas');
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['RenderUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('OrderedUpdates', $p['tuple']($bases), $data);
	})();
	$m['LayeredUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call(null, $m['OrderedUpdates'], sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['OrderedUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LayeredUpdates', $p['tuple']($bases), $data);
	})();
	$m['LayeredDirty'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call(null, $m['LayeredUpdates'], sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['LayeredUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LayeredDirty', $p['tuple']($bases), $data);
	})();
	$m['spritecollide'] = function(sprite, group, dokill, collided) {
		if (typeof collided == 'undefined') collided=arguments['callee']['__args__'][5][1];
		var $iter25_array,sprites,$iter24_idx,$and2,$iter25_nextval,collide,$iter25_iter,$iter24_type,$iter24_array,$iter25_idx,$and1,$iter25_type,$iter24_iter,$iter24_nextval;
		collide = $p['list']([]);
		$iter24_iter = group;
		$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
		while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
			sprites = $iter24_nextval['$nextval'];
			if ($p['bool'](sprite['rect']['intersects']($p['getattr'](sprites, 'rect')))) {
				if ($p['bool'](collided)) {
					if ($p['bool'](!$p['bool'](collided(sprite, sprites)))) {
						continue;
					}
				}
				collide['append'](sprites);
			}
		}
		if ($p['bool'](($p['bool']($and1=collide)?dokill:$and1))) {
			$iter25_iter = collide;
			$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
			while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
				sprite = $iter25_nextval['$nextval'];
				sprite['kill']();
			}
		}
		return collide;
	};
	$m['spritecollide']['__name__'] = 'spritecollide';

	$m['spritecollide']['__bind_type__'] = 0;
	$m['spritecollide']['__args__'] = [null,null,['sprite'],['group'],['dokill'],['collided', null]];
	$m['collide_rect'] = function(sprite1, sprite2) {

		return sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect'));
	};
	$m['collide_rect']['__name__'] = 'collide_rect';

	$m['collide_rect']['__bind_type__'] = 0;
	$m['collide_rect']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['collide_rect_ratio'] = function(ratio) {
		var obj,$lambda1;
		obj = (typeof _collide_rect_ratio == "undefined"?$m['_collide_rect_ratio']:_collide_rect_ratio)(ratio);
		var 		$lambda1 = function(sprite1, sprite2) {

			return obj['__call__'](sprite1, sprite2);
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['sprite1'],['sprite2']];
		return $lambda1;
	};
	$m['collide_rect_ratio']['__name__'] = 'collide_rect_ratio';

	$m['collide_rect_ratio']['__bind_type__'] = 0;
	$m['collide_rect_ratio']['__args__'] = [null,null,['ratio']];
	$m['_collide_rect_ratio'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['__slots__'] = $p['list'](['ratio']);
		$method = $pyjs__bind_method2('__init__', function(ratio) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ratio = arguments[1];
			}

			self['ratio'] = ratio;
			return null;
		}
	, 1, [null,null,['self'],['ratio']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite1 = arguments[1];
				sprite2 = arguments[2];
			}
			var $add12,$add13,r2,$mul20,collide,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add14,$mul14,$add10,$add11,$mul9,$mul8,$mul7,$mul6,$mul5,r1,$mul17,$mul16,$mul15,$add9,$mul13,$mul12,$mul11,$mul10,$mul19,$mul18,r,$add7,y,x,$add8;
			r = $p['getattr'](sprite1, 'rect');
			x = $p['__op_sub']($sub1=(typeof ($mul5=$p['getattr'](r, 'width'))==typeof ($mul6=$p['getattr'](self, 'ratio')) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)),$sub2=$p['getattr'](r, 'width'));
			y = $p['__op_sub']($sub3=(typeof ($mul7=$p['getattr'](r, 'height'))==typeof ($mul8=$p['getattr'](self, 'ratio')) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)),$sub4=$p['getattr'](r, 'height'));
			r1 = $m['rectPool']['get']($p['__op_sub']($sub5=$p['getattr'](r, 'x'),$sub6=$p['float_int']((typeof ($mul9=x)==typeof ($mul10=0.5) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)))), $p['__op_sub']($sub7=$p['getattr'](r, 'y'),$sub8=$p['float_int']((typeof ($mul11=y)==typeof ($mul12=0.5) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)))), $p['__op_add']($add7=$p['getattr'](r, 'width'),$add8=$p['float_int'](x)), $p['__op_add']($add9=$p['getattr'](r, 'height'),$add10=$p['float_int'](y)));
			r = $p['getattr'](sprite2, 'rect');
			x = $p['__op_sub']($sub9=(typeof ($mul13=$p['getattr'](r, 'width'))==typeof ($mul14=$p['getattr'](self, 'ratio')) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)),$sub10=$p['getattr'](r, 'width'));
			y = $p['__op_sub']($sub11=(typeof ($mul15=$p['getattr'](r, 'height'))==typeof ($mul16=$p['getattr'](self, 'ratio')) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)),$sub12=$p['getattr'](r, 'height'));
			r2 = $m['rectPool']['get']($p['__op_sub']($sub13=$p['getattr'](r, 'x'),$sub14=$p['float_int']((typeof ($mul17=x)==typeof ($mul18=0.5) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)))), $p['__op_sub']($sub15=$p['getattr'](r, 'y'),$sub16=$p['float_int']((typeof ($mul19=y)==typeof ($mul20=0.5) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20)))), $p['__op_add']($add11=$p['getattr'](r, 'width'),$add12=$p['float_int'](x)), $p['__op_add']($add13=$p['getattr'](r, 'height'),$add14=$p['float_int'](y)));
			collide = r1['intersects'](r2);
			$m['rectPool']['extend']($p['tuple']([r1, r2]));
			return collide;
		}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_collide_rect_ratio', $p['tuple']($bases), $data);
	})();
	$m['collide_circle'] = function(sprite1, sprite2) {
		var radius1,$sub20,radius2,sy2,sy1,$pow14,$add27,$pow19,$pow18,$pow17,$pow16,$pow15,$add26,$pow13,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$pow4,$pow3,$pow2,$pow1,$add21,$add20,$add23,$add22,$add25,$add24,$pow9,$pow8,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul21,$add29,$sub19,$sub18,$add28,$sub17,$add15,$add16,$add17,$pow20,$add18,$add19,sx1,$add30,sx2,$mul31,$mul30,$mul32;
		if ($p['bool']($p['hasattr'](sprite1, 'radius'))) {
			radius1 = $p['getattr'](sprite1, 'radius');
		}
		else {
			radius1 = (typeof ($mul21=(typeof ($pow5=$p['__op_add']($add15=(typeof ($pow1=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow2=2) && typeof $pow1=='number'?
				Math['pow']($pow1,$pow2):
				$p['op_pow']($pow1,$pow2)),$add16=(typeof ($pow3=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow4=2) && typeof $pow3=='number'?
				Math['pow']($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))))==typeof ($pow6=0.5) && typeof $pow5=='number'?
				Math['pow']($pow5,$pow6):
				$p['op_pow']($pow5,$pow6)))==typeof ($mul22=0.5) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22));
		}
		if ($p['bool']($p['hasattr'](sprite2, 'radius'))) {
			radius2 = $p['getattr'](sprite2, 'radius');
		}
		else {
			radius2 = (typeof ($mul23=(typeof ($pow11=$p['__op_add']($add17=(typeof ($pow7=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow8=2) && typeof $pow7=='number'?
				Math['pow']($pow7,$pow8):
				$p['op_pow']($pow7,$pow8)),$add18=(typeof ($pow9=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow10=2) && typeof $pow9=='number'?
				Math['pow']($pow9,$pow10):
				$p['op_pow']($pow9,$pow10))))==typeof ($pow12=0.5) && typeof $pow11=='number'?
				Math['pow']($pow11,$pow12):
				$p['op_pow']($pow11,$pow12)))==typeof ($mul24=0.5) && typeof $mul23=='number'?
				$mul23*$mul24:
				$p['op_mul']($mul23,$mul24));
		}
		sx1 = $p['__op_add']($add19=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add20=$p['float_int']((typeof ($mul25=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul26=0.5) && typeof $mul25=='number'?
			$mul25*$mul26:
			$p['op_mul']($mul25,$mul26))));
		sy1 = $p['__op_add']($add21=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add22=$p['float_int']((typeof ($mul27=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul28=0.5) && typeof $mul27=='number'?
			$mul27*$mul28:
			$p['op_mul']($mul27,$mul28))));
		sx2 = $p['__op_add']($add23=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add24=$p['float_int']((typeof ($mul29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul30=0.5) && typeof $mul29=='number'?
			$mul29*$mul30:
			$p['op_mul']($mul29,$mul30))));
		sy2 = $p['__op_add']($add25=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add26=$p['float_int']((typeof ($mul31=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul32=0.5) && typeof $mul31=='number'?
			$mul31*$mul32:
			$p['op_mul']($mul31,$mul32))));
		return ($p['cmp']($p['__op_add']($add27=(typeof ($pow13=$p['__op_sub']($sub17=sx1,$sub18=sx2))==typeof ($pow14=2) && typeof $pow13=='number'?
			Math['pow']($pow13,$pow14):
			$p['op_pow']($pow13,$pow14)),$add28=(typeof ($pow15=$p['__op_sub']($sub19=sy1,$sub20=sy2))==typeof ($pow16=2) && typeof $pow15=='number'?
			Math['pow']($pow15,$pow16):
			$p['op_pow']($pow15,$pow16))), $p['__op_add']($add29=(typeof ($pow17=radius1)==typeof ($pow18=2) && typeof $pow17=='number'?
			Math['pow']($pow17,$pow18):
			$p['op_pow']($pow17,$pow18)),$add30=(typeof ($pow19=radius2)==typeof ($pow20=2) && typeof $pow19=='number'?
			Math['pow']($pow19,$pow20):
			$p['op_pow']($pow19,$pow20)))) == -1);
	};
	$m['collide_circle']['__name__'] = 'collide_circle';

	$m['collide_circle']['__bind_type__'] = 0;
	$m['collide_circle']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['collide_circle_ratio'] = function(ratio) {
		var obj,$lambda2;
		obj = (typeof _collide_circle_ratio == "undefined"?$m['_collide_circle_ratio']:_collide_circle_ratio)(ratio);
		var 		$lambda2 = function(sprite1, sprite2) {

			return obj['__call__'](sprite1, sprite2);
		};
		$lambda2['__name__'] = '$lambda2';

		$lambda2['__bind_type__'] = 0;
		$lambda2['__args__'] = [null,null,['sprite1'],['sprite2']];
		return $lambda2;
	};
	$m['collide_circle_ratio']['__name__'] = 'collide_circle_ratio';

	$m['collide_circle_ratio']['__bind_type__'] = 0;
	$m['collide_circle_ratio']['__args__'] = [null,null,['ratio']];
	$m['_collide_circle_ratio'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['__slots__'] = $p['list'](['ratio']);
		$method = $pyjs__bind_method2('__init__', function(ratio) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ratio = arguments[1];
			}

			self['ratio'] = ratio;
			return null;
		}
	, 1, [null,null,['self'],['ratio']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite1 = arguments[1];
				sprite2 = arguments[2];
			}
			var radius1,$sub22,radius2,$mul50,$sub24,$sub23,$add43,$add42,$pow35,sy2,sy1,$sub21,$pow31,$pow30,$pow33,$pow32,$pow40,$add44,$add40,$pow39,$pow38,$mul48,$mul49,$pow36,$mul44,$mul45,$mul47,$mul40,$mul41,$mul42,$mul43,$pow37,$pow34,$add45,$pow26,$pow27,$pow24,$pow25,$pow22,$pow23,$pow21,$add46,$pow28,$pow29,sx2,$add38,$add39,sx1,$add32,$add33,$mul51,$add31,$add36,$add37,$add34,$add35,$add41,$mul39,$mul38,$mul52,$mul35,$mul34,$mul37,$mul36,$mul46,$mul33;
			if ($p['bool']($p['hasattr'](sprite1, 'radius'))) {
				radius1 = (typeof ($mul33=$p['getattr'](sprite1, 'radius'))==typeof ($mul34=$p['getattr'](self, 'ratio')) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34));
			}
			else {
				radius1 = (typeof ($mul37=(typeof ($mul35=(typeof ($pow25=$p['__op_add']($add31=(typeof ($pow21=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow22=2) && typeof $pow21=='number'?
					Math['pow']($pow21,$pow22):
					$p['op_pow']($pow21,$pow22)),$add32=(typeof ($pow23=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow24=2) && typeof $pow23=='number'?
					Math['pow']($pow23,$pow24):
					$p['op_pow']($pow23,$pow24))))==typeof ($pow26=0.5) && typeof $pow25=='number'?
					Math['pow']($pow25,$pow26):
					$p['op_pow']($pow25,$pow26)))==typeof ($mul36=0.5) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)))==typeof ($mul38=$p['getattr'](self, 'ratio')) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38));
			}
			if ($p['bool']($p['hasattr'](sprite2, 'radius'))) {
				radius2 = (typeof ($mul39=$p['getattr'](sprite2, 'radius'))==typeof ($mul40=$p['getattr'](self, 'ratio')) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40));
			}
			else {
				radius2 = (typeof ($mul43=(typeof ($mul41=(typeof ($pow31=$p['__op_add']($add33=(typeof ($pow27=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow28=2) && typeof $pow27=='number'?
					Math['pow']($pow27,$pow28):
					$p['op_pow']($pow27,$pow28)),$add34=(typeof ($pow29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow30=2) && typeof $pow29=='number'?
					Math['pow']($pow29,$pow30):
					$p['op_pow']($pow29,$pow30))))==typeof ($pow32=0.5) && typeof $pow31=='number'?
					Math['pow']($pow31,$pow32):
					$p['op_pow']($pow31,$pow32)))==typeof ($mul42=0.5) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42)))==typeof ($mul44=$p['getattr'](self, 'ratio')) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44));
			}
			sx1 = $p['__op_add']($add35=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add36=$p['float_int']((typeof ($mul45=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul46=0.5) && typeof $mul45=='number'?
				$mul45*$mul46:
				$p['op_mul']($mul45,$mul46))));
			sy1 = $p['__op_add']($add37=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add38=$p['float_int']((typeof ($mul47=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul48=0.5) && typeof $mul47=='number'?
				$mul47*$mul48:
				$p['op_mul']($mul47,$mul48))));
			sx2 = $p['__op_add']($add39=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add40=$p['float_int']((typeof ($mul49=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul50=0.5) && typeof $mul49=='number'?
				$mul49*$mul50:
				$p['op_mul']($mul49,$mul50))));
			sy2 = $p['__op_add']($add41=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add42=$p['float_int']((typeof ($mul51=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul52=0.5) && typeof $mul51=='number'?
				$mul51*$mul52:
				$p['op_mul']($mul51,$mul52))));
			return ($p['cmp']($p['__op_add']($add43=(typeof ($pow33=$p['__op_sub']($sub21=sx1,$sub22=sx2))==typeof ($pow34=2) && typeof $pow33=='number'?
				Math['pow']($pow33,$pow34):
				$p['op_pow']($pow33,$pow34)),$add44=(typeof ($pow35=$p['__op_sub']($sub23=sy1,$sub24=sy2))==typeof ($pow36=2) && typeof $pow35=='number'?
				Math['pow']($pow35,$pow36):
				$p['op_pow']($pow35,$pow36))), $p['__op_add']($add45=(typeof ($pow37=radius1)==typeof ($pow38=2) && typeof $pow37=='number'?
				Math['pow']($pow37,$pow38):
				$p['op_pow']($pow37,$pow38)),$add46=(typeof ($pow39=radius2)==typeof ($pow40=2) && typeof $pow39=='number'?
				Math['pow']($pow39,$pow40):
				$p['op_pow']($pow39,$pow40)))) == -1);
		}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_collide_circle_ratio', $p['tuple']($bases), $data);
	})();
	$m['collide_mask'] = function(sprite1, sprite2) {
		var $sub26,$sub27,$sub25,$sub28,mask1,mask2;
		if ($p['bool']($p['hasattr'](sprite1, 'mask'))) {
			mask1 = $p['getattr'](sprite1, 'mask');
		}
		else {
			mask1 = $m['mask']['from_surface']($p['getattr'](sprite1, 'image'));
		}
		if ($p['bool']($p['hasattr'](sprite2, 'mask'))) {
			mask2 = $p['getattr'](sprite2, 'mask');
		}
		else {
			mask2 = $m['mask']['from_surface']($p['getattr'](sprite2, 'image'));
		}
		if ($p['bool'](mask1['overlap'](mask2, $p['tuple']([$p['__op_sub']($sub25=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$sub26=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x')), $p['__op_sub']($sub27=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$sub28=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'))])))) {
			return true;
		}
		else {
			return false;
		}
		return null;
	};
	$m['collide_mask']['__name__'] = 'collide_mask';

	$m['collide_mask']['__bind_type__'] = 0;
	$m['collide_mask']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['groupcollide'] = function(group1, group2, dokill1, dokill2) {
		var $iter29_type,$iter26_nextval,$iter28_idx,$iter26_idx,$iter26_array,$iter27_nextval,$iter30_nextval,$iter27_array,$iter26_type,$iter27_iter,sprite2,$iter27_type,sprite1,$iter30_type,collide,$iter29_nextval,$iter30_idx,$iter28_iter,$iter28_type,$iter26_iter,$iter28_array,$iter30_iter,$iter28_nextval,$iter27_idx,$iter29_array,$iter30_array,$iter29_idx,$iter29_iter;
		collide = $p['dict']([]);
		$iter26_iter = group1;
		$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
		while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
			sprite1 = $iter26_nextval['$nextval'];
			$iter27_iter = group2;
			$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
			while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
				sprite2 = $iter27_nextval['$nextval'];
				if ($p['bool'](sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect')))) {
					if ($p['bool'](!collide['__contains__'](sprite1))) {
						collide['__setitem__'](sprite1, $p['list']([]));
					}
					collide['__getitem__'](sprite1)['append'](sprite2);
				}
			}
		}
		if ($p['bool'](collide)) {
			if ($p['bool'](dokill1)) {
				$iter28_iter = collide;
				$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
				while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
					sprite1 = $iter28_nextval['$nextval'];
					sprite1['kill']();
				}
			}
			if ($p['bool'](dokill2)) {
				$iter29_iter = collide;
				$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
				while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
					sprite1 = $iter29_nextval['$nextval'];
					$iter30_iter = collide['__getitem__'](sprite1);
					$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
					while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
						sprite2 = $iter30_nextval['$nextval'];
						sprite2['kill']();
					}
				}
			}
		}
		return collide;
	};
	$m['groupcollide']['__name__'] = 'groupcollide';

	$m['groupcollide']['__bind_type__'] = 0;
	$m['groupcollide']['__args__'] = [null,null,['group1'],['group2'],['dokill1'],['dokill2']];
	$m['spritecollideany'] = function(sprite, group) {
		var $iter31_array,$iter31_nextval,$iter31_idx,$iter31_type,$iter31_iter,sprites;
		$iter31_iter = group;
		$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
		while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
			sprites = $iter31_nextval['$nextval'];
			if ($p['bool'](sprite['rect']['intersects']($p['getattr'](sprites, 'rect')))) {
				return true;
			}
		}
		return false;
	};
	$m['spritecollideany']['__name__'] = 'spritecollideany';

	$m['spritecollideany']['__bind_type__'] = 0;
	$m['spritecollideany']['__args__'] = [null,null,['sprite'],['group']];
	return this;
}; /* end pyjsdl.sprite */


/* end module: pyjsdl.sprite */


/*
PYJS_DEPS: ['pyjsdl.rect.rectPool', 'pyjsdl', 'pyjsdl.rect', 'pyjsdl.mask']
*/
