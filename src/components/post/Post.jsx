import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import axiosInstance from '../../axios';
import { AuthContext } from '../../context/AuthContext';
import {Add, Remove} from '@material-ui/icons'
import "./post.css";

export function Post({ post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const[user, setUser] = useState({})
    const{user:currentUser} = useContext(AuthContext);
    

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const comments = useRef();
    
    const commentHandler = async(e) =>{
        e.preventDefault();
        const newComment = {

            comments: comments.current.value
        }
        try{
            await axiosInstance.put("/posts/"+post._id+ "/comment", {userId: currentUser._id});
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])
    
    
    useEffect(()=>{
        const fetchUser = async() => {
         const res = await axiosInstance.get(`/users?userId=${post.userId}`);  
        setUser(res.data)
        };
        fetchUser();
      },[post.userId]);

const likeHandler =()=>{
    try{
        axiosInstance.put("/posts/"+post._id+ "/like", {userId: currentUser._id})
    }catch(err){
        
    }
    setLike(isLiked ? like -1 : like +1);
    setIsLiked(!isLiked);
}

// const handleClick = async() =>{
//     try{
//         if(followed){
//             await axiosInstance.put("/users/" +user._id + "/follow", {userId: currentUser._id})
//         }else{
//             await axiosInstance.put("/users"+ user._id+ "/unfollow", {userId: currentUser._id})
//         }
//     }catch(err){
//         console.log(err)
//     }
//     setFollowed(!followed)
// }
  return(
      <>
      
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user.profilePicture || PF + "person/noAvatar.png"} alt=""/>
                    <span className="postUserName">{user.username}</span>
                    {/* {user.username !== currentUser.username &&(
          <button className="followButton" onClick={handleClick}>
              {followed ? "Unfollow" : "Follow"}
              {followed ? <Remove/> : <Add/>}
              </button>
      )} */}

                </div>
                <div className="postTopRight">

                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={PF + post.img} alt="" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">7 comments</span>
                </div>
                
            </div>
            <div className="postCommentBox">
                    <input type="text" placeholder="write a comment" className="postCommentboxInput" ref={comments}/>
                    <button type="submit" className="commentButton" onClick={commentHandler}>Post</button>

                </div>
        </div>
        
        
    </div>
    </>
   )
  }
export default Post;