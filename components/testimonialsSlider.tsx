"use client"
import React, {memo} from "react";
import Star from "@/components/icons/start";
import Image from "next/image";
import {testimonials} from "@/public/assets";
import Slider from "react-slick";

export default function TestimonialsSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="testimonial-slider">
            {
                testimonials.map((testimonial, id) =>
                    <TestimonialCard key={id} {...testimonial}/>
                )
            }
        </Slider>
    )
}

interface TestimonialCardProps {
    name: string,
    country: string,
    countryCode: string,
    starts: number,
    description: string,
    profilePic: string,
}

const TestimonialCard = memo((props: TestimonialCardProps) => {
    const {
        name,
        country,
        countryCode,
        starts,
        description,
        profilePic
    } = props;

    return (
        <div
            className="gradient-border rounded-2xl bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black p-4 min-h-80">
            <div className="flex justify-between w-full items-center border-b border-zinc-500 pb-2">
                <div className="flex justify-between items-center gap-2">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                        <Image
                            src={profilePic}
                            alt="profile-pic"
                            width={48} height={48}
                            className="object-cover h-full w-full"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <p>{name}</p>
                        <div className="flex items-center gap-2">
                            <Image
                                src={`https://flagsapi.com/${countryCode}/shiny/24.png`} alt={`${country}-flag`}
                                width={24} height={24}
                                loading="lazy"
                            />
                            <p className="text-secondary-text font-light text-sm">{country}</p>
                        </div>
                    </div>
                </div>
                <RatingStarts count={starts}/>
            </div>
            <div className="mt-4">
                <p className="font-light tracking-wide text-sm">{description}</p>
            </div>
        </div>
    )
});

TestimonialCard.displayName = "TestimonialCard";

const RatingStarts = memo((props: { count: number }) => {
    const {count} = props;

    return (
        <div className="flex gap-1">
            {Array.from({length: count % 5 || 5}, (_, i) => <Star key={i} size={18}/>)}
        </div>
    )
});

RatingStarts.displayName = "RatingStarts";