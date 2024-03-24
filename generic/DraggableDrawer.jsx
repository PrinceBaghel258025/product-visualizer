"use client";

import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "react-use-gesture/dist";
import {
  findNearestNumberInArray,
  rubberBandIfOutOfBounds,
  projection,
} from "../../helper/utils";
import useWindowSize from "../../helper/useWindowSize";

const threshold = 10;
const spring = { tension: 247, friction: 27 };
const dampedSpring = { tension: 247, friction: 33 };

const [COLLAPSED, HALF_EXPANDED, FULL_EXPANDED] = [0, 1, 2];

export default function DraggableDrawer({ children }) {
  const { height } = useWindowSize();
  const level = React.useMemo(
    () => [60, -(height / 2 - 60), -(height - 120), -(height - 120)],
    [height]
  );

  const [current, setCurrent] = React.useState(COLLAPSED);

  // Initial value settings
  const [{ y }, set] = useSpring(() => ({
    y: 0,
    config: { tension: 250, friction: 30 },
  }));

  const setDrawerOpen = () => {
    set({ y: level[HALF_EXPANDED], config: dampedSpring, immediate: false });
    setCurrent(HALF_EXPANDED);
  };

  const handleDrawerClose = () => {
    set({ y: level[COLLAPSED], config: dampedSpring, immediate: false });
    setCurrent(COLLAPSED);
  };

  const bind = useDrag(
    ({ vxvy: [, velocityY], movement: [mx, my], first, last, memo, event }) => {
      event.preventDefault();
      const drawerIsOpen = y.value <= level[HALF_EXPANDED];
      const isClick = last && Math.abs(mx) + Math.abs(my) <= 3 && !drawerIsOpen;
      if (isClick) {
        return setDrawerOpen();
      }

      if (!memo) {
        const isIntentionalGesture =
          Math.abs(my) > threshold && Math.abs(my) > Math.abs(mx);
        if (!isIntentionalGesture) return;

        memo = y.get() - my;
      }

      if (first) {
        setCurrent(FULL_EXPANDED);
      }

      // When releasing the drag
      if (last) {
        const projectedEndpoint = y.get() + projection(velocityY);
        const point = findNearestNumberInArray(projectedEndpoint, level);
        set({
          y: point === level[COLLAPSED] ? 0 : point,
          immediate: false,
          config: spring,
        });

        if (point === level[COLLAPSED]) {
          setCurrent(COLLAPSED);
        } else if (point === level[HALF_EXPANDED]) {
          setCurrent(HALF_EXPANDED);
        } else {
          setCurrent(FULL_EXPANDED);
        }
        return;
      }

      const newY = rubberBandIfOutOfBounds(
        level[current + 1],
        0,
        my + memo,
        0.08
      );
      set({ y: newY, immediate: true });

      return memo;
    },
    { rubberband: true, eventOptions: { passive: false } }
  );

  return (
    <div>
      <Backdrop
        as={animated.div}
        onClick={handleDrawerClose}
        style={{ opacity: y.to([0, level[2]], [0, 1]) }}
      />
      <BottomSheet
        as={animated.div}
        style={{ transform: y.to((y) => `translate3D(0, ${y}px, 0)`) }}
      >
        <Header {...bind()}>
          <Handle />
        </Header>
        <Body as={animated.div} style={{ height: y.to((y) => Math.abs(y)) }}>
          {children}
        </Body>
      </BottomSheet>
    </div>
  );
}

const BottomSheet = styled.div`
  touch-action: none;
  will-change: transform;
  position: fixed;
  top: calc(100vh - 60px);
  left: 0;
  width: 100%;
  min-height: 100vh;
  border-radius: 18px 18px 0 0;

  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 15px rgba(100, 100, 100, 0.25);
  color: #000;
  z-index: 1000000000;

  display: flex;
  flex-direction: column;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.75);
  pointer-events: none;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  z-index: 10000;
  border-radius: 18px 18px 0 0;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Body = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

export const Handle = styled.div`
  width: 4rem;
  height: 0.4rem;
  background-color: hsla(0, 0%, 0%, 0.1);
  border-radius: 9px;
  top: 12px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
