import React from 'react'
import { Sidebar } from './Sidebar'
import { stylesHome } from '../pages/HomePage/style'

interface ILayout {
	children: React.ReactNode
}



export const Layout: React.FC<ILayout> = ({ children }) => {
const styles = stylesHome()
	return (
		<div className={ styles.wrapperHome } >

				{/* Sidebar */}
				<div >
					<Sidebar styles={ styles } />
				</div>

				{/* main */}
				<div className={ styles.main }> 
					{ children }
				</div>

				{/* rigthNews */}
				<div>
		dnsknds
				</div>
		</div>
	)
}
