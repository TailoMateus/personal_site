import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    image={hit.image}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    search={true}
  />
)

export default Hit