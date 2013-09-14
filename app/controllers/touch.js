var args = arguments[0] || {};

// 数字を画面に表示
$.number.text = args.number;

// タッチハンドラ
$.touchArea.addEventListener('click', function(e) {
	$.trigger('touch', {source: $, number: args.number});
});

// [PUBLIC]正解だから色を消す
exports.correct = function() {
	$.touchArea.backgroundColor = '#132A15';
	$.number.color = '#888';
};