// インスタンス変数
var _numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var _nextNumber = 1;

// シャッフルする
_numberList = _.shuffle(_numberList);

// 数字パネルを並べる
for (var i = 0; i < _numberList.length; i++) {
	var ctl = Alloy.createController('touch', {number: _numberList[i]});
	ctl.on('touch', touchHandler);
	$.touchArea.add(ctl.getView());
};

// Windowを開く
$.window.open();

// パネルクリック時ハンドラ
function touchHandler(e) {
	if (e.number == _nextNumber) {
		// 正解
		e.source.correct();
		_nextNumber += 1;
	} else {
		// 不正解
	}
}
