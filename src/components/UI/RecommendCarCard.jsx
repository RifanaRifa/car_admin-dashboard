import React from 'react'

const RecommendCarCard = (props) => {
    const { carName, retWeet, imgUrl, rentPrice, percentage } = props.item
    return (
        <div className="recommend_car-card">
            <div className="recommend_car-top">
                <h5><span><i class="ri-restart-line"></i></span> {percentage}% Recommended</h5>
            </div>

            <div className="recommend_car-img">
                <img src={imgUrl} alt="" />
            </div>

            <div className="recommend_car-bottom">
                <h4>{carName}</h4>


                <div className='recommend_car-other'>
                    <div className='recommend_icons'>
                        <p><i class="ri-repeat-line"></i>{retWeet}k</p>
                        <p><i class="ri-settings-2-line"></i></p>
                        <p><i class="ri-timer-flash-line"></i></p>
                    </div>
                    <span>${rentPrice}/h</span>


                </div>

            </div>
        </div>
    )
};

export default RecommendCarCard;