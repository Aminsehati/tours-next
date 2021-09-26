import styles from './style.module.css'
import {useState} from "react";
const Tours = (props)=>{
    const { image , title , price , description , id } = props.tourData ;
    const removeTour = props.removeTour;
    const [readMore , setreadMore] = useState(false);
    return (
        <div className={styles.tours}>
            <div className={styles.toursImage}>
                <img src={image}/>
            </div>
            <div className={styles.toursTitle}>
                <h2>
                    {title}
                </h2>
                <span>
                    $ {price}
                </span>
            </div>
            <p>
                {readMore ? description : `${description.substring(0,200)}...`}
                <button onClick={()=>setreadMore(!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                </button>
                <br/>
                <br/>
                <button onClick={()=>removeTour(id)}>
                    Remove
                </button>
            </p>
        </div>
    )
}
export default Tours
