// import React from 'react';
// import { Carousel, Button } from 'antd';
// import { useMediaQuery } from 'react-responsive';

// const Arts: React.FC = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

//   let slidesToShow = 4;

//   if (isMobile) {
//     slidesToShow = 1;
//   } else if (isTablet) {
//     slidesToShow = 2;
//   }

//   const prevButton = <Button onClick={() => carouselRef.prev()}>&lt;</Button>;
//   const nextButton = <Button onClick={() => carouselRef.next()}>&gt;</Button>;

//   const carouselRef = React.useRef(null);

//   return (
//     <div>
//       <Carousel
//         ref={carouselRef}
//         slidesToShow={slidesToShow}
//         draggable
//         dots={false}
//         infinite={false}
//       >
//         <div>
//           <img src="" alt="Image 1" />
//         </div>
//         <div>
//           <img src="" alt="Image 2" />
//         </div>
//         <div>
//           <img src="" alt="Image 3" />
//         </div>
//       </Carousel>

//       <div>
//         {prevButton}
//         {nextButton}
//       </div>
//     </div>
//   );
// };

// export default Arts;
