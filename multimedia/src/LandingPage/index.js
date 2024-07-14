
import './index.css';
// import Footer from '../Footer';
// import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
function LandingPage(){
    return(
        <div>
            
            <div className='body'>


                <div className='landingPage'>
            
                    <div>
                        <div className='background-image'>
                    </div>
                    <div className='landing-page-texts'>
                
                       <p>Welcome To Our Multimedia Project</p>
                       <button className='play-button'>Learn More</button>

                    </div>
                    </div>

                </div>


                <div>
                    <section>
                        <h1>Video</h1>
                        <div className='video-section'>
                            <img src='Images/xlogo.png' alt='X-Logo' className='xLogo'/>
                            
                            <p>
                            On this episode of 'How Things Work' , we focus on X.
 
                            Previously known as Twitter, we'll discuss from how 
 
                            it was developed, the architecture, impact and so much
 
                            more
                        </p>

                        </div>
                        <div className='play-video'>
                            <button className='play-button'>
                                <span className='play-icon'>
                                    <img src='./Images/playbutton.png' alt='play-button'/>
                               </span>
                               <span className='play-text'>
                                   Play
                               </span>
                            </button>
                        </div>

                    </section>


                </div>


                <div className='writing'>
                    <section>
                    <h1>Writing</h1>
                        <div className='writing-section'>                            
                            <p>
                            This section is about the book

                            'Born A Crime' by Trevor Noah

                            and a glimpse of what our case

                            studies are all about <Link to='/View Blog'> View Blog</Link>
                           </p>
                            

                           <img src='Images/writing.png' alt='X-Logo' className='writing-image'/>

                        </div>
                        
                    </section>
                </div>
            </div>
    
            
         </div>
    )
}

export default LandingPage;
