/* start module: pyjsdl.cursors */
$pyjs['loaded_modules']['pyjsdl.cursors'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.cursors']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.cursors'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.cursors'];
	$m['__repr__'] = function() { return '<module: pyjsdl.cursors>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.cursors';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['cursors'] = $pyjs['loaded_modules']['pyjsdl.cursors'];


	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['Const'] = $p['___import___']('pyjsdl.locals', 'pyjsdl', null, false);
	$m['$assign1'] = $p['tuple']([]);
	$m['arrow'] = $m['$assign1'];
	$m['diamond'] = $m['$assign1'];
	$m['broken_x'] = $m['$assign1'];
	$m['tri_left'] = $m['$assign1'];
	$m['tri_right'] = $m['$assign1'];
	$m['compile'] = function(strings, black, white, xor) {
		if (typeof black == 'undefined') black=arguments['callee']['__args__'][3][1];
		if (typeof white == 'undefined') white=arguments['callee']['__args__'][4][1];
		if (typeof xor == 'undefined') xor=arguments['callee']['__args__'][5][1];
		var rang,$iter1_iter,blank,$iter2_type,$iter2_iter,$iter1_array,$sub3,dbit,$sub4,$iter1_nextval,string,db,c,$iter2_idx,$sub2,data,$sub1,mbit,$iter2_nextval,$iter1_type,mb,i,j,mask,$add2,s,$add1,$iter1_idx,$assign2,$iter2_array;
		data = $p['list']([]);
		mask = $p['list']([]);
		dbit = $p['dict']([[black, 1], [white, 0], [xor, 1]]);
		mbit = $p['dict']([[black, 1], [white, 1], [xor, 0]]);
		string = ''['join'](strings);
		rang = $p['range'](8);
		blank = '        ';
		$iter1_iter = $p['range'](0, $p['len'](string), 8);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			i = $iter1_nextval['$nextval'];
			s = $p['__getslice'](string, i, $p['__op_add']($add1=i,$add2=8));
			$assign2 = 0;
			db = $assign2;
			mb = $assign2;
			if ($p['bool'](!$p['op_eq'](s, blank))) {
				$iter2_iter = rang;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					j = $iter2_nextval['$nextval'];
					c = s['__getitem__'](j);
					if ($p['bool']($p['op_eq'](c, ' '))) {
						continue;
					}
					if ($p['bool'](dbit['__getitem__'](c))) {
						db |= (1)<<($p['__op_sub']($sub1=7,$sub2=j));
					}
					if ($p['bool'](mbit['__getitem__'](c))) {
						mb |= (1)<<($p['__op_sub']($sub3=7,$sub4=j));
					}
				}
			}
			data['append']($p['float_int'](db));
			mask['append']($p['float_int'](mb));
		}
		return $p['tuple']([$p['tuple'](data), $p['tuple'](mask)]);
	};
	$m['compile']['__name__'] = 'compile';

	$m['compile']['__bind_type__'] = 0;
	$m['compile']['__args__'] = [null,null,['strings'],['black', 'X'],['white', '.'],['xor', 'o']];
	$m['create_cursor'] = function(size, data, mask) {
		var rang,$iter3_type,surface,$iter4_type,$iter4_iter,$iter3_idx,$iter3_nextval,$sub8,black,$iter3_iter,white,$sub7,$sub6,$sub5,$or1,$add4,$or2,y,$add10,$iter3_array,i,$iter4_nextval,j,$iter4_idx,$add3,$add6,$add7,$assign3,$add5,$iter4_array,x,$add8,$add9;
		surface = $m['Surface'](size, $p['getattr']($m['Const'], 'SRCALPHA'));
		black = $m['Color'](0, 0, 0, 255);
		white = $m['Color'](255, 255, 255, 255);
		$assign3 = 0;
		x = $assign3;
		y = $assign3;
		rang = $p['range'](8);
		$iter3_iter = $p['range']($p['len'](data));
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			i = $iter3_nextval['$nextval'];
			if ($p['bool'](($p['bool']($or1=data['__getitem__'](i))?$or1:mask['__getitem__'](i)))) {
				$iter4_iter = rang;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					j = $iter4_nextval['$nextval'];
					if ($p['bool']((data['__getitem__'](i))&((1)<<($p['__op_sub']($sub5=7,$sub6=j))))) {
						surface['setFillStyle'](black);
						surface['fillRect']($p['__op_add']($add3=x,$add4=j), y, 1, 1);
					}
					else if ($p['bool']((mask['__getitem__'](i))&((1)<<($p['__op_sub']($sub7=7,$sub8=j))))) {
						surface['setFillStyle'](white);
						surface['fillRect']($p['__op_add']($add5=x,$add6=j), y, 1, 1);
					}
				}
			}
			x = $p['__op_add']($add7=x,$add8=8);
			if ($p['bool'](((($p['cmp'](x, size['__getitem__'](0)))|1) == 1))) {
				x = 0;
				y = $p['__op_add']($add9=y,$add10=1);
			}
		}
		return surface;
	};
	$m['create_cursor']['__name__'] = 'create_cursor';

	$m['create_cursor']['__bind_type__'] = 0;
	$m['create_cursor']['__args__'] = [null,null,['size'],['data'],['mask']];
	return this;
}; /* end pyjsdl.cursors */


/* end module: pyjsdl.cursors */


/*
PYJS_DEPS: ['pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.locals']
*/
