import axios from 'axios'



export const UsersApi = {

async	fetchUsers() {
		const { data } = await axios.get( 'http://localhost:3001/users' )
		return data
	},

	async fetchUserData( id: string ){
		const { data } = await axios.get( 'http://localhost:3001/users?id=' + id )
		return data
	}


	

}