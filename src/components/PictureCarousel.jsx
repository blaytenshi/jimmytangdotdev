import Carousel from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';

import bondi from '../assets/img/bondi.jpg';
import coralbay from '../assets/img/coralbay.jpg';
import matterhorn from '../assets/img/matterhorn.jpg';
import narooma from '../assets/img/narooma.jpg';
import paris from '../assets/img/paris.jpg';
import rigi from '../assets/img/rigi.jpg';
import stars from '../assets/img/stars.jpg';
import thousandisland from '../assets/img/thousandisland.jpg';
import truffles from '../assets/img/truffles.jpg';
import venice from '../assets/img/venice.jpg';

const PictureCarousel = () => {
  return (
    <Carousel
      dots
      autoPlay={6000}
      animationSpeed={4000}
      slidesPerPage={1}
      infinite
      clickToChange
      centered
    >
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={paris} alt="standing in front of eiffel tower paris" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={thousandisland} alt="thousand island lake in hong kong" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={stars} alt="night time long exposure of the galaxy" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={coralbay} alt="knee deep in crystal clear waters at coral bay western australia" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={venice} alt="Santa Maria Bascilica Venice Italy" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={matterhorn} alt="matterhorn switzerland" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={rigi} alt="mount rigi switzerland with fog beneath" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={narooma} alt="drone shot from narooma new south wales" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={bondi} alt="interesting miniature house installation sculptures by the sea" />
      </div>
      <div className="px-2 mobile:w-full tablet:w-4/5">
        <img className="rounded-lg" src={truffles} alt="home made truffle pasta dish at pyrmont sydney" />
      </div>
    </Carousel>
  )
}

export default PictureCarousel;
