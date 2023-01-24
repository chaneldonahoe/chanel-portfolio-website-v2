import React from 'react'
import { FiLinkedin } from 'react-icons/fi';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';


// LinkedIn
//Github 
//Email 

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="mailto:cdonahoe05@gmail.com" className="p-text"><AiOutlineMail /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/chanel-donahoe/" className="p-text"><FiLinkedin /></a>
      </div>
      <div>
        <a href="https://www.github.com/chanelmoreno/" className="p-text"><AiFillGithub /></a>

      </div>
    </div>
  )
}

export default SocialMedia

