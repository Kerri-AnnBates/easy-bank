import React from 'react';
import imageConfettit from "../images/image-confetti.jpg";
import imageCurrency from "../images/image-currency.jpg";
import imagePlane from "../images/image-plane.jpg";
import imageRestaurant from "../images/image-restaurant.jpg";

const Articles = () => {
    return (
        <section>
            <div className="wrapper">
                <h2>Latest Articles</h2>
                <div className="article_content flex">
                    <div className="article_block">
                        <div className="image-container">
                            <img src={imageCurrency} alt="Stacks of currency" />
                        </div>
                        <div className="article_excerpt">
                            <p>By Claire Robinson</p>
                            <p>Receive money in any currency with no fees
                                The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                        </div>
                    </div>
                    <div className="article_block">
                        <div className="image-container">
                            <img src={imageRestaurant} alt="Dinner table at a restaurant" />
                        </div>
                        <div className="article_excerpt">
                            <p>By Wilson Hutton</p>
                            <p>Treat yourself without worrying about money
                                Our simple budgeting feature allows you to separate out your spending and set
                                realistic limits each month. That means you …</p>
                        </div>
                    </div>
                    <div className="article_block">
                        <div className="image-container">
                            <img src={imagePlane} alt="Plane wing" />
                        </div>
                        <div className="article_excerpt">
                            <p>By Wilson Hutton</p>
                            <p>Take your Easybank card wherever you go
                                We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                while you’re abroad. We’ll even show you …</p>
                        </div>
                    </div>
                    <div className="article_block">
                        <div className="image-container">
                            <img src={imageConfettit} alt="Floating confetti" />
                        </div>
                        <div className="article_excerpt">
                            <p>By Claire Robinson</p>
                            <p>Our invite-only Beta accounts are now live!
                                After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles;
