// インスタンス変数
var _numberObjects = {};
var _nextNumber = 1;

// 乱数で数字を作る
// 結果はオブジェクトにControllerと共に入れる
var count = 0;
var min = 1;
var max = 25
while (count < 25) {
	var numberCandidate = Math.floor(Math.random() * (max - min + 1)) + min;
	if (!_.has(_numberObjects, numberCandidate)) {
		_numberObjects[numberCandidate] = Alloy.createController('touch', {number: numberCandidate});
		count += 1;
	}
}

// 数字パネルを並べる
for (var number in _numberObjects) {
	_numberObjects[number].on('touch', touchHandler);
	$.touchArea.add(_numberObjects[number].getView());
}

// Windowを開く
$.window.open();

// パネルクリック時ハンドラ
function touchHandler(e) {
	if (e.number == _nextNumber) {
		// 正解
		_numberObjects[e.number].correct();
		_nextNumber += 1;
	} else {
		// 不正解
		
	}
}
