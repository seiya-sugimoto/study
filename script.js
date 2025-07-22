// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', function() {
    // すべてのli要素を取得
    const items = document.querySelectorAll('ul li');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            alert('選択した項目: ' + item.textContent);
        });
    });

    // ボタンを作成
    const button = document.createElement('button');
    button.textContent = 'Web開発を始める';
    button.style.marginTop = '20px';
    // ボタンのクリックイベント
    button.addEventListener('click', function() {
        alert('一緒にWeb開発を楽しみましょう！');
    });
    // bodyの最後にボタンを追加
    document.body.appendChild(button);
}); 