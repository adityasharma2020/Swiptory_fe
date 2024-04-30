import { useEffect, useState } from 'react';
import SingleStory from '../SingleStory/SingleStory';
import styles from './CurrentUserStories.module.css';
import { useSelector } from 'react-redux';
import { getUserStoriesApi } from '../../../services/userService';
import toast from 'react-hot-toast';
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader';
import { useLocation } from 'react-router-dom';

const CurrentUserStories = ({ newStoryAdded }) => {
	const [userStories, setUserStories] = useState([]);
	const [page, setPage] = useState(1);
	const [remainingCount, setRemainingConut] = useState(null);
	const [storiesLoading, setStoriesLoading] = useState(false);
	const [showMoreClicked, setShowMoreClicked] = useState(false);
	const location = useLocation();
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
		<>
			{location.pathname.startsWith('/your-story') || userStories.length > 0 ? (
				<>
					<div className={styles.mainContainer}>
						<h1 className={styles.h1}>Your Stories</h1>
						{!storiesLoading ? (
							<>
								{userStories.length > 0 ? (
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
									<>
										<div className={styles.noStories}>No Stories Available</div>
									</>
								)}
							</>
						) : (
							<SkeletonLoader />
						)}
					</div>
				</>
			) : null}
		</>
	);
};

export default CurrentUserStories;
