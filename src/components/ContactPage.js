import { Link } from 'react-router-dom';
import style from './ContactPage.module.css';

function ContactPage() {
    return (
        <>
            <div className={style.wrapper}>   
                <h2 style={{fontSize: "30px"}}>Contact Page</h2>
                <Link className={style.Link} to="/">Back to Home</Link>
            </div>
        </>
    )
}
export default ContactPage;
