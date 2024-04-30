import { useEffect, useState } from 'react';
import SingleStory from '../SingleStory/SingleStory';
import styles from './CurrentUserStories.module.css';
import { useSelector } from 'react-redux';
import { getUserStoriesApi } from '../../../services/userService';
import toast from 'react-hot-toast';
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader';

const CurrentUserStories = ({ newStoryAdded }) => {
	const [userStories, setUserStories] = useState([]);
	const [page, setPage] = useState(1);
	const [remainingCount, setRemainingConut] = useState(null);
	const [storiesLoading, setStoriesLoading] = useState(false);
	const [showMoreClicked, setShowMoreClicked] = useState(false);
	const { user } = useSelector((state) => state.user);
	const { token } = user;

	useEffect(() => {
		const getStories = async () => {
			try {
				if (!showMoreClicked) {
					setStoriesLoading(true);
				}
				const data = await getUserStoriesApi({ token, page });
				const newStories = data.data?.data;
				setUserStories((prev) => [...prev, ...newStories]);
				setRemainingConut(data?.data?.remainingCount);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setStoriesLoading(false);
			}
		};
		getStories();
	}, [token, newStoryAdded, page, showMoreClicked]);

	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.h1}>Your Stories</h1>
			{!storiesLoading ? (
				<>
					<div className={styles.container}>
						{userStories?.map((story, index) => {
							return <SingleStory key={index} story={story} />;
						})}
					</div>
					{remainingCount > 0 && (
						<button
							onClick={() => {
								setShowMoreClicked(true);
								setPage((prev) => prev + 1);
							}}
							className={styles.showMoreButton}
						>
							Show More
						</button>
					)}
				</>
			) : (
				<SkeletonLoader />
			)}
		</div>
	);
};

export default CurrentUserStories;
