"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider(props: { images: string[] }) {

    const {images} = props;

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
    };

    return (
        <div className="slider-container bg-black bg-opacity-50">
            {images.length > 1 &&
                <Slider {...settings}>
                    {
                        images.map((image, id) => (
                            <img key={id} src={image} alt="" className="aspect-auto w-full object-contain"/>
                        ))
                    }
                </Slider>
            }
            {images.length === 1 &&
                <img src={images[0]} alt="" className="aspect-auto w-full object-contain"/>
            }
        </div>

    );
}