import {Link} from 'react-router-dom';
export default function NavBar(){
    return(
        <>
        <nav className="text-gray-400 bg-[#212529] p-3 rounded-md flex justify-evenly">
        <div>
            <Link to="/" className="hover:text-white transition-all">
            Home
            </Link>
        </div>
        <div>
            <Link to="/addPost" className="hover:text-white transition-all">
            Add Post
            </Link>
        </div>
        <div>
            <a href="https://ayushxvx.github.io/Dark-portfolio" target="_blank"  className="hover:text-white transition-all">
            Profile
            </a>
        </div>
        </nav>
        </>
    )
}