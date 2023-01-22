import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter /> //Linkedin
      </div>
      <div>
        <FaFacebookF /> //Github
      </div>
      <div>
        <BsTwitter /> //email
      </div>
    </div>
  )
}

export default SocialMedia