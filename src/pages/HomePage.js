import { useEffect, useState } from "react";
import Products from "../components/Products";
import Spinner from "../components/Spinner";
import { baseUrl } from "../baseUrl";

function HomePage() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData () {
        try{
            setLoading(true);

            const response = await fetch(baseUrl);
            const result = await response.json();
            console.log(result);

            setPosts(result);
            // console.log("Posts are : ", posts);

        }
        catch(err) {
            console.log('error while fetching the data from api');
            console.log('error is : ', err.message);
        }
        
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <div>
            {/* HomePage Component
            <Products/>
            <Spinner /> */}
            {
                loading
                ?
                (<Spinner />)
                :
                (posts.length > 0) 
                ?
                (<Products posts={posts} />)
                :
                (
                    <div>
                        No data found
                    </div>
                )
            }

        </div>
    )
}

export default HomePage;
