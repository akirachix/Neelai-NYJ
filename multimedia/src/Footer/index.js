import './index.css';
function Footer(){
    return(
        <div>
            <div id = "main">
            <img src="/Imagefol/DeWatermark.png" alt="" className='mainImage'/>
            <div className="text-on-image">
          <h3 className='pod'>New PodCast</h3>
          <p className='podtext'>Coming soon in August</p>
        </div>
            <h1 className='resumes'>Resumes</h1>
            <p className='portfolio'>Click on portfolio to view collective digital resume portfolio for all group members.</p>
            <button>portfolios</button>
            </div>
            <div className='footer'>
                <div className='multi'>
                    <h2 className='multimedia'>Multimedia</h2>
                    <div className='footertext'>
                   <p>Home</p>
                   <p>Blog</p>
                   <p>portfolio</p>
                   </div>
                </div>

                <div className='contact'>
                    <h2 className='heading'>Contact</h2>
                    <p>616,Korongo Road</p>
                    <p>+254 789 007 224</p>
                </div>

                
            </div>
        </div>
    )
}
export default Footer; 