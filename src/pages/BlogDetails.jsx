import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link, useParams } from "react-router-dom";
import blogData from "../assets/data/blogData";
import comment from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <>
      <Helmet title={blog.title}>
        <section>
          <Container>
            <Row>
              <Col lg="8" md="8">
                <div className="blog-details">
                  <img src={blog.imgUrl} className="w-100" alt="" />
                  <h className="section-title">{blog.title}</h>

                  <div className="blog-publisher d-flex alig-items-center gap-4 mb-4">
                    <span className="blog-author">
                      <i className="ri-user-line"></i> {blog.author}
                    </span>
                    <span className="d-felx align-items-center gap-1 section-description">
                      <i className="ri-calender-line"></i>
                      {blog.date}
                    </span>
                    <span className="d-felx align-items-center gap-1 section-description">
                      <i className="ri-time-line"></i>
                      {blog.time}
                    </span>
                  </div>

                  <p className="section-description">{blog.description}</p>
                  <h6 className="ps-5 fw-normal">
                    <blockquote>{blog.quote}</blockquote>
                  </h6>
                  <p className="section-description">{blog.description}</p>
                </div>

                <div className="comment-list mt-5">
                  <h4 className="mb-5">Comments</h4>
                  <div className="single-comment d-flex gap-3">
                    <img src={comment} alt="" />
                    <div className="comment-content">
                      <h6 className="fw-bold">David Visa</h6>
                      <p className="section-description mb-0">18 Mei, 2024</p>
                      <p className="section-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Repellendus quia qui maiores quae eligendi aliquam
                        omnis veritatis laboriosam dolor odit.
                      </p>
                      <span className="replay d-flex align-items-center gap-1">
                        <i className="ri-reply-line"></i>
                        Replay
                      </span>
                    </div>
                  </div>

                  <div className="leave-comment-form mt-5">
                    <h2>Leave a Comment</h2>
                    <p className="section-description">
                      You must sign-in to make or comment post
                    </p>

                    <Form>
                      <FormGroup className="d-flex gap-3">
                        <Input type="text" placeholder="Full name" />
                        <Input type="email" placeholder="Email" />
                      </FormGroup>

                      <FormGroup>
                        <textarea
                          rows="5"
                          className="w-100"
                          placeholder="Comment ..."
                        ></textarea>
                      </FormGroup>

                      <button className="btn comment mt-3">
                        Post a Comment
                      </button>
                    </Form>
                  </div>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="recent-post mb-4">
                  <h5 className="fw-bold">Recent Posts</h5>
                </div>
                {blogData.map((item) => (
                  <div className="recent-blog-post mb-4" key={item.id}>
                    <div className="recent-blog-item d-flex gap-3">
                      <img
                        src={item.imgUrl}
                        className="w-25 rounded-2"
                        alt=""
                      />
                      <h6>
                        <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default BlogDetails;
