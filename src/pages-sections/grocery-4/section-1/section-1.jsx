"use client";

import { useCallback, useState } from "react";

// LOCAL CUSTOM COMPONENTS
import StoryItem from "components/stories/story-item";
import StoryViewer from "components/stories/story-viewer";
import StoryContent from "components/stories/story-content";

// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function Section1({
  stories
}) {
  const [open, setOpen] = useState(false);
  const [startStory, setStartStory] = useState(0);

  
// HANDLER CLOSE STORY
  const handleClose = useCallback(() => setOpen(false), []);

  
// HANDLER OPEN STORY
  const handleOpenStory = useCallback(no => {
    setOpen(true);
    setStartStory(no);
  }, []);

  
// CAROUSEL RESPONSIVENESS OBJECT
  const responsive = [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 5
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 2
    }
  }];

  
// STORY CONTENT LIST
  const storiesContent = stories.map(({
    imageBig,
    url
  }) => ({
    content: () => <StoryContent image={imageBig} url={url} />
  }));
  return <div className="mb-2">
      <Carousel rtl={false} slidesToShow={6} spaceBetween={5} infinite={false} responsive={responsive} arrowStyles={{
      color: "#2B3445",
      borderRadius: "50%",
      opacity: "1 !important",
      backgroundColor: "white",
      "&.prev": {
        left: "5px !important"
      },
      "&.next": {
        right: "5px !important"
      }
    }}>
        {stories.map(({
        id,
        image
      }, index) => <StoryItem image={image} key={id} handleClick={() => handleOpenStory(index)} />)}
      </Carousel>

      <StoryViewer open={open} stories={storiesContent} handleClose={handleClose} currentIndex={startStory} />
    </div>;
}