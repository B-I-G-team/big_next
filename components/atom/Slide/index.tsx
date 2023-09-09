import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

interface SlideItem {
  image: string | StaticImageData;
}

export interface Props {
  items: SlideItem[];
}

const Slide = ({ items }: Props) => {
  const [itemIndex, setItemIndex] = useState(0);
  const [startPoint, setStartPoint] = useState<number | null>(null);

  const nextItemFunc = () => {
    if (itemIndex >= items.length - 1) {
      setItemIndex(0);
    } else {
      setItemIndex((prev) => prev + 1);
    }
  };

  const prevItemFunc = () => {
    if (itemIndex <= 0) {
      setItemIndex(items.length - 1);
    } else {
      setItemIndex((prev) => prev - 1);
    }
  };

  const onDragEnd = (endPoint: number) => {
    if (startPoint) {
      if (startPoint < endPoint) {
        prevItemFunc();
      } else if (startPoint > endPoint) {
        nextItemFunc();
      }
    }
    setStartPoint(null);
  };

  return (
    <Container
      onMouseDown={(e: any) => {
        setStartPoint(e.pageX);
      }}
      onTouchStart={(e: any) => {
        setStartPoint(e.touches[0].pageX);
      }}
      onMouseUp={(e: any) => {
        const endPoint = e.pageX;
        onDragEnd(endPoint);
      }}
      onTouchEnd={(e: any) => {
        const endPoint = e.changedTouches[0].pageX;
        onDragEnd(endPoint);
      }}
    >
      <ItemList itemindex={itemIndex}>
        {items.map(({ image }, idx) => (
          <StyledImage
            draggable={false}
            key={image.toString() + idx}
            src={image}
            alt="slide-item"
          />
        ))}
      </ItemList>
      <CircleList>
        {items.map(({ image }, idx) => (
          <Circle
            key={image.toString() + idx}
            onClick={() => {
              setItemIndex(idx);
            }}
            $active={itemIndex === idx}
          >{` `}</Circle>
        ))}
      </CircleList>
    </Container>
  );
};

export default Slide;

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;

  position: relative;
`;

const ItemList = styled.div<{
  itemindex: number;
}>`
  width: 100%;
  display: flex;
  aspect-ratio: 1 / 1;

  transform: translateX(-${({ itemindex }) => itemindex * 100}%);
  transition: 200ms;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Circle = styled.button<{ $active: boolean }>`
  border-radius: 50%;
  background-color: ${({ theme, $active }) =>
    $active ? theme.color.gray_hover : '#fff'};
  opacity: 0.8;
  width: 8px;
  height: 8px;
  border: 0.8px solid ${({ theme }) => theme.color.text_300};

  cursor: pointer;
  /* border: none; */
  transition: 200ms;
  transform: ${({ $active }) => ($active ? 'scale(1.3)' : 'scale(1)')};

  &:hover {
    transform: scale(1.1);
  }
`;

const CircleList = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
`;
