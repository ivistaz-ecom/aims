import React from 'react'
import AnnualReports from '@/components/AnnualReports'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Annual Academic Reports"
                description="View AIMS Institutes’ annual academic and governance reports detailing institutional progress, performance, and key initiatives across each academic year."
                path="/annual-reports"
                metaImage="/images/aims-logo.png"
            />
            <AnnualReports />
        </>
    )
}

export default page
