/* start module: conway */
$pyjs['loaded_modules']['conway'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['conway']['__was_initialized__']) return $pyjs['loaded_modules']['conway'];
	var $m = $pyjs['loaded_modules']['conway'];
	$m['__repr__'] = function() { return '<module: conway>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'conway';
	$m['__name__'] = __mod_name__;


	$m['copy'] = $p['___import___']('copy', null);
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
	$m['gameOfLife'] = function(board) {
		var b,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,i,j,m,nnb,$iter1_iter,$iter2_idx,$iter2_nextval,$or2,$iter2_type,n,$or1,$iter2_array,$iter1_array;
		m = $p['len'](board);
		n = $p['len'](board['__getitem__'](0));
		b = $m['copy']['deepcopy'](board);
		$iter1_iter = $p['range'](m);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			i = $iter1_nextval['$nextval'];
			$iter2_iter = $p['range'](n);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				j = $iter2_nextval['$nextval'];
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
	return this;
}; /* end conway */


/* end module: conway */


/*
PYJS_DEPS: ['copy']
*/
