import React, { useState } from "react";

interface RatingProps {
  maxRating?: number;
  color?: string;
  onSetRating?: (arg: number) => void;
  size?: number;
  gap?: number;
  classname?: string;
  defaultRating?: number;
  showNumRating?: boolean;
  fontSize?: number | string;
  fontWeight?: number | string;
}

function Rating({
  gap = 2,
  maxRating = 5,
  color = "gold",
  defaultRating = 1,
  size = 24,
  onSetRating,
  showNumRating = false,
  fontSize = 14,
  fontWeight = 500,
}: RatingProps) {
  const ratingStyle = {
    display: "flex",
    gap: `${gap}`,
    alignItems: "center",
    listStyle: "none",
    color: `${color}`,
    cursor: "pointer",
  };

  const numStyled = {
    marginLeft: "10px",
    fontSize: `${fontSize}px`,
    fontWeight: `${fontWeight}`,
  };

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  return (
    <ul style={ratingStyle}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          color={color}
          size={size}
          isFull={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          onClick={() => {
            setRating(i + 1);
            if (onSetRating) onSetRating(i + 1);
          }}
          mouseEnter={() => setTempRating(i + 1)}
          mouseLeave={() => setTempRating(0)}
        />
      ))}
      {showNumRating && Boolean(tempRating) && (
        <li style={numStyled}>{tempRating || rating}</li>
      )}
    </ul>
  );
}

export default Rating;

interface StarProps {
  isFull: boolean;
  color?: string;
  size?: number;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
  mouseEnter: React.MouseEventHandler<HTMLSpanElement>;
  mouseLeave: React.MouseEventHandler<HTMLSpanElement>;
}

function Star({
  isFull,
  color,
  onClick,
  size,
  mouseEnter,
  mouseLeave,
}: StarProps) {
  return (
    <span onClick={onClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {isFull ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color}
          height={size}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
          height={size}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      )}
    </span>
  );
}
