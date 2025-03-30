import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { togglefavorite,fetchposts, fetchcomments } from './store/postsreducer' // before thunk
import './App.css'

function App() {

  
  // console.log(movies);
  const {posts,comments,favorites,loading,error} = useSelector((state) => state.posts)

  const dispatch = useDispatch()


	useEffect(()=>{

		dispatch(fetchposts())
		.unwrap()
		.then(response=>{
			// console.log(response);
		})
		.catch(err=>{
			console.log(err);
		})


		dispatch(fetchcomments())
		.unwrap()
		.then(response=>{
			console.log(response);
		})
		.catch(err=>{
			console.log(err);
		})
	},[]);

	// Group comments by postID
	const commentsbypost = comments.reduce((init,comment)=>{
		init[comment.postId] = init[comment.postId] || []
		init[comment.postId].push(comment);
		return init;
	},[])
	// console.log(commentsbypost);

	// explain sample codes
	// {
	// 	1: [comment1,comment2],
	// 	2: [comment3],
	// 	3: [comment4,comment5]
	// }

  return (
    <div>
		<h3>Posts List</h3>
		{loading && <p>Loading posts</p>}
		{ error && <p style={{color:'red'}}>{error}</p>}
		<ul>
			{posts.map(post=>(
				<li key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
					<h4>Comments: </h4>
					<ul>
						{commentsbypost[post.id] ? ( 
							commentsbypost[post.id].map(comment=>
								<li key={comment.id} style={{textAlign:"left",listStyle:'circle'}}>
									<strong>{comment.body}</strong>
								</li>
							)
						 ) : (
							<p>No comments available</p>		
						)}
						
					
					</ul> 

					<button type='button' onClick={()=>dispatch(togglefavorite(post.id))}>
						{favorites.includes(post.id) ? 'Unvarorite' : 'Farorite'}
					</button>
				</li>
			))}
		
		</ul>

		{/* <h3>Comments</h3>
		<ul>
			{comments.map(comment=>(
				<li key={comment.id}>
					<strong>{comment.body}</strong>
				</li>
			))}
		
		</ul> */}
    </div>
  )
}

export default App
 

// comment results 
// 0: 
// 	body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// 	email: "Eliseo@gardner.biz"id: 1
// 	name: "id labore ex et quam laborum"
// 	postId: 1
// 	[[Prototype]]: Object
// 1: 
// 	body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
// 	email: "Jayne_Kuhic@sydney.com"
// 	id: 2
// 	name: "quo vero reiciendis velit similique earum"
// 	postId: 1
// 	[[Prototype]]: Object

// comment by post result 
// 1: Array(5)
// 	0: {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}
// 	1: {postId: 1, id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et'}
// 	2: {postId: 1, id: 3, name: 'odio adipisci rerum aut animi', email: 'Nikita@garfield.biz', body: 'quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione'}
// 	3: {postId: 1, id: 4, name: 'alias odio sit', email: 'Lew@alysha.tv', body: 'non et atque\noccaecati deserunt quas accusantium u…r itaque dolor\net qui rerum deleniti ut occaecati'}
// 	4: {postId: 1, id: 5, name: 'vero eaque aliquid doloribus et culpa', email: 'Hayden@althea.biz', body: 'harum non quasi et ratione\ntempore iure ex volupta…ugit inventore cupiditate\nvoluptates magni quo et'}
// 	length: 5
// [[Prototype]]: Array(0)