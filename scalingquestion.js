(function(){
    'use strict';
    

    //数字ごとのリアクション
    //123 あんまり気分が良くないみたいですね。ゆっくり過ごしてみると気分が変わるかもしれません。
    //456　悪くない気分みたいですね！もう１ポイントでも気分を上げるには何ができるでしょうか？もしよかったらシェアしてみてください！
    //789 かなり調子が良いみたいですね！その調子で行きましょー！よかったら今のgoodな気分をシェアしてください(^^)
    //10　最高の気分ですね！すばらしい！最高一日ってことをみんなにシェアしましょー！

    //数字ごとのリアクション
    const reaction=[
        'あんまり気分が良くないみたいですね。ゆっくり過ごしてみると気分が変わるかもしれません。',
        'あんまり気分が良くないみたいですね。ゆっくり過ごしてみると気分が変わるかもしれません。',
        'あんまり気分が良くないみたいですね。ゆっくり過ごしてみると気分が変わるかもしれません。',
        'あんまり気分が良くないみたいですね。ゆっくり過ごしてみると気分が変わるかもしれません。',
        '悪くない気分みたいですね！もう１ポイントでも気分を上げるには何ができるでしょうか？もしよかったらシェアしてみてください！',
        '悪くない気分みたいですね！もう１ポイントでも気分を上げるには何ができるでしょうか？もしよかったらシェアしてみてください！',
        '悪くない気分みたいですね！もう１ポイントでも気分を上げるには何ができるでしょうか？もしよかったらシェアしてみてください！',
        'かなり調子が良いみたいですね！その調子で行きましょー！よかったら今のgoodな気分をシェアしてください(^^)',
        'かなり調子が良いみたいですね！その調子で行きましょー！よかったら今のgoodな気分をシェアしてください(^^)',
        'かなり調子が良いみたいですね！その調子で行きましょー！よかったら今のgoodな気分をシェアしてください(^^)',
        '最高の気分ですね！すばらしい！最高の一日をみんなにシェアしましょー！'
    ];

    const resultDivided = document.getElementById('resultArea');
    const tweetDivided =document.getElementById('TweetArea');
    const reactionButton =document.getElementById('reaction');

    //小要素の削除
    function removeAllchildren(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    };

    reactionButton.onclick=()=>{
        //resultArea記載
        removeAllchildren(resultDivided);
        const header=document.createElement('h3');
        header.innerText='今日の気分！';
        resultDivided.appendChild(header);

        const paragraph=document.createElement('p');
        const result=scalingResult();
        paragraph.innerText=result;
        resultDivided.appendChild(paragraph);


        //TweetArea記載
        removeAllchildren(tweetDivided);
        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
            + encodeURIComponent('ScalingQuestion')
            + '&ref_src=twsrc%5Etfw';
        anchor.setAttribute('href', hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', result+'リンク');
        anchor.setAttribute('data-lang', 'ja');
        anchor.setAttribute('data-show-count', 'false');
        anchor.innerText = '今日の気分をツイートする';
        tweetDivided.appendChild(anchor);

        twttr.widgets.load();

    };

    function scalingResult(){
        //セレクトボックスの値を受け取る
        var obj = document.getElementById('score');

        //セレクトボックスの値をインデックスに渡して、配列からリアクションをもらう
        var index =obj.selectedIndex
        var test=reaction[index];
        return test;
    };
    
 
})();