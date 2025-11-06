import React from 'react'
import AcadamicCalender from '@/components/AcadamicCalender'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="Academic Calendar | AIMS Institutes"
                description="Stay on track with our academic calendar. Get important dates and key academic milestones for the current and upcoming academic years."
                path="/aims-academic-calendar"
                metaImage="/images/aims-logo.png"
            />
            <AcadamicCalender />
        </>
    )
}

export default page
