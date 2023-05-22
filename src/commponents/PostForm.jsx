import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
	const [post, SetPosttt] = useState({title: '', body: ''});
	

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		SetPosttt({title: '', body: ''});

	}

  return (
		<form>
          <MyInput 
            value={post.title}
            onChange={e => SetPosttt({...post, title: e.target.value})}
            type="text"
            placeholder="Name post"
          />
          <MyInput 
            value={post.body}
            onChange={e => SetPosttt({...post, body: e.target.value})}
            type="text" 
            placeholder="Description post"/>
          <MyButton onClick={addNewPost}>Create post</MyButton>

        </form>

  )
}

export default PostForm;
