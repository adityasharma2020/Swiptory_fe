import { useEffect, useState } from 'react';
import SingleStory from '../SingleStory/SingleStory';
import styles from './CategoryStories.module.css';
import { fetchAllStoriesApi } from '../../../services/StoriesService';

import { useDispatch, useSelector } from 'react-redux';
import { SET_MAIN_LOADING } from '../../../redux/slice/mainSlice';
import toast from 'react-hot-toast';
// import { fetchAllStoriesApi, fetchCategoryStoriesApi } from '../../../services/StoriesService';

const CategoryStories = ({ selectedCategory, newStoryAdded }) => {
	const [allStories, setAllStories] = useState({});
	const { user } = useSelector((state) => state.user);
	const { token } = user;
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchAllStories = async () => {
			dispatch(SET_MAIN_LOADING(true));

			try {
				let data = await fetchAllStoriesApi({ selectedCategory, token });
				setAllStories(data?.data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				dispatch(SET_MAIN_LOADING(false));
			}
		};
		fetchAllStories(selectedCategory);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCategory, newStoryAdded]);

	return (
		<div className=''>
			{Object.entries(allStories).map(([category, stories]) => (
				<div className={styles.mainContainer} key={category}>
					<>
						<h2 className={styles.h2}>{`Top stories about ${category} `}</h2>
						<div className={styles.container}>
							{stories.map((story) => (
								<SingleStory key={story._id} story={story} />
							))}
						</div>

						<button className={styles.showMoreButton}>Show More</button>
					</>
				</div>
			))}
		</div>
	);
};

export default CategoryStories;
