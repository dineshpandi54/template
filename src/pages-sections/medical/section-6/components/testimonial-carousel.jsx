"use client";

import { useRef } from "react";
import IconButton from "@mui/material/IconButton";

// MUI ICON COMPONENTS
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";

// CUSTOM ICON COMPONENT
import Quote from "icons/Quote";

// STYLED COMPONENTS
import { TestimonialCard, TestimonialRootStyle } from "./styles";


// ==============================================================


// ==============================================================

export default function TestimonialCarousel({
  testimonials
}) {
  const carouselRef = useRef(null);
  const handlePrev = () => carouselRef.current?.slickPrev();
  const handleNext = () => carouselRef.current?.slickNext();
  return <TestimonialRootStyle>
      <div className="wrapper">
        <Quote className="icon" />

        <Carousel ref={carouselRef} slidesToShow={1} arrows={false}>
          {testimonials.map(({
          title,
          id,
          user,
          comment
        }) => <TestimonialCard key={id}>
              <h3 className="title">{title}</h3>
              <p className="comment">{comment}</p>

              <div className="user-info">
                <div className="user-img-wrapper">
                  <LazyImage alt="user" width={240} height={240} src={user.avatar} />
                </div>

                <div>
                  <h6 className="username">{user.name}</h6>
                  <p className="designation">{user.designation}</p>
                </div>
              </div>
            </TestimonialCard>)}
        </Carousel>

        <div className="btn-wrapper">
          <IconButton onClick={handlePrev}>
            <ArrowBack fontSize="small" />
          </IconButton>

          <IconButton onClick={handleNext} className="right-arrow">
            <ArrowForward fontSize="small" />
          </IconButton>
        </div>
      </div>
    </TestimonialRootStyle>;
}