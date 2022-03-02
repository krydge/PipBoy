
import loadingImg from '../loadingIcon.jpg'
import thumbsup from '../pipBoyThumbsUp.jpg'

function LoadingPage(props){
    return(
       <>
       <div className='LoadingScreen'>
          <div>
            <h1>Welcome</h1>
          </div>
          <div className='loadingScreenContent'>
            <div className='loadingScreenCompanyInfo'>
              <h2>RYDGE - TEC</h2>
              <h3>INDUSTRIES</h3>
              <img src={loadingImg}></img>
            </div>
            <div>
              <img src={thumbsup}></img>
            </div>
          </div>
          <div>
            <h1>Welcome</h1>
          </div>
        </div>
       </>
    )
}

export default LoadingPage;