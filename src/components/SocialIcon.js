import facebookF from '../asserts/icon/facebook-f.svg';
import githup from '../asserts/icon/github.svg';
import linkedinIn from '../asserts/icon/linkedin-in.svg';
export const SocialIcon = () => {
    return (
        <div className='social-icon'>
        <a href='https://www.facebook.com/DemoCoding'><img src={facebookF} alt='facebook' /></a>
        <a href='https://github.com/dimaKassem'><img src={githup} alt='githup' /></a>
        <a href='https://www.linkedin.com/in/dima-kassem-4b1b8b146'><img src={linkedinIn} alt='linkedIn' /></a>
    </div>
    )
    
}