// CarouselComponent.jsx
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Scene } from "./Scene";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrow";
import { Stack, Text } from "@chakra-ui/react";
import ImageScreen from "./ImageScreen";
import VideoScreen from "./VideoScreen";
const datasets = [
  {
    id: 1,
    type: "360_video",
    header: 'Plucking',
    data: [
      {
        id: 1,
        type: "360_video",
        image_url:
          "https://360-images-v1.s3.ap-south-1.amazonaws.com/Hand+Plucking.mp4",
        farmer_info: {
          x_axis: -50,
          y_axis: -5,
          z_axis: 50,
          age: 45,
          name: "Sailen Phukan",
          image:
            "https://360-images-v1.s3.ap-south-1.amazonaws.com/consumer_app/360_media/farmer.jpg",
          location: "GP Tea Farm",
        },
        screen_info: [
          {
            x_axis: 50,
            y_axis: -20,
            z_axis: 50,
            info: `Only the top tender two leaves and a bud are meticulously plucked by skilled workers perfected over years of working in the farm. Its is also known as the Gold Standard of Tea Plucking. `,
          },
          {
            x_axis: 50,
            y_axis: 20,
            z_axis: -50,
            info: `High Nutritive Value: The young leaves and buds contain a high concentration of polyphenols, especially catechins, which are powerful antioxidants. These compounds help protect the body against free radical damage. Theanine is an amino acid found in higher concentrations in young tea leaves. It has a calming effect on the brain and can enhance focus and concentration.
            Regenerative Natural Farming: At Woolah Tea, we grow our teas organically without chemicals, using regenerative methods to enhance soil health and biodiversity. By adopting sustainable practices like natural pest control and renewable energy, we aim to cut down on our carbon footprint. Our commitment ensures that you enjoy pure, nutrient-rich teas while supporting a healthier planet and local communities.`,
          },
        ],
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
  },

  {
    id: 2,
    type: "2d_video",
    header: 'Withering',
    data: [
      {
        id: 1,
        type: "2d_video",
        image_url:
          "https://360-images-v1.s3.ap-south-1.amazonaws.com/Natural+withering.mp4",
        screen_info: {
          x_axis: 85,
          y_axis: 250,
          info: "Unlike mass-produced commodity teas, we follow traditional and natural withering processes in small batches. It helps in controlled dehydration or moisture reduction of the leaves and helps in flavour development. Fresh oxygen comes in contact with the leaves to do the magic.",
        },
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
  },

  {
    id: 3,
    type: "360_video",
    header: 'Tea Crafting',
    data: [
      {
        id: 1,
        type: "360_video",
        image_url:
          "https://360-images-v1.s3.ap-south-1.amazonaws.com/test_360video.mp4",
        screen_info: [
          {
            x_axis: 50,
            y_axis: -20,
            z_axis: 50,
            info: "Sorting & tying of the finest tea leaves Weighing of the leaves Compressing of the tea dips Sachet Packaging",
          },
        ],
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
  },

  {
    id: 4,
    type: "360_video",
    header: 'Sachet Making',
    data: [
      {
        id: 1,
        type: "360_video",
        image_url:
          "https://360-images-v1.s3.ap-south-1.amazonaws.com/Sachet_packing.mp4",
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
  },
];

const CarouselComponent = ({ productData }) => {
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
    <Stack position={"relative"} overflow={"hidden"} maxH={"100dvh"}>
      <Slider ref={sliderRef} {...settings}>
        {datasets.map((dataset) => {
          return (
            <Stack key={dataset.id}>
              {dataset?.type === "360_image" && (
                <Scene
                  header={dataset?.header}
                  setIsInteracting={setIsInteracting}
                  data={dataset?.data}
                />
              )}

              {dataset?.type === "360_video" && (
                <Scene
                  header={dataset?.header}
                  setIsInteracting={setIsInteracting}
                  data={dataset?.data}
                />
              )}

              {dataset?.type === "2d_image" && (
                <ImageScreen header={dataset?.header} setIsInteracting={setIsInteracting} data={dataset?.data} />
              )}

              {dataset?.type === "2d_video" && (
                <VideoScreen header={dataset?.header} setIsInteracting={setIsInteracting} data={dataset?.data} />
              )}
            </Stack>
          );
        })}
      </Slider>

      {currentSlide > 0 && (
        <CustomPrevArrow isVisible={isVisible} onClick={prevSlide} />
      )}
      {currentSlide < datasets.length - 1 && (
        <CustomNextArrow isVisible={isVisible} onClick={nextSlide} />
      )}
    </Stack>
  );
};

export default CarouselComponent;
