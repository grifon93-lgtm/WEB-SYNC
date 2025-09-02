$(document).ready(function(){
    const $windowWidth = $(window).width();
    
    // each section
    const $serviceSection = $('.l-section-box .service');
    const $ahievementSection = $('.l-section-box .achievement');
    const $companySection = $('.l-section-box .company');
    const $newsSection = $('.l-section-box .news');
    const $contactSection = $('.l-section-box.info .contact');

    // each element
    const $imageBox = $('.image-box');
    const $captionBox = $('.caption-box');
    const $linkButtonBox = $('.link-button-box');

    // class 
    const IS_ACTIVE = 'is-active';
    const IS_NOT_SELECTED = 'is-not-selected';
    const FOR_SP_IS_ACTIVE = 'for-sp-is-active';



    // news
    $newsSection.find('.news-list').find('li').on('mouseenter', function() {
        const $selectedCard = $(this);
        const $cardImage = $selectedCard.find('.news-card .card-image .picture img');

        $newsSection.find('.news-list').find('li').removeClass(IS_ACTIVE);
        $selectedCard.addClass(IS_ACTIVE);
        $cardImage.addClass(IS_ACTIVE);

    });
    $newsSection.find('.news-list').find('li').on('mouseleave', function() {
        $newsSection.find('.news-list').find('li').removeClass(IS_ACTIVE);
        $newsSection.find('.news-card .card-image .picture img').removeClass(IS_ACTIVE);
    });

    function handleResize() {


        // for PC & Tab
        if ($windowWidth > 430) {

            // company
            //$companySection.find($captionBox).find('li.about_company').addClass(IS_ACTIVE);
            //$companySection.find($imageBox).find('li.about_company').addClass(IS_ACTIVE);

            $companySection.find($captionBox).find('li').on('mouseenter', function() {
                $companySection.find($captionBox).find('li').removeClass(IS_ACTIVE);
                $companySection.find($imageBox).find('li').removeClass(IS_ACTIVE);

                const $this = $(this);
                $this.addClass(IS_ACTIVE);

                const className = $this.attr('class').split(' ')[0];
                $companySection.find($imageBox).find('li.' + className).addClass(IS_ACTIVE);

            } );

            
            // for PC only
            if ($windowWidth > 920 ){

            // 初期状態
            $serviceSection.find($captionBox).find('li.mdm').addClass(IS_ACTIVE);
            $serviceSection.find($imageBox).find('li.mdm').addClass(IS_ACTIVE);
            $contactSection.find($imageBox).find('li.contact').addClass(IS_ACTIVE);


            // service
            $serviceSection.find($captionBox).find('li').on('mouseenter', function() {
                $serviceSection.find($captionBox).find('li').removeClass(IS_ACTIVE);
                $serviceSection.find($imageBox).find('li').removeClass(IS_ACTIVE);

                $(this).addClass(IS_ACTIVE);
                if ($(this).hasClass('mdm')){
                    $serviceSection.find($imageBox).find('li.mdm').addClass(IS_ACTIVE);
                } else if ($(this).hasClass('consulting')) {
                    $serviceSection.find($imageBox).find('li.consulting').addClass(IS_ACTIVE);
                }
            } );


            // ahievement
            $ahievementSection.find($imageBox).find('li').on('mouseenter', function() {
                const $selectedLi = $(this);
                const $notSelectedLis = $ahievementSection.find($imageBox).find('li').not($selectedLi);

                $ahievementSection.find($imageBox).find('li').removeClass(IS_ACTIVE);
                $ahievementSection.find($imageBox).find('li').removeClass(IS_NOT_SELECTED);
                $selectedLi.addClass(IS_ACTIVE);
                $notSelectedLis.addClass(IS_NOT_SELECTED);
            });
            $ahievementSection.find($imageBox).find('li').on('mouseleave', function() {
                $ahievementSection.find($imageBox).find('li').removeClass(IS_ACTIVE);
                $ahievementSection.find($imageBox).find('li').removeClass(IS_NOT_SELECTED);
            });


            // contact
            $contactSection.find($linkButtonBox).on('mouseenter', function(){
                // すべての画像を非アクティブにする
                $contactSection.find($imageBox).find('li').removeClass(IS_ACTIVE);

                if ($(this).find('a[href="contact.html"]').length > 0) {
                    $contactSection.find($imageBox).find('li.contact').addClass(IS_ACTIVE);
                } 
                else if ($(this).find('a[href="document.html"]').length > 0) {
                    $contactSection.find($imageBox).find('li.document').addClass(IS_ACTIVE);
                }
            });

            }       
            // for Tab
            else if ($windowWidth > 430 && $windowWidth <= 920) {
                // 初期状態
                $serviceSection.find($captionBox).find('li.mdm').addClass(IS_ACTIVE);
                $serviceSection.find($imageBox).find('li.mdm').addClass(IS_ACTIVE);


                // service
                $serviceSection.find($captionBox).find('li').on('mouseenter', function() {
                    $serviceSection.find($captionBox).find('li').removeClass(IS_ACTIVE);
                    $serviceSection.find($imageBox).find('li').removeClass(IS_ACTIVE);

                    $(this).addClass(IS_ACTIVE);
                    if ($(this).hasClass('mdm')){
                        $serviceSection.find($imageBox).find('li.mdm').addClass(IS_ACTIVE);
                    } else if ($(this).hasClass('consulting')) {
                        $serviceSection.find($imageBox).find('li.consulting').addClass(IS_ACTIVE);
                    }
                } );
            }

        } else {
        // for SP
        
            // company
            $companySection.find($captionBox).find('li').removeClass(IS_ACTIVE);
            $companySection.find($imageBox).find('li').removeClass(IS_ACTIVE);
            $companySection.find($captionBox).find('li').removeClass(FOR_SP_IS_ACTIVE);
            $companySection.find($imageBox).find('li').removeClass(FOR_SP_IS_ACTIVE);

            $companySection.find($captionBox).find('li').on('click', function() {
                $companySection.find($captionBox).find('li').removeClass(FOR_SP_IS_ACTIVE);
                $companySection.find($imageBox).find('li').removeClass(FOR_SP_IS_ACTIVE);

                const $this = $(this);
                $this.addClass(FOR_SP_IS_ACTIVE);
            } );
        }
    }

    handleResize();
    $(window).resize(handleResize);

});