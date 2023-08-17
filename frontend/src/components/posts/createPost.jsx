import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { createPost } from "../../store/postsReducer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreatePost () {
   
    const dispatch = useDispatch();
    const currentUser =  useSelector(state => state.session.user);
    const [caption, setCaption] = useState("")
    const [photo, setPhoto] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        const postDetails = new FormData();
            postDetails.append('post[caption]', caption);
            postDetails.append('post[photo]', photo);
            dispatch(createPost(postDetails))
            setCaption('')
            setPhoto('')
    }

    const handleFile = e => {
        console.log('handling file...')
        const file = e.currentTarget.files[0]
        console.log(file)
        setPhoto(file)
      }


   return(
    <>
    <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    placeholder="Caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <input type="file" onChange={handleFile} />
                <input type="submit" value={'Add Post'} />
                {/* <button type="submit"></button> */}
            </form>
        </div>
    </>
   )
}
    // <Link to="/addPost">
    //     <i className="fas fa-plus"></i>
    //      <FontAwesomeIcon icon={faPlus} />
    //  </Link>
export default CreatePost;