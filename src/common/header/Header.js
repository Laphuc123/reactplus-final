import React from 'react';
import Cellularalt from '../../image/Icon_header/MobileSignal.png';
import Wifi from '../../image/Icon_header/Wifi.png';
import Battery from '../../image/Icon_header/Battery.png';

function Header() {

    return (
        <div className='flex justify-between items-center w-[95%] px-[10px] mx-auto'>
            <div className='pt-2'>
                <p className='w-[28.43px] font-[500]'>9:30</p>
            </div>
            <div className='flex justify-center items-center gap-x-2'>
                <img src={Cellularalt} alt=""></img>
                <img src={Wifi} alt=""></img>
                <img src={Battery} alt=""></img>
            </div>
        </div>
    )
}

export default Header 