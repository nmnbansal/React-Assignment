import React, { useEffect, useState } from 'react'

const FetchProducts = () => {

    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(1);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
               const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
               const data = await response.json();
               setPosts(data); 
            } 
            catch (error) {
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
    },[page]);

  return (
    <>
    {loading ? (
        <p>Loading...</p>
    ) : (
        <>
        <div>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
        <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}>Previous</button>
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
        </>
    )}
    </>
  )
}

export default FetchProducts