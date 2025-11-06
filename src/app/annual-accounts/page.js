import React from 'react'
import AnnualAccounts from '@/components/AnnualAccounts'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Annual Audited Accounts"
                description="Review AIMS Institutes’ audited annual accounts and financial reports, published to ensure transparency, accountability, and compliance in institutional governance."
                path="/annual-accounts"
                metaImage="/images/aims-logo.png"
            />
            <AnnualAccounts />
        </>
    )
}

export default page