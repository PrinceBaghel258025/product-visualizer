"use client";

import { Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export const HorizontalScrollWrapper = ({ children }) => {
  const wrapperContainerRef = useRef(null);
  const [state, setState] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const onMouseDown = (e) => {
    setState({
      isDragging: true,
      startX: e.pageX - wrapperContainerRef.current.offsetLeft,
      scrollLeft: wrapperContainerRef.current.scrollLeft,
    });
  };

  const onMouseLeave = () => {
    setState({ ...state, isDragging: false });
  };

  const onMouseUp = () => {
    setState({ ...state, isDragging: false });
  };

  const onMouseMove = (e) => {
    if (!state.isDragging) return;
    e.preventDefault();
    const x = e.pageX - wrapperContainerRef.current.offsetLeft;
    const walk = (x - state.startX) * 3;
    wrapperContainerRef.current.scrollLeft = state.scrollLeft - walk;
  };
  return (
    <Flex
      ref={wrapperContainerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      overflow={"auto"}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      gap={2}
      cursor={"grabbing"}
      w={"100%"}
      h={"fit-content"}
    >
      {children}
    </Flex>
  );
};
