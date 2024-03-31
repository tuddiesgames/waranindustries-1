import React, { useState, useEffect } from 'react';
import { IonButton} from '@ionic/react';
import './Header.css';

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const Name = "TWD'S";
    const menuItems = ['Home', 'Gallery', 'Softwares', 'Products', 'About'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop < 10) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }); // Adding lastScrollTop to dependency array ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}

    const handleButton = (item:any)=>{
        console.log("iside");
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        console.log(item);
        

    }

    return (
        <div className={`flex justify-between fixed w-full top-0 transition-all duration-300 `}>
            <div className="mt-5">
                <h2 className='sizw-2'>{Name}</h2>
                <h1 className='text-5xl' style={{ color: '#ECAF0F' }}>waran industries</h1>
            </div>
            {
                isHeaderVisible ? (
                    <div className='mr-10 mt-10'>
                        {menuItems.map((item, index) => (
                            <IonButton key={index} className=" m-5 primary-hover" color={'none'} 
                            onClick={()=>{handleButton(item)}}>
                                {item}</IonButton>
                        ))}
                    </div>
                ) : (
                    <div className='mr-20 mt-20'>
                        <IonButton onClick={()=>setIsHeaderVisible(true)} hidden={isHeaderVisible}>☰</IonButton> 
                    </div>

                )
            }
        </div>
    );
};

export default Header;