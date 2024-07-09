"use client";
import { useEffect } from 'react';
import $ from "jquery";

const Slider = () => {
    useEffect(() => {
        function detect_active() {
            var get_active = $("#dp-slider .dp_item:first-child").data("class");
            $("#dp-dots li").removeClass("active");
            $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
        }

        $("#dp-next").click(function () {
            var total = $(".dp_item").length;
            $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });
            detect_active();
        });

        $("#dp-prev").click(function () {
            var total = $(".dp_item").length;
            $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });

            detect_active();
        });

        $("#dp-dots li").click(function () {
            $("#dp-dots li").removeClass("active");
            $(this).addClass("active");
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dp-slider .dp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dp-slider")
                .fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });
        });

        $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dp-slider .dp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dp-slider")
                .fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });

            detect_active();
        });
    }, []);

    return (
        <>
            <div id="slider">
                <img src="/slider-img.png" className="img-fluid" id="sliderImg" alt="" />
                <div className="dp-wrap">
                    <div id="dp-slider">
                        <div className="dp_item" data-class="1" data-position="1">
                            <div className="dp-content">
                                <h2>THE SWEETHEART SWINDLER</h2>
                                <p>A charming and sexy young woman swept him off his feet.  Consistent calls and video chats which consisted of sharing life stories created a bond removing barriers and the likelihood for distrust.  Little did he know this was a meticulous trap used many times on unsuspecting men!</p>
                                <p>After months of affectionate messages, he stepped up to help her with many financial needs.  But, his supposed partner disappeared, taking with her a significant sum of his hard-earned savings.  It turned out to be a heart-wrenching case of the “Sweetheart Swindler” leaving him emotionally shattered and financially drained.</p>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <img src="/testi-1.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><img src="/location.png" alt="" /> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <img className="img-fluid" src="/slider-1.png" alt="" />
                            </div>
                        </div>
                        <div className="dp_item" data-class="2" data-position="2">
                            <div className="dp-content">
                                <h2>THE LOVING TRAP FRAUD</h2>
                                <p>I was seeking partnership and connected deeply with Mark.  We painted a picturesque future together, expressing profound affection and commitment.  However, I soon realized I had fallen victim to a meticulously woven web of deceit.  What I thought was a blossoming romance turned out to be a fraudulent love trap.  The person I trusted wholeheartedly and frankly undeservedly had no genuine feelings.  It was a calculated ploy to emotionally manipulate me.  As the truth unraveled, I found myself emotionally torn which led to depression and panic attacks.  I started isolating myself because of embarrassment and eventually turned to therapy to heal and regain control over my life.  I believe I suffered a broken heart and would not wish this on my worst enemy!</p>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <img src="/testi-1.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><img src="/location.png" alt="" /> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <img className="img-fluid" src="/slider-2.png" alt="" />
                            </div>
                        </div>
                        <div className="dp_item" data-class="3" data-position="3">
                            <div className="dp-content">
                                <h2>THE CATFISH CATASTROPHE </h2>
                                <p>I fell head over heels for Alex on a dating App. We shared deep conversations and seemingly genuine emotions.</p>
                                <p>However, what began as a promising relationship turned out to be a catfishing scheme.</p>
                                <p>The person behind the screen was not who he claimed to be. His identity was fabricated, and his intentions were far from sincere, leaving me questioning everything I thought was real.</p>
                                <div className="card pb-5">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <img src="/testi-1.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><img src="/location.png" alt="" /> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <img className="img-fluid" src="/slider-3.png" alt="" />
                            </div>
                        </div>
                        <div className="dp_item" data-class="4" data-position="4">
                            <div className='dp-content'>
                                <h2>THE DECEPTIVE DOUBLE LIFE</h2>
                                <p>I was captivated by Harley who I met at a social gathering.  I felt comfortable because we had mutual acquaintances in common.  The more we talked and our relationship began to blossom, the more I began to notice inconsistencies in what he was saying and the red flags continued to grow.  After 6 months, the shocking truth was revealed that Harley was a married man with three children and was manipulating multiple women into believing he was single and in a committed relationship with them!  My trust was shattered and the revelation left me reeling with disbelief.</p>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <img src="/testi-1.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><img src="/location.png" alt="" /> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <img className="img-fluid" src="/slider-4.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <ul id="dp-dots">
                    <li data-class='1' className='active'></li>
                    <li data-class='2'></li>
                    <li data-class='3'></li>
                    <li data-class='4'></li>
                </ul>
            </div>
        </>
    );
};

export default Slider;
