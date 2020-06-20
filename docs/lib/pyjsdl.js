/* start module: pyjsdl */
$pyjs['loaded_modules']['pyjsdl'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl'];
	var $m = $pyjs['loaded_modules']['pyjsdl'];
	$m['__repr__'] = function() { return '<module: pyjsdl>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl';
	$m['__name__'] = __mod_name__;
	var $lambda1;

	$m['util'] = $p['___import___']('pyjsdl.util', 'pyjsdl', null, false);
	$m['Display'] = $p['___import___']('pyjsdl.display.Display', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['Image'] = $p['___import___']('pyjsdl.image.Image', 'pyjsdl', null, false);
	$m['Draw'] = $p['___import___']('pyjsdl.draw.Draw', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('pyjsdl.event.Event', 'pyjsdl', null, false);
	$m['Key'] = $p['___import___']('pyjsdl.key.Key', 'pyjsdl', null, false);
	$m['Mouse'] = $p['___import___']('pyjsdl.mouse.Mouse', 'pyjsdl', null, false);
	$m['Transform'] = $p['___import___']('pyjsdl.transform.Transform', 'pyjsdl', null, false);
	$m['Surfarray'] = $p['___import___']('pyjsdl.surfarray.Surfarray', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['Mixer'] = $p['___import___']('pyjsdl.mixer.Mixer', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['mask'] = $p['___import___']('pyjsdl.mask', 'pyjsdl', null, false);
	$m['font'] = $p['___import___']('pyjsdl.font', 'pyjsdl', null, false);
	$m['sprite'] = $p['___import___']('pyjsdl.sprite', 'pyjsdl', null, false);
	$m['cursors'] = $p['___import___']('pyjsdl.cursors', 'pyjsdl', null, false);
	$p['__import_all__']('pyjsdl.locals', 'pyjsdl', $m, null, false);
	$m['time'] = $m['Time']();
	$m['display'] = $m['Display']();
	$m['image'] = $m['Image']();
	$m['draw'] = $m['Draw']();
	$m['transform'] = $m['Transform']();
	$m['surfarray'] = $m['Surfarray']();
	$m['mixer'] = $m['Mixer']();
	$m['event'] = $m['Event']();
	$m['mouse'] = $m['Mouse']();
	$m['key'] = $m['Key']();
	var 	$lambda1 = function() {

		return null;
	};
	$lambda1['__name__'] = '$lambda1';

	$lambda1['__bind_type__'] = 0;
	$lambda1['__args__'] = [null,null];
	$m['init'] = $lambda1;
	$m['quit'] = function() {
		var canvas;
		canvas = $m['display']['get_canvas']();
		canvas['stop']();
		return null;
	};
	$m['quit']['__name__'] = 'quit';

	$m['quit']['__bind_type__'] = 0;
	$m['quit']['__args__'] = [null,null];
	$m['error'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl';
		var $bases = new Array($p['RuntimeError']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('error', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl */


/* end module: pyjsdl */


/*
PYJS_DEPS: ['pyjsdl.util', 'pyjsdl', 'pyjsdl.display.Display', 'pyjsdl.display', 'pyjsdl.surface.Surface', 'pyjsdl.surface', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.image.Image', 'pyjsdl.image', 'pyjsdl.draw.Draw', 'pyjsdl.draw', 'pyjsdl.event.Event', 'pyjsdl.event', 'pyjsdl.key.Key', 'pyjsdl.key', 'pyjsdl.mouse.Mouse', 'pyjsdl.mouse', 'pyjsdl.transform.Transform', 'pyjsdl.transform', 'pyjsdl.surfarray.Surfarray', 'pyjsdl.surfarray', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.mixer.Mixer', 'pyjsdl.mixer', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.mask', 'pyjsdl.font', 'pyjsdl.sprite', 'pyjsdl.cursors', 'pyjsdl.locals']
*/
