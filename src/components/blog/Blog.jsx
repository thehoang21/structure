import React from 'react'
import img from '../images/about.jpg'
import RecentCard from '../home/recent/RecentCard'
import Back from '../common/Back'

const Blog = () => {
  return (
    <>
    <section className="blog-out mb">
        <Back name="Blog" title="Blog Grid - Our Blogs" cover={img}/>
        <div className="container recent">
            <RecentCard/>
        </div>
    </section>
    </>
  )
}

export default Blog