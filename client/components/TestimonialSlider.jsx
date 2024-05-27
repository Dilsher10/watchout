"use client";
import { useEffect } from 'react';
import $ from "jquery";

const TestimonialSlider = () => {
    useEffect(() => {
        function detect_active() {
            var get_active = $("#dpp-slider .dpp_item:first-child").data("class");
            $("#dpp-dots li").removeClass("active");
            $("#dpp-dots li[data-class=" + get_active + "]").addClass("active");
        }

        $("#dpp-next").click(function () {
            var total = $(".dpp_item").length;
            $("#dpp-slider .dpp_item:first-child").hide().appendTo("#dpp-slider").fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });
            detect_active();
        });

        $("#dpp-prev").click(function () {
            var total = $(".dpp_item").length;
            $("#dpp-slider .dpp_item:last-child").hide().prependTo("#dpp-slider").fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });

            detect_active();
        });

        $("#dpp-dots li").click(function () {
            $("#dpp-dots li").removeClass("active");
            $(this).addClass("active");
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dpp-slider .dpp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dpp-slider")
                .fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });
        });

        $("body").on("click", "#dpp-slider .dpp_item:not(:first-child)", function () {
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dpp-slider .dpp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dpp-slider")
                .fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });

            detect_active();
        });
    }, []);

    return (
        <>
            <div id="sliderr">
                <h1>What Our Users Have To Say</h1>
                <div className="dpp-wrap">
                    <div id="dpp-slider">
                        <div className="dpp_item" data-class="1" data-position="1">
                            <div className="dpp-content">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>Sarah Thompson</h2>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>WatchOut has been a game-changer in my dating life. The customizable alerts allowed me to set my safety parameters, and the app's guidance has been invaluable. It's like having a personal safety advisor in my pocket.</p>
                                <button className='btn'>Submit</button>
                            </div>
                            <div className="dpp-img">
                                <img className="img-fluid" src="/Testii-1.png" alt="" />
                            </div>
                        </div>
                        <div className="dpp_item" data-class="2" data-position="2">
                            <div className="dpp-content">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>James Rodriguez</h2>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Using WatchOut has made me feel more in control while dating. The range of alerts and advice helped me make informed decisions, and I feel much more confident navigating the complexities of relationships.</p>
                                <button className='btn'>Submit</button>
                            </div>
                            <div className="dpp-img">
                                <img className="img-fluid" src="/Testi-2.png" alt="" />
                            </div>
                        </div>
                        <div className="dpp_item" data-class="3" data-position="3">
                            <div className="dpp-content">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>Emily Parker</h2>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                            <li><img src="/review.png" className='review' alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>I rely on WatchOut for every date now. Being able to tailor alerts based on location and warning labels gives me peace of mind. It's a vital tool for anyone looking to date more safely.</p>
                                <button className='btn'>Submit</button>
                            </div>
                            <div className="dpp-img">
                                <img className="img-fluid" src="/Testi-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <ul id="dpp-dots">
                    <li data-class="1" className="active"></li>
                    <li data-class="2"></li>
                    <li data-class="3"></li>
                </ul>
            </div>
        </>
    );
};

export default TestimonialSlider;
