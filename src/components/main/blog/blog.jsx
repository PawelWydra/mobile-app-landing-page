import React, { useEffect } from "react";
import "./blog.css";
import SectionContainer from "../../utils/SectionContainer";

const data = "05 December 2023";

function Blog() {
  useEffect(() => {
    const adjustFormAlignment = () => {
      const form = document.querySelector(".blog-newsletter-form");
      const description = document.querySelector(
        ".blog-newsletter-description"
      );

      if (form && description.offsetTop < form.offsetTop) {
        form.classList.remove("justify-end");
        form.classList.add("justify-start");
        console.log(description.offsetTop, form.offsetTop);
      } else {
        form.classList.remove("justify-start");
        form.classList.add("justify-end");
        console.log("false");
      }
    };

    window.addEventListener("resize", adjustFormAlignment);
    adjustFormAlignment(); // Call the function once to adjust alignment on initial render

    return () => {
      window.removeEventListener("resize", adjustFormAlignment);
    };
  }, []);

  return (
    <SectionContainer>
      <div className="flex flex-col gap-8">
        <span className="self-center">OUR BLOG</span>
        <h1 className="self-center">Latest Blogs & News</h1>
        <div className="flex gap-4 flex-wrap">
          <div className="blog-article-newsletter flex-1">
            <p>{data}</p>
            <h3>Bringing You Upto Speed in Mobile App</h3>
          </div>
          <div className="blog-article-phone flex-1">
            <p>{data}</p>
            <h3>Bringing You Upto Speed in Mobile App</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 *:flex-1">
          <div className="blog-newsletter-description min-w-80 ">
            <h3 className="text-left font-semibold text-xl">Newsletter</h3>
            <p className="text-left text-semibold text-lg">Sign-up today to enjoy awesome updates from us!</p>
          </div>
          <form className="blog-newsletter-form flex items-center max-md:gap-6 gap-10 min-w-[40rem] flex-wrap justify-end">
            <input
              className="min-w-32 w-60 p-1 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="Your Email"
            />
            <button type="submit" className="blog-newsletter-button">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Blog;
