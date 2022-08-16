import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container } from "@mui/system";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from "./BannerStyle";
import sliderImg1 from '../../images/slider.jpg';
import sliderImg2 from '../../images/slider.jpg';
import sliderImg3 from '../../images/slider.jpg';
import { List } from "@mui/material";
const Banner = () => {

    const classes = useStyles();

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <Box
                sx={{
                    bottom:'18px'
                }}
            >
                <List className={classes.dots}> {dots} </List>
            </Box>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <Box
                className={classes.rightArrow}
                onClick={onClick}
                style={{ marginRight: '24px' }}
            ><ArrowForwardIosIcon /> </Box>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <Box
                className={classes.rightArrow}
                onClick={onClick}
                style={{ left: '0', zIndex: 1, marginLeft: '24px' }}

            ><ArrowBackIosNewIcon /></Box>
        );
    }
    return (
        <Box marginBottom="10px"   >
            <Container maxWidth="xl">
                <Slider {...settings}>
                    {
                        bannerItem.map((sliderImg) => {
                            return (
                                <Box className={classes.slider}>
                                    <img src={sliderImg.img} alt={sliderImg.img} width='100%'/>
                                </Box>
                            )
                        })
                    }

                </Slider>
            </Container>
        </Box>
    )
}
const bannerItem = [
    {
        img: sliderImg1,
    },
    {
        img: sliderImg2,
    },
    {
        img: sliderImg3,
    },
    {
        img: sliderImg1,
    },
    {
        img: sliderImg2,
    },
]
export default Banner;