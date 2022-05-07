import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(10);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit
    //     , {
    //     pollingInterval: 1000
    // }
    );
    const [createPost, {error: postErorr, isLoading: isLoafingPost}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    // useEffect(()=> {
    //
    //     setTimeout(() => {
    //         setLimit(5);
    //
    //     }, 2000)
    //
    //     }
    //     ,[])

    const handleCreate = async () =>  {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className={"post__list"}>
                <button onClick={handleCreate}>ADD</button>
                <button onClick={()=> refetch()}>REFETCH</button>
                {isLoading && <h1> LOADING....</h1>}
                {error && <h1> LOADING....</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} remove={handleRemove} update={handleUpdate}  post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;