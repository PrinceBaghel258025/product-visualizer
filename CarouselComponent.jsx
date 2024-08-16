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
import DraggableDrawer from "./generic/DraggableDrawer";
import { DrawerInfo } from "./DrawerInfo";
const defaultSheetData = [
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
];
const datasets = [
  {
    id: 1,
    type: "360_video",
    header: "Plucking",
    targetRotation: 1.9198621771937625, //110 degree
    zoom: 0.45,
    data: [
      {
        id: 1,
        type: "360_video",
        image_url: "https://res.cloudinary.com/djzloojxk/video/upload/v1722403644/higher_quality/ad7f9tqae2obcd3jrikw.mp4",
        screen_info: [
          {
            x_axis: 100,
            y_axis: -60,
            z_axis: -100,
            header: "Tea Plucking",
            info: `Expertly hand-picked, only the youngest and most tender 2 leaves and a bud are plucked.They are also known as the ‘Gold Standard of Tea Plucking’.`,
          },
          {
            x_axis: 200,
            y_axis: -100,
            z_axis: -100,
            header: "Nutritional Benefits",
            info: `Packed with antioxidants, our tea's young leaves are rich in polyphenols, known to combat harmful free radicals in our body`,
          },
          {
            x_axis: -150,
            y_axis: -60,
            z_axis: -250,
            header: "Sustainable Farming",
            info: `Grown organically without chemicals, our tea is produced sustainably using renewable energy to minimize our environmental impact.`,
          },
        ],
      },
      ...defaultSheetData,
    ],
  },

  {
    id: 2,
    type: "2d_video",
    header: "Withering",
    zoom: 1,
    data: [
      {
        id: 1,
        type: "2d_video",
        image_url:
          "https://res.cloudinary.com/djzloojxk/video/upload/v1721884633/Natural_withering_o5appn.mp4",
        screen_info: {
          x_axis: 180,
          y_axis: 500,
          header: "Small Batches",
          info: "Unlike mass-produced teas, our small batches undergo a traditional withering process. This careful drying enhances the tea’s natural flavor.",
        },
      },
      ...defaultSheetData,
    ],
  },

  {
    id: 3,
    type: "360_video",
    header: "Tea Crafting",
    fov: 90,
    zoom: 1,
    data: [
      {
        id: 1,
        type: "360_video",
        image_url:
          "https://res.cloudinary.com/djzloojxk/video/upload/f_auto:video,q_auto:best/v1/higher_quality/abzl1dfyuwnexfmevnap",
        screen_info: [
          {
            x_axis: 100,
            y_axis: -50,
            z_axis: -80,
            header: "Sorting & tying of the finest tea leaves",
            info: "Meticulously hand-sorted and tied, a testament to our dedication to quality",
          },
          {
            x_axis: 0,
            y_axis: -90,
            z_axis: 180,
            header: "Weighing of the leaves",
            info: "Precisely measured to perfection, ensuring consistency in every cup",
          },
          {
            x_axis: -20,
            y_axis: -35,
            z_axis: -90,
            header: "Compressing of the tea dips",
            info: "Gently pressed to retain freshness, a harmonious blend of art and science",
          },
        ],
      },
      ...defaultSheetData,
    ],
  },

  {
    id: 4,
    type: "360_video",
    header: "Sachet Making",
    targetRotation: 0.8726646259971648, // 50 degree
    zoom: 1,
    data: [
      {
        id: 1,
        type: "360_video",
        image_url:
          "https://res.cloudinary.com/djzloojxk/video/upload/f_auto:video,q_auto:best/v1/higher_quality/pfhy4kwquhobv0tcn2uv",
        screen_info: [
          {
            x_axis: 100,
            y_axis: -50,
            z_axis: -80,
            header: "Sorting & tying of the finest tea leaves",
            info: "Meticulously hand-sorted and tied, a testament to our dedication to quality",
          },
          {
            x_axis: 100,
            y_axis: 50,
            z_axis: -80,
            header: "Weighing of the leaves",
            info: "Precisely measured to perfection, ensuring consistency in every cup",
          },
          {
            x_axis: -100,
            y_axis: -50,
            z_axis: -80,
            header: "Compressing of the tea dips",
            info: "Gently pressed to retain freshness, a harmonious blend of art and science",
          },
        ],
      },
      ...defaultSheetData,
    ],
  },
];

const CarouselComponent = ({ productData }) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

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
    // lazyLoad: true,
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
                  zoom={dataset?.zoom || 1}
                  targetRotation={dataset?.targetRotation}
                  fov={dataset?.fov}
                  header={dataset?.header}
                  setIsInteracting={setIsInteracting}
                  data={dataset?.data}
                  isBottomSheetOpen={isBottomSheetOpen}
                  setIsBottomSheetOpen={setIsBottomSheetOpen}
                />
              )}

              {dataset?.type === "360_video" && (
                <Scene
                zoom={dataset?.zoom || 1}
                  targetRotation={dataset?.targetRotation}
                  header={dataset?.header}
                  setIsInteracting={setIsInteracting}
                  data={dataset?.data}
                  isBottomSheetOpen={isBottomSheetOpen}
                  setIsBottomSheetOpen={setIsBottomSheetOpen}
                />
              )}

              {dataset?.type === "2d_image" && (
                <ImageScreen
                  header={dataset?.header}
                  setIsInteracting={setIsInteracting}
                  data={dataset?.data}
                />
              )}

              {dataset?.type === "2d_video" && (
                <VideoScreen
                  header={dataset?.header}
                  setIsInteracting={setIsInteracting}
                  data={dataset?.data}
                />
              )}
            </Stack>
          );
        })}
      </Slider>

      <DraggableDrawer
        data={defaultSheetData}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
      >
        <DrawerInfo data={defaultSheetData} />
      </DraggableDrawer>

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
