import {useEffect, useState} from "react";
import Loading from "../compoents/Loading";
import Tours from '../compoents/Tours';
import Title from '../compoents/Title'
import styles from '../styles/Home.module.css'
const url = 'https://course-api.com/react-tours-project'

const Home = ()=>{
    const [loading , setLoading ] = useState(true);
    const [tours , setTours] = useState([]);
    const DeleteTour = (id)=>{
        const newTour =  tours.filter(tour => tour.id !== id)
        setTours(newTour);
    }
    const getchTours = async ()=>{
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            const tours = data.map(item=>{
                return {
                    id: item?.id,
                    title:item?.name,
                    image:item?.image,
                    description:item?.info,
                    price:item?.price
                }
            });
            setLoading(false);
            setTours(tours);
        }catch (e) {
            console.log(e);
        }
    }
    useEffect(()=>{
        getchTours();
    },[])
    if(loading){
        return  (
            <main>
                <Loading/>
            </main>
        )
    }
    if(tours.length === 0 ){
        return  (
            <div className="title-main">
                <h2>
                    No tours left
                </h2>
                <button onClick={getchTours}>
                    Refresh
                </button>
            </div>
        )
    }
        return (
            <main className={styles.Home}>
                <div className="container">
                    <Title/>
                    {
                        tours.map(item=>{
                            return <Tours tourData={item}
                                          key={item.id}
                                          removeTour={DeleteTour}
                            />
                        })
                    }
                </div>
            </main>
        )
}
export default Home
