$(function () {

    function setupRipples(selector) {

        const $water = $(selector);

        if (!$water.length) return;

        let ripplesStarted = false;
        let rippleTimer = null;

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    // 画面内に入ったとき
                    if (entry.isIntersecting && !ripplesStarted) {

                        $water.ripples({
                            resolution: 256,
                            dropRadius: 20,
                            perturbance: 0.03,
                            interactive: true
                        });

                        ripplesStarted = true;

                        // 自動波紋
                        rippleTimer = setInterval(function () {

                            const x = Math.random();
                            const y = Math.random();

                            $water.ripples(
                                'drop',
                                x,
                                y,
                                15,
                                0.02
                            );

                        }, 2500);

                    }


                    // 画面外に出たとき
                    if (!entry.isIntersecting && ripplesStarted) {

                        clearInterval(rippleTimer);
                        rippleTimer = null;

                        $water.ripples('destroy');

                        ripplesStarted = false;

                    }

                });

            },
            {
                threshold: 0.1
            }
        );

        observer.observe($water[0]);

    }


    // Skills
    setupRipples('.skills-bg');
    setupRipples('.other-bg');

});