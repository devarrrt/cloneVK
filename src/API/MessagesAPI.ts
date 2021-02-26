import axios from 'axios'
import { Message } from '../redux/ducks/messages/state/state'


export const MessagesAPI = {

	async fetchMessages(){
		const { data } = await axios.get( 'http://localhost:3001/messages' )
		return data
	},
  
	async addMessage( payload: Message ){
		const data = await axios.post('http://localhost:3001/messages', payload)
		return data
	}

}

