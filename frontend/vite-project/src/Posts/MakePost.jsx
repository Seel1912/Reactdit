import { useState } from "react";
import Input from "../InputField/Input";
import { createPost } from "../redux/postSlice";
import "./post.css"
import { useDispatch } from "react-redux";

const MakePost = (props) => {
    const {setOpen} = props
    const [title,setTitle] = useState("Add a title")
    const dispatch = useDispatch();
    const [desc,setDesc] = useState("Add some descriptions")
    const tags =["None","NSFW","Mood","Quotes","Shitpost"]
    const [selectedIdx,setSelectedIdx] = useState(0)
    const handlePost = () => {
        setOpen(false)
        const newPost = {
            title:title,
            description:desc,
            tag:selectedIdx,
        };
        dispatch(createPost(newPost))
    }
    return ( 
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title"/>
            <Input data={desc} inputType="textarea" setData={setDesc} label="Descriptions" classStyle="makepost-desc" />
            <label>Tags</label>
                <div className="makepost-tags">
                    {tags.map((tag,idx)=>{
                        return(
                            <button key={idx} onClick={() => setSelectedIdx(idx)} className={`${selectedIdx === idx ? `makepost-tags-selected` : `makepost-tags-${tag}`}`}>{tag}</button>
                        )
                    })}
                </div>
        </section>
    );
}
 
export default MakePost;