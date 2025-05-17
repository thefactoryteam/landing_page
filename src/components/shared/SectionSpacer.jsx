import React from 'react'

const SectionSpacer = ({ height = "h-20" }) => {
    return (
        <div className={`w-full transition-all duration-300 ease-in-out ${height}`}
        ></div>
    )
}

export default SectionSpacer