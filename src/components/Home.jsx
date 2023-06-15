import React from 'react'
import vg from '../assets/2.webp'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillInstagram,
    AiFillYoutube,
    AiFillFacebook} from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>We build it here</h1>
            <p>Soulution for all your web problems</p>
        </main>

    </div>

    <div className="home2">
        <img src={vg} alt='Graphics'/>
        <div>
            <p>
            Welcome to our website development service! We are a team of dedicated professionals passionate about creating stunning and functional websites for our valued customers. Whether you're a small business, an entrepreneur, or an established brand, we have the expertise and creativity to bring your online presence to life.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Welcome to our About section! At We build it here, we are a passionate team of website development experts dedicated to helping businesses and individuals establish a strong online presence. With WBIH of experience in the industry, we understand the power of a well-designed and functional website in today's digital landscape. Our mission is to create visually stunning websites that not only captivate your audience but also deliver a seamless user experience. We take pride in our attention to detail and commitment to staying up-to-date with the latest trends and technologies in web development. Whether you need a simple informational website, a robust e-commerce platform, or a custom web application, we have the skills and expertise to bring your vision to life. Our collaborative approach ensures that we work closely with you to understand your unique goals and tailor our solutions accordingly. Customer satisfaction is our top priority, and we go above and beyond to exceed your expectations. Partner with us and let's embark on a journey of online success together.</p>
            
        </div>
    </div>  
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:'0.3s'}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:'0.5s'}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:'0.7s'}}>
                    <AiFillFacebook/>
                    <p>Facebook</p>
                </div>
                <div style={{animationDelay:'0.9s'}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                <div style={{animationDelay:'1.1s'}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
            </article>
        </div>

    </div>
    </>
  )
}

export default Home