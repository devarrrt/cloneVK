import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EmailIcon from '@material-ui/icons/Email';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Hidden, Button } from '@material-ui/core'
import { stylesHome } from './../pages/HomePage/style';
import { ModalBlock } from './ModalBlock';
import { AddPost } from './AddPost' 

import vkIcon from '../assets/img/vk.svg'



interface ISidebar {
	styles: ReturnType<typeof stylesHome>
}



export const Sidebar: React.FC<ISidebar> = ({ styles }) => {
	const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)


	const openAddPost = () => {
		setVisibleAddTweet(true)
	}

	const closeAddPost = () => {
		setVisibleAddTweet(false)
	}


	return (
		<Paper className={styles.sidebar} >
			<ul className={styles.sidebarList}>

				<Link to="/" className={styles.headerLink}>
					<img src={vkIcon} alt="vkIcon" className={styles.sidebarListIcon} />
				</Link>

				<li className={styles.sidebarListItem}>
					<Link to="/">
						<div>
							<SearchIcon className={styles.sidebarListIcon} />
							<Hidden smDown>
								<Typography variant="h6" className={styles.sidebarListName} >
									Поиск
									</Typography>
							</Hidden>
						</div>
					</Link>
				</li>

				<li className={styles.sidebarListItem}>
					<Link to="/">
						<div>
							<HomeIcon className={styles.sidebarListIcon} />
							<Hidden smDown>
								<Typography variant="h6" className={styles.sidebarListName} >
									Главная
									</Typography>
							</Hidden>
						</div>
					</Link>
				</li>

				<li className={styles.sidebarListItem}>
					<Link to="/users">
						<div>
							<PeopleAltIcon className={styles.sidebarListIcon} />
							<Hidden smDown>
								<Typography variant="h6" className={styles.sidebarListName} >
									Друзья
									</Typography>
							</Hidden>
						</div>
					</Link>
				</li>

				<li className={styles.sidebarListItem}>
					<Link to="/messages">
						<div>
							<EmailIcon className={styles.sidebarListIcon} />
							<Hidden smDown>
								<Typography variant="h6" className={styles.sidebarListName} >
									Сообщения
									</Typography>
							</Hidden>
						</div>
					</Link>
				</li>

				<li className={styles.sidebarListItem}>
					<Link to="/home">
						<div>
							<FiberNewIcon className={styles.sidebarListIcon} />
							<Hidden smDown>
								<Typography variant="h6" className={styles.sidebarListName} >
									Новости
									</Typography>
							</Hidden>
						</div>
					</Link>
				</li>

				<li className={styles.sidebarListItem}>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						onClick={openAddPost}
					>
						<Hidden smDown>Добавить новость</Hidden>
						<Hidden mdUp>
							<CreateIcon />
						</Hidden>
					</Button>

					<ModalBlock
						visible={visibleAddTweet}
						onClose={closeAddPost}
						title="Добавить новость"
					>
						<AddPost 
						 styles={ styles }
						/>
					</ModalBlock>
				</li>

			</ul>
		</Paper>
	)
}
