import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate,useParams} from "react-router"
import {deleteuser} from "./../../store/usersreducer";


export default function DeleteUser(){
     const {id} = useParams();
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const deleteHandler = async(e)=>{

          await dispatch(deleteuser(Number(id)))
          .unwrap()
          .then(()=>{
               navigate('/');
          })
          .catch(err=>console.log(err));

     }

     return (
          <div>
               <h3>Are you sure you want to delete this user?</h3>
               <button type="button" onClick={deleteHandler}>Yes, Delete</button>
               <button type="submit" onClick={()=>navigate(-1)}>Cancel</button>
          </div>
     )
}

// 15ED