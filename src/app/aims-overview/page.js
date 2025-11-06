import React from "react"
import AboutAims from "../../components/AboutAims"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | Top Business School in Bangalore"
        description="AIMS Institutes is among the best business schools in India and a top MBA college in Bangalore, known for academic excellence, innovation, and industry-ready programs."
        path="/aims-overview"
        metaImage="/about-aims/About-banner.webp"
      // schemaType="EducationalOrganization"
      />
      <AboutAims />
    </>
  )
}

export default page
