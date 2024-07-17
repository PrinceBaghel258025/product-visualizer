// CarouselComponent.jsx
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Scene } from "./Scene";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrow";
const datasets = [
  [
    {
      id: 1,
      type: "360_video",
      image_url:
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/test_360video.mp4",
    },
    {
      id: 2,
      type: "text_content",
      text_content: {
        name: "Subscribe",
        content: "You can subscribe to AgSpeak to display content!",
      },
    },
  ],
  [
    {
      id: 1,
      type: "360_image",
      image_url: "https://360-images-v1.s3.ap-south-1.amazonaws.com/1.jpg",
      farmer_info: {
        age: 45,
        name: "Sailen Phukan",
        image:
          "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/360_media/farmer.jpg",
        location: "GP Tea Farm",
      },
    },
    {
      id: 2,
      type: "text_content",
      text_content: {
        name: "Wondering what you just saw?",
        content:
          "You can see the exact tea garden from where the box in your hand was processed! That is how transparent we are about our minimally hand processed tea!",
      },
    },
    {
      id: 3,
      type: "image_content",
      image_urls: [
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(1).jpeg",
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(2).jpeg",
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(3).jpeg",
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(5).jpeg",
      ],
    },
    {
      id: 4,
      type: "text_content",
      text_content: {
        name: "What makes the tea box in your hand so special?",
        content:
          "Woolah TrueDips is nothing like you have ever tasted or experienced. Woolah TrueDips is the World’s First Bagless Tea, which in the shape of a tablet locks in the most authentic and exotic Assam tea flavours you have ever tasted.",
      },
    },
    {
      id: 5,
      type: "video_content",
      video_urls: [
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/videos/WOOLAH+TEA+FEATURE_+THE+PLATE+-+upamanyu+borkakoty.mp4",
      ],
    },
    {
      id: 6,
      type: "text_content",
      text_content: {
        name: "‘Source transparency’ for you, the consumer:",
        content:
          "In the heart of Woolah is a meticulously curated value chain which provides gainful earning sources to organically grown micro tea farm owners, tea workers, packaging specialists. It has also delegated women workers to participate and earn a livelihood for themselves. \n              Woolah also contributes towards funding quality education for the children of tea workers. The idea is to empower our smallholder tea growers with more visibility, while keeping our sourcing 100% transparent for our consumers!\n              ",
      },
    },
    {
      id: 7,
      type: "header",
      header_text: "Our Team",
    },
    {
      id: 8,
      type: "image_content",
      image_urls: [
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/images/Woolah+farm+(4).jpeg",
      ],
    },
    {
      type: "brand_banner",
      brand_banner:
        "https://360-images-v1.s3.ap-south-1.amazonaws.com/Woolah_banner2.webp",
    },
    {
      link: {
        url: "https://woolahtea.com/products/rare-assam-green-tea",
        label: "View Product",
      },
      type: "redirect_url",
    },
    {
      type: "social_links",
      social_links: [
        {
          url: "https://www.youtube.com/@woolahtea",
          label: "Youtube",
          thumbnail:
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/social_icons/youtube.png",
        },
        {
          url: "https://www.facebook.com/WoolahTea/",
          label: "Facebook",
          thumbnail:
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/social_icons/facebook.png",
        },
        {
          url: "https://www.instagram.com/be_woolah/",
          label: "Instagram",
          thumbnail:
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/social_icons/instagram.png",
        },
      ],
    },
  ],
];

const CarouselComponent = () => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isInteracting) {
      setIsVisible(false);
    } else {
      const timer = setTimeout(() => setIsVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInteracting]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    swipe: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    afterChange: (newIndex) => setCurrentSlide(newIndex),
    // prevArrow: currentSlide > 0 && <CustomPrevArrow isVisible={isVisible} />,
    // nextArrow: currentSlide < datasets.length - 1 && <CustomNextArrow isVisible={isVisible} />,
  };
  const sliderRef = useRef();

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider ref={sliderRef} {...settings}>
        {datasets.map((dataset) => (
          // <div key={dataset.id}>
          //   {/* <div style={{ height: "100vh", width: "100vw", borderWidth: "50px" }}></div> */}
          <Scene
            setIsInteracting={setIsInteracting}
            key={dataset.id}
            data={dataset}
          />
          // </div>
        ))}
      </Slider>
      {currentSlide > 0 && (
        <CustomPrevArrow isVisible={isVisible} onClick={prevSlide} />
      )}
      {currentSlide < datasets.length - 1 && (
        <CustomNextArrow isVisible={isVisible} onClick={nextSlide} />
      )}
    </div>
  );
};

export default CarouselComponent;
