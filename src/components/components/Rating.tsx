interface RatingProps {
  value: number; // 0-5, supports halves
  outlineEmpty?: boolean; // original markup sometimes uses star-outline for empty stars
}

export default function Rating({ value, }: RatingProps) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  // const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="showcase-rating">
      {/* {Array.from({ length: full }).map((_, i) => (
        <ion-icon key={`f-${i}`} name="star"></ion-icon>
      ))}
      {half && <ion-icon name="star-half-outline"></ion-icon>}
      {Array.from({ length: empty }).map((_, i) => (
        <ion-icon key={`e-${i}`} name={outlineEmpty ? "star-outline" : "star"}></ion-icon>
      ))} */}
    </div>
  );
}
