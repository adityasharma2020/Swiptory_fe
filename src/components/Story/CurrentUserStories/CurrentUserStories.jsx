
import { useEffect, useState } from 'react';
import SingleStory from '../SingleStory/SingleStory';
import styles from './CurrentUserStories.module.css';
import { useSelector } from 'react-redux';
import { getUserStoriesApi } from '../../../services/userService';

const CurrentUserStories = ({newStoryAdded}) => {
	const [userStories, setUserStories] = useState([]);
	const { user } = useSelector((state) => state.user);
	const { token } = user;

	useEffect(() => {
		const getStories = async () => {
			const data = await getUserStoriesApi({ token });
			setUserStories(data.data);
		};
		getStories();
	}, [token,newStoryAdded]);
	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.h1}>Your Stories</h1>
			<div className={styles.container}>
				{userStories.map((story, index) => {
					return <SingleStory key={index} story={story} />;
				})}
			</div>

			<button className={styles.showMoreButton}>Show More</button>
		</div>
	);
};

export default CurrentUserStories;
