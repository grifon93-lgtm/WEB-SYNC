$(document).ready(function(){
    // 1. JavaScriptで要素を特定する
        const windowWidth = $(window).width();

    //    - ボタン要素を取得する
        const $navParentLiBtn = $('.nav_parent-list_btn');
    //    - スタイルを変更する対象の要素を取得する
        const $menuBg = $('.menuBg');
        const IS_ACTIVE = 'is-active';

    // 2. ボタンにクリックイベントを設定する
    //    - ボタンがクリックされた時に実行する関数を定義する
        let isMenuOpen = false;

    // 3. ボタンにクリックイベントを設定する

        // PC版
        if (windowWidth > 780) {
            $navParentLiBtn.on('click', function(e) {
                const $parentLi = $(this).closest('li');
                const $childBoxArea = $parentLi.find('.child-box_area');

                if ($childBoxArea.length === 0) {
                    return;
                }
                e.preventDefault();
                const $childBoxBg = $parentLi.find('.child-box_bg');
                const IS_ACTIVE = 'is-active';
                
                // すでに開いているメニューと同じメニューがクリックされた場合
                if ($parentLi.hasClass(IS_ACTIVE)) {
                    $parentLi.removeClass(IS_ACTIVE);
                    $childBoxArea.removeClass(IS_ACTIVE);
                    $childBoxBg.removeClass(IS_ACTIVE);
                    //$menuBg.removeClass(IS_ACTIVE);
                } else {
                    // 他の開いているメニューをすべて閉じる
                    $navParentLiBtn.closest('li').removeClass(IS_ACTIVE);
                    $('.child-box_area, .child-box_bg').removeClass(IS_ACTIVE);

                    // クリックされたメニューを開く
                    $parentLi.addClass(IS_ACTIVE);
                    $childBoxArea.addClass(IS_ACTIVE);
                    $childBoxBg.addClass(IS_ACTIVE);
                    $menuBg.addClass(IS_ACTIVE);
                }
            });
            
            $menuBg.on('click', function(){
                $('.child-box_area, .child-box_bg, .menuBg').removeClass(IS_ACTIVE);
            });

        } else {
            // タブレット版
            const $trigger = $('.trigger');
            const $header = $('header');
            const $parentList = $('nav .parent-list');
            const $closeBtnSp = $('.close-btn_sp');
            const IS_CLOSED = 'is-closed';

            // ハンバーガーメニューの開閉
            $trigger.on('click', function(){
                $(this).toggleClass(IS_ACTIVE);
                $header.toggleClass(IS_ACTIVE);
                $menuBg.toggleClass(IS_ACTIVE);
                $parentList.removeClass(IS_CLOSED);
                $parentList.find('.child-box_area').removeClass(IS_ACTIVE);
                $(this).find('span').toggleClass(IS_ACTIVE);
            });

            // childBoxAreaの開閉
            $navParentLiBtn.on('click', function(e){
                const $parentLi = $(this).closest('li');
                const $childBoxArea = $parentLi.find('.child-box_area');
                const $childBoxBg = $parentLi.find('.child-box_bg');

                if ($childBoxArea.length === 0) {
                    return;
                }
                e.preventDefault();
                if($childBoxArea.hasClass(IS_ACTIVE)) {
                    $childBoxArea.removeClass(IS_ACTIVE);
                    $childBoxBg.removeClass(IS_ACTIVE);
                    $parentList.removeClass(IS_CLOSED);
                } else {
                    $('.child-box_area').removeClass(IS_ACTIVE);
                    $('.child-box_bg').removeClass(IS_ACTIVE);
                    
                    $childBoxArea.addClass(IS_ACTIVE);
                    $childBoxBg.addClass(IS_ACTIVE);
                    $parentList.addClass(IS_CLOSED);
                }
            });

            $closeBtnSp.on('click', function(){
                $('.child-box_area, .child-box_bg').removeClass(IS_ACTIVE);
                $('nav .parent-list').removeClass(IS_CLOSED);
            })

            $menuBg.on('click', function(){
                $('.child-box_area, .child-box_bg').removeClass(IS_ACTIVE);
                $('.menuBg').removeClass(IS_ACTIVE);
                $('header').removeClass(IS_ACTIVE);
                $('nav .parent-list').removeClass(IS_CLOSED);
                $('.trigger').removeClass(IS_ACTIVE);
                $('.trigger').find('span').removeClass(IS_ACTIVE);
            });

        }



});
