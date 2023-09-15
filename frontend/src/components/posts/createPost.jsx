import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { createPost } from "../../store/postsReducer";
import { useHistory } from "react-router-dom";
import "./createpost.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreatePost () {
    // if (currentUser !== null) return <Redirect to="/" />;
    const dispatch = useDispatch();
    const currentUser =  useSelector(state => state.session.user);
    const [caption, setCaption] = useState("")
    const [photo, setPhoto] = useState("")
    const history = useHistory(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const postDetails = new FormData();
            postDetails.append('post[caption]', caption);
            postDetails.append('post[photo]', photo);
            // postDetails.append('post[author_id]', currentUser.id);
            const newPost = await dispatch(createPost(postDetails));
            setCaption('');
            setPhoto('');
            if (newPost) history.push('/splash');
    }

    const handleFile = e => {
        // console.log('handling file...')
        const file = e.currentTarget.files[0]
        // console.log(file)
        setPhoto(file)
    }

return(
    <>
    <div className="create-post-container">
            <form className="create-post-form" onSubmit={handleSubmit}>
                <input  className="create-post-file-input" type="file" placeholder="Drag photos and videos here" onChange={handleFile} required />
                <textarea
                    className="create-post-textarea"
                    type="text"
                    placeholder="Write a Caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    maxlength="85"
                />
                <input className="create-post-submit" type="submit" value={'Add Post'} />
                {/* <button type="submit"></button> */}
            </form>
        </div>
    </>
    )
}
export default CreatePost;