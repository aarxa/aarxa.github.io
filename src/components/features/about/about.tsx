import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hi, I'm Aarya." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
        I&apos;m a 22-year-old self-taught software developer. I found my
        passion for programming after discovering how to use a computer when I was 18. What
        kept me on this journey is that I have always loved mathematics and problem-solving. In addition to coding, I
        enjoy building side projects, photography, and art. Check out some of my work!
        When I&apos;m not doing anything coding-related, I enjoy spending time
        volunteering at animal shelters or teaching yoga. 
        {/* 🔗 Update the href attribute with your Instagram link */}
        Follow my
        <a className="about-link" href="" target="_blank" rel="noreferrer">
          Instagram
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        to see my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
