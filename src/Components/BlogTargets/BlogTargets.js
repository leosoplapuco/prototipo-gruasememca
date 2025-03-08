import { useRef } from "react";

import "./BlogTargets.css";

function BlogTargets() {
    const blogTargetsRef = useRef(null);

    const scrollToStart = () => {
        if (blogTargetsRef.current) {
            blogTargetsRef.current.scrollLeft = 0;
        }
    };

    const scrollToEnd = () => {
        if (blogTargetsRef.current) {
            blogTargetsRef.current.scrollLeft = blogTargetsRef.current.scrollWidth;
        }
    };

    return (
        <div className="block-container block-container-blog-targets">
            <section className="block-content">
                <div className="block-title-container">
                    <h2 className="block-title">Últimas novedades</h2>
                </div>

                <div className="d-flex-column gap-20">
                    <div className="blog-targets-container">
                        <ul ref={blogTargetsRef} className="blog-targets">
                            <li>
                                <a href="/" title="" className="blog-target">
                                    <img src="https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg" alt="" />
                                    <div className="d-flex-column gap-10">
                                        <span className="blog-target-label blog-target-label-1">Servicios</span>
                                        <p className="blog-target-title">Montaje de estructura metálica | REPSOL</p>
                                        <p className="text">Lorem Ipsum is simpltandard dummy text ever since the 1500s.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" title="" className="blog-target">
                                    <img src="https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg" alt="" />
                                    <div className="d-flex-column gap-10">
                                        <span className="blog-target-label blog-target-label-3">Novedades</span>
                                        <p className="blog-target-title">Montaje de estructura metálica | REPSOL</p>
                                        <p className="text">Lorem Ipsum is simpltandard dummy text ever since the 1500s.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" title="" className="blog-target">
                                    <img src="https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg" alt="" />
                                    <div className="d-flex-column gap-10">
                                        <span className="blog-target-label blog-target-label-2">Blog</span>
                                        <p className="blog-target-title">Montaje de estructura metálica | REPSOL</p>
                                        <p className="text">Lorem Ipsum is simpltandard dummy text ever since the 1500s.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" title="" className="blog-target">
                                    <img src="https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg" alt="" />
                                    <div className="d-flex-column gap-10">
                                        <span className="blog-target-label blog-target-label-1">Servicios</span>
                                        <p className="blog-target-title">Montaje de estructura metálica | REPSOL</p>
                                        <p className="text">Lorem Ipsum is simpltandard dummy text ever since the 1500s.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" title="" className="blog-target">
                                    <img src="https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg" alt="" />
                                    <div className="d-flex-column gap-10">
                                        <span className="blog-target-label blog-target-label-3">Novedades</span>
                                        <p className="blog-target-title">Montaje de estructura metálica | REPSOL</p>
                                        <p className="text">Lorem Ipsum is simpltandard dummy text ever since the 1500s.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" title="" className="blog-target">
                                    <img src="https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg" alt="" />
                                    <div className="d-flex-column gap-10">
                                        <span className="blog-target-label blog-target-label-2">Blog</span>
                                        <p className="blog-target-title">Montaje de estructura metálica | REPSOL</p>
                                        <p className="text">Lorem Ipsum is simpltandard dummy text ever since the 1500s.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="blog-targets-buttons">
                        <button type="button" className="button-link button-link-2 blog-targets-button blog-targets-button-1" onClick={scrollToStart}>
                            <span className="material-icons">chevron_left</span>
                        </button>

                        <button type="button" className="button-link button-link-2 blog-targets-button blog-targets-button-2" onClick={scrollToEnd}>
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogTargets;
