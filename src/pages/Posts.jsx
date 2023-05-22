import React, {useEffect, useState} from "react";
import PostList from "../commponents/PostList";
import PostForm from "../commponents/PostForm";
import PostFilter from "../commponents/PostFilter";
import MyModel from "../commponents/UI/MyModal/MyModel";
import MyButton from "../commponents/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostServece from "../API/PostServece";
import Loader from "../commponents/UI/Loader/Loader";
import { useFethcing } from "../hooks/useFethcing";
import {getPageCount} from "../utils/pages";
import Pagingation from "../commponents/UI/pagination/Pagingation";


function Posts() {

  const [posts, setPost] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);



  const [fetchPost, isPostLoading, postError] = useFethcing( async () => {
    const response = await PostServece.getAll(limit, page);
    setPost(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));

  });

  useEffect(() => {
    fetchPost();
  }, [page]);


  const createPost = (newPost) => {
    setPost([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    fetchPost();

  }


  return (
    <div className="App">
     <MyButton onClick={() => setModal(true)}>
        Create user
     </MyButton>
     <MyModel visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
     </MyModel>
     <hr style={{margin: '15px 0'}}/>
     <PostFilter 
      filter={filter} 
      setFilter={setFilter}
     />
     {postError &&
      <h1>Error {postError}</h1>
     }
     {isPostLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List of posts 1"}/>
     }
    <Pagingation 
      page={page} 
      changePage={changePage}
      totalPage={totalPage}

    />
    
     

  </div>
  );
}

export default Posts;
