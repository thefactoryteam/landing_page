import React from 'react'

const Map = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            {/* Map Image */}
            <div className="w-full h-[640px] rounded-xl border border-dashed border-[#231F20] overflow-hidden shadow-md mt-10">
                <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.3423055394605!2d8.314911332013773!3d5.048136848576874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d7d61ec07cf65%3A0x72b6a10a0f8649a5!2sThe%20Factory%20Place!5e0!3m2!1sen!2sng!4v1747781718769!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.3423055394605!2d8.314911332013773!3d5.048136848576874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d7d61ec07cf65%3A0x72b6a10a0f8649a5!2sThe%20Factory%20Place!5e0!3m2!1sen!2sng!4v1747781718769!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </section>
    )
}

export default Map