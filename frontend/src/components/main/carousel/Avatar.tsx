import React from 'react'

interface AvatarProps {
  image: {
    img: string;
    name: string;
  };
}

const Avatar = ({ image }: AvatarProps) => {
  return (
    <section className='avatar-detail'>
      <div className='avatar-box'>
        <img className="avatar-profile-image rounded-full border-3 border-white" src={image.img} alt="" />
      </div>
      <p className='avatar-name text-xs text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis'>{image.name}</p>
    </section>
  )
}

export default Avatar;
