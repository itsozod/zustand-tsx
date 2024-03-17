// import { EmblaOptionsType } from "embla-carousel";
// import { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// type PropType = {
//   slides: number[];
//   options?: EmblaOptionsType;
// };
// export const Carousel = ({ slides, options }: PropType) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
//   const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
//     containScroll: "keepSnaps",
//     dragFree: true,
//   });

//   const onThumbClick = useCallback(
//     (index: number) => {
//       if (!emblaMainApi || !emblaThumbsApi) return;
//       emblaMainApi.scrollTo(index);
//     },
//     [emblaMainApi, emblaThumbsApi]
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaMainApi || !emblaThumbsApi) return;
//     setSelectedIndex(emblaMainApi.selectedScrollSnap());
//     emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
//   }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

//   useEffect(() => {
//     if (!emblaMainApi) return;
//     onSelect();
//     emblaMainApi.on("select", onSelect);
//     emblaMainApi.on("reInit", onSelect);
//   }, [emblaMainApi, onSelect]);
//   return (
//     <>
//       <div className="embla__viewport" ref={emblaMainRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">{index + 1}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla-thumbs">
//         <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
//           <div className="embla-thumbs__container">
//             {slides.map((index) => (
//               <Thumb
//                 key={index}
//                 onClick={() => onThumbClick(index)}
//                 selected={index === selectedIndex}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// type PropTypes = {
//   selected: boolean;
//   index: number;
//   onClick: () => void;
// };

// export const Thumb = ({ selected, index, onClick }: PropTypes) => {
//   return (
//     <div
//       className={"embla-thumbs__slide".concat(
//         selected ? " embla-thumbs__slide--selected" : ""
//       )}
//     >
//       <button
//         onClick={onClick}
//         type="button"
//         className="embla-thumbs__slide__number"
//       >
//         {index + 1}
//       </button>
//     </div>
//   );
// };
