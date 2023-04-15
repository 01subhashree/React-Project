import { Link } from 'react-router-dom';
import style from './Homepage.module.css'

function HomePage() {
    return (
        < div className={style.container}>
            <div className={style.navbar}>
                <h1 className={style.header}>Home Page</h1>
                <Link className={style.Link} to="/contact">Contact</Link>
            </div>
            <div className={style.wrapper}>
                <h2>Innovation distinguishes between a leader and a follower.</h2>
            </div>
            
       </div> 
    )
}
export default HomePage;