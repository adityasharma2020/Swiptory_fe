import { useEffect, useState } from 'react';
import CategoriesCarousel from '../components/Categories/CategoriesCarousel';
import CurrentUserStories from '../components/Story/CurrentUserStories/CurrentUserStories';
import CategoryStories from '../components/Story/CategoryStories/CategoryStories';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MAIN_LOADING } from '../redux/slice/mainSlice';

const HomePage = ({ categories, newStoryAdded }) => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const { isLoggedIn } = useSelector((state) => state.user);

	return (
		<div>
			<div>
				<CategoriesCarousel
					categories={categories}
					setSelectedCategory={setSelectedCategory}
					selectedCategory={selectedCategory}
				/>
			</div>

			<div>{isLoggedIn ? <CurrentUserStories newStoryAdded={newStoryAdded} /> : null}</div>

			<div>
				<CategoryStories
					selectedCategory={selectedCategory}
					newStoryAdded={newStoryAdded}
				/>
			</div>
		</div>
	);
};

export default HomePage;
