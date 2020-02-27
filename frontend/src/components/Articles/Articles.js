import React, { Component } from 'react';

class Articles extends Component {
  render() {
    return (
      <section id="tips-article-area" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>Tips and articles</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      {/* Articles Content Wrap Start */}
      <div className="row">
        {/* Single Articles Start */}
        <div className="col-lg-12">
          <article className="single-article">
            <div className="row">
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-1.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
              {/* Articles Content Start */}
              <div className="col-lg-7">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="article-body">
                      <h3><a href="article-details.html">Wliquam sit amet urna eullam</a></h3>
                      <div className="article-meta">
                        <a href="#" className="author">By :: <span>Admin</span></a>
                        <a href="#" className="commnet">Comments :: <span>10</span></a>
                      </div>
                      <div className="article-date">25 <span className="month">jan</span></div>
                      <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>
                      <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Articles Content End */}
            </div>
          </article>
        </div>
        {/* Single Articles End */}
        {/* Single Articles Start */}
        <div className="col-lg-12">
          <article className="single-article middle">
            <div className="row">
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5 d-xl-none">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-2.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
              {/* Articles Content Start */}
              <div className="col-lg-7">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="article-body">
                      <h3><a href="article-details.html">fringilla oremedad ipsum dolor sit</a></h3>
                      <div className="article-meta">
                        <a href="#" className="author">By :: <span>Admin</span></a>
                        <a href="#" className="commnet">Comments :: <span>10</span></a>
                      </div>
                      <div className="article-date">14<span className="month">feb</span></div>
                      <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>
                      <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Articles Content End */}
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5 d-none d-xl-block">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-2.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
            </div>
          </article>
        </div>
        {/* Single Articles End */}
        {/* Single Articles Start */}
        <div className="col-lg-12">
          <article className="single-article">
            <div className="row">
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-3.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
              {/* Articles Content Start */}
              <div className="col-lg-7">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="article-body">
                      <h3><a href="article-details.html">Tempored incididunt ut labore</a></h3>
                      <div className="article-meta">
                        <a href="#" className="author">By :: <span>Admin</span></a>
                        <a href="#" className="commnet">Comments :: <span>10</span></a>
                      </div>
                      <div className="article-date">17 <span className="month">feb</span></div>
                      <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>
                      <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Articles Content End */}
            </div>
          </article>
        </div>
        {/* Single Articles End */}
      </div>
      {/* Articles Content Wrap End */}
    </div>
  </section>
    );
  }
}

export default Articles;