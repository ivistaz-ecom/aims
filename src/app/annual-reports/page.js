import React from 'react'
import AnnualReports from '@/components/AnnualReports'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="Annual Reports | AIMS Institutes"
                description="View the latest annual reports from AIMS Institutes. Get insights into our academic performance, governance, student activities, and institutional development."
                path="/annual-reports"
                metaImage="/images/aims-logo.png"
            />
            <AnnualReports />
        </>
    )
}

export default page
