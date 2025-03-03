import React from 'react'
import Image from 'next/future/image'

const Page = () => {
  return (
    <div>
      <p>Drop srcSet prop (cannot be manually provided)</p>
      <Image
        src="/truck.jpg"
        width={300}
        height={100}
        srcSet="/truck375.jpg 375w, /truck640.jpg 640w, /truck.jpg"
        sizes="(max-width: 375px) 375px, 100%"
      />
      <p>Assign sizes prop</p>
    </div>
  )
}

export default Page
