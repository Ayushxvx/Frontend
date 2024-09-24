import { useState } from "react";
export default function AddPost(){

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [author,setAuthor] = useState('');
    const [heading,setHeading] = useState('');

    async function SubmitForm(event){
        setHeading();
        event.preventDefault();
        const response = await fetch("https://post-without-auth-server.onrender.com/post",{
            mode:'cors',
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Specify content type
            },
            body: JSON.stringify({
                title:title,
                description:description,
                author:author
            })
        })
        if(response.ok){
            setHeading("Post added successfully");
            setTitle('')
            setDescription('')
            setAuthor('');
        }
        else{
            setHeading("Try Again Later!")
        }
    }

    return(
        <>
        {heading?
        <h1 className="p-2 bg-black text-green-400 font-mono text-center rounded-lg">
            {heading}
        </h1>
        :<></>}
        <form className="max-w-md mx-auto p-4 bg-white rounded shadow-md" method="POST">
  <h2 className=" text-lg font-bold mb-4">Create a New Post</h2>
  <div className="mb-4">
    <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>
    <input type="text" id="title" className="w-full p-2 text-sm text-gray-900 border-2 border-gray-800 border-solid font-mono " onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>
  <div className="mb-4">
    <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
    <textarea id="description" className="w-full p-2 text-sm text-gray-900 h-32 border-2 border-gray-800 border-solid font-mono" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
  </div>
  <div className="mb-4">
    <label htmlFor="author" className="block text-sm font-bold mb-2">Author Name</label>
    <input type="text" id="author" className="w-full p-2 text-sm text-gray-900 border-2 border-gray-800 border-solid font-mono" onChange={(e)=>{setAuthor(e.target.value)}}/>
  </div>
  <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={SubmitForm}>Create Post</button>
</form>
        </>
    )
}