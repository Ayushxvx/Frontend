import { useState,useEffect } from "react";
//import { ReactTyped } from 'react-typed';
import { ReactTyped } from "react-typed";

export default function MainEle(){

    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    
    function fetchData(){
        async function getData(){
            setLoading(true);
            const response = await fetch("https://post-without-auth-server.onrender.com/",{
                mode:'cors',
                method:'GET'
            })
            const data = await response.json();
            if(!data){
                setError("Error in retriving data...")        
            }else{
                setLoading(false)
                setPosts(data.data);
            }
        }
        getData();
    }

    useEffect(fetchData,[])

    return(
        <div>
            {loading?
            <h1 className="p-2 m-2 text-center font-mono rounded-lg bg-black text-green-400">
                Loading...
            </h1>:<></>}
            
            {error?
            <h1 className="p-2 m-2 text-center font-mono rounded-lg bg-black text-green-400">
            {error?error:""}
        </h1>:<></>}

                <div className="bg-black text-center p-4">
                    <span className="text-white">
                        This is made using : 
                    </span>
                <ReactTyped
                     strings={[
                        "Mongo DB",
                        "Express JS",
                        "React JS",
                        "Node JS",
                        ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                    className="w-10/12 mx-auto text-white p-2 m-2 bg-gray-800"
                />
                </div>

            <div className="bg-blue-950 text-white font-mono p-2">
                {posts.map((ele,ind)=>(
                    <div key={ind} className="border-2 border-solid border-gray-600 rounded-lg p-2 m-2 bg-black text-green-400">
                        <h2 className="text-center p-2 m-2">
                            {ele.title}
                        </h2>
                        <h2 className="text-center p-2 m-2">
                            {ele.description}
                        </h2>
                        <h2 className="text-center p-2 m-2">
                            Author - {ele.author}
                        </h2>
                        <h2 className="text-center p-2 m-2">
                            Created at : {ele.created_at}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}