import React from 'react';
import qZone1 from '../../../assets/images/qZone1.png'
import qZone2 from '../../../assets/images/qZone2.png'
import qZone3 from '../../../assets/images/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary my-4 py-2 text-center rounded'>
            <div>
            <h5>Q-Zone</h5>
            </div>
            <div>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;