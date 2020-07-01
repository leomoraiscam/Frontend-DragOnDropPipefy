import React from "react";
import { useDrag } from "react-dnd";
import { Container, Label } from "./styled";

export default function Card({ data }) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <Container ref={dragRef}>
        <header>
          {data.labels.map((label) => (
            <Label key={data.id} color={label} />
          ))}
        </header>
        <p>{data.content}</p>
        {data.user && <img src={data.user} alt="" />}
      </Container>
    </>
  );
}
