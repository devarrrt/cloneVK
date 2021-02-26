import axios from 'axios'
import { Post } from '../redux/ducks/posts/state/state'

 


 
export const PostsApi = {

	async fetchPosts(){
		const { data } = await axios.get( 'http://localhost:3001/posts' )
		return data
	},

	addPost( payload: Post ) {
		return axios.post('http://localhost:3001/posts', payload)
		.then(({ data }) => data)
	},

	deletePost( postId: string ) {
		return axios.delete('http://localhost:3001/posts/' + postId)
		.catch( ()=> {
			console.log('у вас тут ошибочка')
		})
	}
	
}
