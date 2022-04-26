const photos = [
    { link: './img/photos/gV-NTVf4eKXFpo88rX16voGvOJmvw_lR2CCChUBKTiPiRdlSkisuU03Rg0OYxXpE-4jd-vD0_kZompckOkgNQ0hA.jpg' },
    { link: './img/photos/y7hcUehKjZnL0Ux6MIY56Rvvwyr7jIQOdkNlc8qsNPn913rpv8oFhnwr36EDWcOlM-2LASNuyVX6HHXcWUGlk-pz.jpg' },
    { link: './img/photos/xIs7UBooL4opFbhl8RKDFH-L0FyHUVXzWZt7IakS_3bd9dVeBWYQgPkg2wSp6HGInbApBZY8IQeshlSOzVd9ysMV.jpg' },
    { link: './img/photos/Y7Gpx7zhdcNViQkvz0jDVSmBcWnyQo0ZUmP061glYRJZjdEu6jcuYMT9y9Yvf4PDKAOG06WTaWgpwLPRjQBXR9WM.jpg' },
    { link: './img/photos/e7CfkvHSyrDbvIpQdopImvRrsg4bES5GPULhSBnRNu-e6jqeNQEvPQLPYemNV22AukOY2VZjPWkIK4rRrMMSKwLv.jpg' },
    { link: './img/photos/2iju6YsKD-hYmL6AhEoNbe91j76p3IPN45uwFC7PvoqmrjbU-DzHlJ2mfzOkB8wuGIqI2OZlq9tuXlAIq-hYntvs.jpg' },
    { link: './img/photos/RPcUxoVU_9eWs4VzsdFlFlMV8XbVRBrFSAL0JGpl97DW7uO23P8GhfwD2j7KAqkf0t5_2CkfmkNmEjdK67FsHH5U.jpg' },
    { link: './img/photos/e_2Mo_k7N5f-II439XjhclgLeqnTUcHqOX2podFppbdHwLfm_da8yq74q1beK22RQfjPRP0ZPPP48fACVCenD9Qh.jpg' },
    { link: './img/photos/y51RO_OEY4y6MT0Ezam4l95vCPqe1PlExFIApJPGNNljuV-4pwvUHMbvD3wyD1e9-EHVzUU3rPGwSrbJyKa4C-AK.jpg' },
    { link: './img/photos/DRDerK2dm06OnEwjzxnOMfU18ZWzXi4wCoJs60VaznBJeuVwa3n6dPI_S71sjC_IXUAF54A8rEUgKssb50qUQwMP.jpg' },
    { link: './img/photos/k_E7KZ3Ab1pl6bK1UtmuLt6v2pu_JgMjknCaqvS6fU3KchOzPMcQKLIQdrd5FL7LA-ufMhk7mCYGErA5gEWthJBY.jpg' },
];
const splitArr = (arr, chunks) =>
    [...Array(chunks)].map((_, c) => arr.filter((n, i) => i % chunks === c));
function asyncFunction(item, cb, index) {
    item.forEach((element, i) => {
        console.log(index)
        $(`<img src="${element.link}" data-cursor="-opaque -lg" data-scroll data-scroll-speed="${index + 1}" class="lazy" data-src="${element.link}" style="width:100%">`).appendTo(`.photos__container .row .column:nth-child(${index + 1})`);
    });
    cb();
}
let requests = splitArr(photos, 4).reduce((promiseChain, item, index) => {
    return promiseChain.then(() => new Promise((resolve) => {
        asyncFunction(item, resolve, index);
    }));
}, Promise.resolve());
requests.then(() => console.log('done'))
document.addEventListener("DOMContentLoaded", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        mobile: {
            breakpoint: 0,
            smooth: true
        },
        tablet: {
            breakpoint: 0,
            smooth: true
        }
    });
    // var lazyLoadInstance = new LazyLoad();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
        MouseFollower.registerGSAP(gsap);
        const cursor = new MouseFollower({
            visible: true,
            speed: 1
        });
        $('[data-magnetic]').each(function () { new Magnetic(this); });
    }
    window.showSidePanel = function (burgerChecked) {
        if (burgerChecked == true) {
            anime.timeline().add({
                targets: '.navbar .menu',
                duration: 1000,
                translateX: ['100%', '0%'],
                easing: 'easeOutQuint',
                endDelay: 0
            })
            anime({
                targets: '.navbar .menu .container .inner .colums .items div',
                duration: 1000,
                opacity: [0, 1],
                translateY: ['10px', 0],
                easing: 'easeInOutQuint',
                delay: anime.stagger(70, { start: 0, direction: 'reverse' })
            })
        } else {
            anime({
                targets: '.navbar .menu .container .inner .colums .items div',
                duration: 200,
                opacity: [1, 0],
                easing: 'easeInOutQuint',
                delay: anime.stagger(50, { start: 0 })
            })
            anime({
                targets: '.navbar .menu',
                duration: 1000,
                translateX: [0, '100%'],
                easing: 'easeInOutQuint'
            })
        }
    };

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline().add({
        targets: '.sep',
        width: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeInOutCirc",
        duration: 1000,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        direction: 'left',
        offset: '-=775',
        // delay: (el, i) => 34 * (i + 1),
        delay: anime.stagger(34)
    })
    anime({
        targets: 'section.main .landing .container .title .branding h2, section.main .landing .container .separator, section.main .landing .container .subtitle p',
        opacity: [0, 1],
        translateX: ['-10px', 0],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: anime.stagger(300)
    })
    anime({
        targets: '.landing__img',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 2000,
        easing: 'easeOutCubic'
    })
    anime({
        targets: '.landing__img_secondary.top',
        opacity: [0, 1],
        translateY: [0, '-15%'],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 1500
    })
    anime({
        targets: '.landing__img_secondary.bottom',
        opacity: [0, 1],
        translateY: [0, '15%'],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 1500
    });

    
    window.addEventListener("load", function () {
        anime({
            targets: '.preloader',
            duration: 1000,
            delay: 100,
            translateY: [0, '-100%'],
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            complete: () => document.body.classList.add('loaded')
        })
        /* COLOR CHANGER */
        gsap.registerPlugin(ScrollTrigger);
        const pageContainer = document.querySelector('[data-scroll-container]')
        scroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(pageContainer, {
            scrollTop(value) {
                return arguments.length
                    ? scroll.scrollTo(value, 0, 0)
                    : scroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: pageContainer.style.transform ? "transform" : "fixed"
        });
        const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
        scrollColorElems.forEach((colorSection, i) => {
            const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
            const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
            ScrollTrigger.create({
                trigger: colorSection,
                scroller: "[data-scroll-container]",
                start: "top 50%",
                onEnter: () =>
                    gsap.to("body", {
                        backgroundColor: colorSection.dataset.bgcolor,
                        color: colorSection.dataset.textcolor,
                        overwrite: "auto"
                    }),
                onLeaveBack: () =>
                    gsap.to("body", {
                        backgroundColor: prevBg,
                        color: prevText,
                        overwrite: "auto"
                    })
            });
        });

        ScrollTrigger.addEventListener("refresh", () => scroll.update());

        ScrollTrigger.refresh();
    });
});