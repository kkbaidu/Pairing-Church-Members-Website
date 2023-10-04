import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';
import { LandingNavBar } from '../Components/Navbar';
import { Button } from 'primereact/button';
import congregation from '../Assets/congregation.jpg';
import congregation1 from '../Assets/congregation1.jpg';
import congregation3 from '../Assets/congregation3.jpg';
import group2 from '../Assets/group2.jpg';
import panelHour from '../Assets/panelHour.jpg';

export default function LandingPage() {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    const imagesArr = [congregation, group2, congregation1, panelHour, congregation3];

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
    ];

    useEffect(() => {
        setImages(imagesArr);
    }, []);

    const imageTemplate = (image) => {
        return (
                <div className='bg-[#000]'>
                    <img className='w-screen h-[200px] md:h-[400px] opacity-75 rounded-[5px]' src={ image } />
                </div>
        );
    };

    return (
        <div className="">
            <div>
                <LandingNavBar />
            </div>
            <div className='flex relative items-center mx-auto pt-[60px] w-full md:w-[100%]'>
                <Carousel value={images} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={imageTemplate} />
                <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <p class="text-white text-[20px] md:text-[50px] font-bold font-serif"> Welcome Fellow Farmer </p>
                </div>
            </div>
            <div className='flex flex-col py-[45px] gap-5 justify-center items-center'>
                <p className='text-[30px] text-center'> Please Sign Up Here </p>
                <Button label='Sign Up' className='animate-bounce' icon="pi pi-user-plus" onClick={() => navigate('/signup')} />
            </div>
        </div>
    )
}

