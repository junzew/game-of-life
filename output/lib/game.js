/* start module: game */
$pyjs['loaded_modules']['game'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['game']['__was_initialized__']) return $pyjs['loaded_modules']['game'];
	var $m = $pyjs['loaded_modules']['game'];
	$m['__repr__'] = function() { return '<module: game>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game';
	$m['__name__'] = __mod_name__;


	$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
	$m['num_live_neighbours'] = function(i, j, board) {
		var $sub22,$sub23,$sub20,$sub21,$sub24,$add25,$and5,$sub18,$add28,$add21,$add20,$add23,$add22,$and6,$add24,$add27,$add26,$sub9,$sub8,$sub17,$sub12,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$and8,$sub19,$and3,$sub13,$and1,$and2,$sub10,$and4,$sub16,$sub15,$sub14,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$and7,$add18,$add19,count,m,n,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$sub11,$add8,$add9;
		count = 0;
		m = $p['len'](board);
		n = $p['len'](board['__getitem__'](0));
		if ($p['bool'](((($p['cmp'](j, 1))|1) == 1))) {
			count = $p['__op_add']($add1=count,$add2=board['__getitem__'](i)['__getitem__']($p['__op_sub']($sub1=j,$sub2=1)));
		}
		if ($p['bool'](($p['cmp'](j, $p['__op_sub']($sub3=n,$sub4=1)) == -1))) {
			count = $p['__op_add']($add5=count,$add6=board['__getitem__'](i)['__getitem__']($p['__op_add']($add3=j,$add4=1)));
		}
		if ($p['bool'](((($p['cmp'](i, 1))|1) == 1))) {
			count = $p['__op_add']($add7=count,$add8=board['__getitem__']($p['__op_sub']($sub5=i,$sub6=1))['__getitem__'](j));
		}
		if ($p['bool'](($p['cmp'](i, $p['__op_sub']($sub7=m,$sub8=1)) == -1))) {
			count = $p['__op_add']($add11=count,$add12=board['__getitem__']($p['__op_add']($add9=i,$add10=1))['__getitem__'](j));
		}
		if ($p['bool'](($p['bool']($and1=((($p['cmp'](i, 1))|1) == 1))?((($p['cmp'](j, 1))|1) == 1):$and1))) {
			count = $p['__op_add']($add13=count,$add14=board['__getitem__']($p['__op_sub']($sub9=i,$sub10=1))['__getitem__']($p['__op_sub']($sub11=j,$sub12=1)));
		}
		if ($p['bool'](($p['bool']($and3=((($p['cmp'](i, 1))|1) == 1))?($p['cmp'](j, $p['__op_sub']($sub13=n,$sub14=1)) == -1):$and3))) {
			count = $p['__op_add']($add17=count,$add18=board['__getitem__']($p['__op_sub']($sub15=i,$sub16=1))['__getitem__']($p['__op_add']($add15=j,$add16=1)));
		}
		if ($p['bool'](($p['bool']($and5=($p['cmp'](i, $p['__op_sub']($sub17=m,$sub18=1)) == -1))?((($p['cmp'](j, 1))|1) == 1):$and5))) {
			count = $p['__op_add']($add21=count,$add22=board['__getitem__']($p['__op_add']($add19=i,$add20=1))['__getitem__']($p['__op_sub']($sub19=j,$sub20=1)));
		}
		if ($p['bool'](($p['bool']($and7=($p['cmp'](i, $p['__op_sub']($sub21=m,$sub22=1)) == -1))?($p['cmp'](j, $p['__op_sub']($sub23=n,$sub24=1)) == -1):$and7))) {
			count = $p['__op_add']($add27=count,$add28=board['__getitem__']($p['__op_add']($add23=i,$add24=1))['__getitem__']($p['__op_add']($add25=j,$add26=1)));
		}
		return count;
	};
	$m['num_live_neighbours']['__name__'] = 'num_live_neighbours';

	$m['num_live_neighbours']['__bind_type__'] = 0;
	$m['num_live_neighbours']['__args__'] = [null,null,['i'],['j'],['board']];
	$m['make_copy'] = function(board) {

		return function(){
			var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,row,$iter1_array;
	$collcomp1 = $p['list']();
		$iter1_iter = board;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			row = $iter1_nextval['$nextval'];
			$collcomp1['append']($p['__getslice'](row, 0, null));
		}

	return $collcomp1;}();
	};
	$m['make_copy']['__name__'] = 'make_copy';

	$m['make_copy']['__bind_type__'] = 0;
	$m['make_copy']['__args__'] = [null,null,['board']];
	$m['gameOfLife'] = function(board) {
		var nnb,$iter2_nextval,$iter2_type,$iter2_iter,$or2,i,$iter3_nextval,$iter3_array,m,$iter3_idx,n,$iter2_idx,b,$iter3_type,$or1,j,$iter2_array,$iter3_iter;
		m = $p['len'](board);
		n = $p['len'](board['__getitem__'](0));
		b = $m['make_copy'](board);
		$iter2_iter = $p['range'](m);
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			$iter3_iter = $p['range'](n);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				j = $iter3_nextval['$nextval'];
				nnb = $m['num_live_neighbours'](i, j, b);
				if ($p['bool']($p['op_eq'](board['__getitem__'](i)['__getitem__'](j), 1))) {
					if ($p['bool'](($p['cmp'](nnb, 2) == -1))) {
						board['__getitem__'](i)['__setitem__'](j, 0);
					}
					else if ($p['bool'](($p['bool']($or1=$p['op_eq'](nnb, 2))?$or1:$p['op_eq'](nnb, 3)))) {
						board['__getitem__'](i)['__setitem__'](j, 1);
					}
					else if ($p['bool'](($p['cmp'](nnb, 3) == 1))) {
						board['__getitem__'](i)['__setitem__'](j, 0);
					}
				}
				else {
					if ($p['bool']($p['op_eq'](nnb, 3))) {
						board['__getitem__'](i)['__setitem__'](j, 1);
					}
				}
			}
		}
		return board;
	};
	$m['gameOfLife']['__name__'] = 'gameOfLife';

	$m['gameOfLife']['__bind_type__'] = 0;
	$m['gameOfLife']['__args__'] = [null,null,['board']];
	$m['pygame']['init']();
	$m['SCREEN_WIDTH'] = 640;
	$m['SCREEN_HEIGHT'] = 480;
	$m['screen'] = $m['pygame']['display']['set_mode']($p['tuple']([$m['SCREEN_WIDTH'], $m['SCREEN_HEIGHT']]));
	$m['background'] = $m['pygame']['Surface']($m['screen']['get_size']());
	$m['background']['fill']($p['tuple']([255, 255, 255]));
	$m['background'] = $m['background']['convert']();
	$m['clock'] = $m['pygame']['time']['Clock']();
	$m['FPS'] = 2;
	$m['r_pentomino'] = $p['list']([$p['list']([0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 1, 1, 0, 0, 0, 0]), $p['list']([0, 1, 1, 0, 0, 0, 0, 0]), $p['list']([0, 0, 1, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0])]);
	$m['acorn'] = $p['list']([$p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 1, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 1, 0, 0, 0, 0, 0]), $p['list']([0, 1, 1, 0, 0, 1, 1, 1, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])]);
	$m['glider'] = $p['list']([$p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 1, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 1, 0, 0, 0, 0, 0, 0]), $p['list']([0, 1, 1, 1, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])]);
	$m['board'] = $m['acorn'];
	$m['render_my_game'] = function(board) {
		var $iter5_nextval,$add31,$sub26,$sub27,$sub25,$iter5_idx,$sub28,$mul7,$iter5_iter,$iter4_type,$mul6,$iter5_type,$iter4_iter,$add29,$mul4,$iter5_array,$div4,$mul8,$div2,$div3,$mul5,$div1,$mul3,$mul2,$mul1,i,$iter4_nextval,$add30,j,m,n,$iter4_idx,$add32,$iter4_array;
		$m['screen']['blit']($m['background'], $p['tuple']([0, 0]));
		$m['background']['fill']($p['tuple']([255, 255, 255]));
		m = $p['len'](board);
		n = $p['len'](board['__getitem__'](0));
		$iter4_iter = $p['range'](m);
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			i = $iter4_nextval['$nextval'];
			$iter5_iter = $p['range'](n);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				j = $iter5_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](board['__getitem__'](i)['__getitem__'](j), 1))) {
					$m['pygame']['draw']['rect']($m['background'], $p['tuple']([0, 0, 0]), $p['tuple']([$p['__op_add']($add29=$p['__op_sub']($sub25=(typeof ($div1=$m['SCREEN_WIDTH'])==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_truediv']($div1,$div2)),$sub26=(typeof ($mul1=m)==typeof ($mul2=10) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2))),$add30=(typeof ($mul3=i)==typeof ($mul4=10) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))), $p['__op_add']($add31=$p['__op_sub']($sub27=(typeof ($div3=$m['SCREEN_HEIGHT'])==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_truediv']($div3,$div4)),$sub28=(typeof ($mul5=n)==typeof ($mul6=10) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6))),$add32=(typeof ($mul7=j)==typeof ($mul8=10) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))), 8, 8]));
				}
			}
		}
		$m['pygame']['display']['flip']();
		return null;
	};
	$m['render_my_game']['__name__'] = 'render_my_game';

	$m['render_my_game']['__bind_type__'] = 0;
	$m['render_my_game']['__args__'] = [null,null,['board']];
	$m['run'] = function() {
		var milliseconds;
		milliseconds = $m['clock']['tick']($m['FPS']);
		$m['board'] = $m['gameOfLife']($m['board']);
		$m['render_my_game']($m['board']);
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	$m['pygame']['display']['setup']($m['run']);
	return this;
}; /* end game */


/* end module: game */


/*
PYJS_DEPS: ['pyjsdl']
*/
