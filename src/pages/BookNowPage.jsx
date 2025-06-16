import React from 'react'
import WhyCoworkingSpace from '../components/coWorkingSpace/WhyCoworkingSpace';
import InfoSection from '../components/booknow/InfoSection';


const BookNowComponent = ({ whyText, features, benefits }) => {
    return (
        <>

            <div>
                <WhyCoworkingSpace
                    text={whyText}
                    align='text-center'
                />
                <InfoSection 
                    features={features}
                    benefits={benefits}
                />
              
            </div>
        </>

    )
}

export default BookNowComponent