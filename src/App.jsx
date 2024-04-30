import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ViewStoryPage from './pages/ViewStoryPage';
import BookmarkPage from './pages/BookMarkPage';
import LoginPopup from './components/Auth/Login/LoginPopup';
import RegisterPopup from './components/Auth/Register/RegisterPopup';
import { useEffect, useState } from 'react';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';
import ViewStoryPopup from './components/Story/ViewStoryPopup/ViewStoryPopup';
import AddStoryPopup from './components/Story/AddStoryPopup/AddStoryPopup';
import './App.css';

const categories = [
	{ key: 'All', name: 'All', img: '/public/assets/categories/all.webp' },
	{ key: 'Food', name: 'Food', img: '/public/assets/categories/food.webp' },
	{ key: 'Health', name: 'Health And Fitness', img: '/public/assets/categories/health.webp' },
	{ key: 'Travel', name: 'Travel', img: '/public/assets/categories/travel.webp' },
	{ key: 'Movie', name: 'Movies', img: '/public/assets/categories/movies.webp' },
	{ key: 'Education', name: 'Education', img: '/public/assets/categories/education.webp' },
	{ key: 'Medical', name: 'Medical', img: '/public/assets/categories/medical.webp' },
	{ key: 'World', name: 'World', img: '/public/assets/categories/world.webp' },
	{ key: 'India', name: 'India', img: '/public/assets/categories/india.webp' },
];

function App() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [newStoryAdded, setNewStoryAdded] = useState(false);
	const { showLoginPopup, loading, showRegisterPopup, showViewStoryPopup, showAddStoryPopup } =
		useSelector((state) => state.main);
	const { activeStory } = useSelector((state) => state.story);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.matchMedia('(max-width: 700px)').matches);
		};

		setIsSmallScreen(window.matchMedia('(max-width: 700px)').matches);
		window.addEventListener('resize', handleResize);

		// cleanup function to remove the event listener when component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [setIsSmallScreen]);

	return (
		<>
			<Toaster />
			{loading ? <Loader /> : null}

			<div>
				<BrowserRouter>
					{showLoginPopup ? <LoginPopup /> : null}
					{showRegisterPopup ? <RegisterPopup /> : null}
					{showViewStoryPopup ? <ViewStoryPopup activeStory={activeStory} /> : null}
					{showAddStoryPopup ? (
						<AddStoryPopup
							categories={categories}
							setNewStoryAdded={setNewStoryAdded}
						/>
					) : null}

					{isSmallScreen ? <MobileNavbar /> : <Navbar />}
					<Routes>
						<Route path='/bookmarks' element={<BookmarkPage />} />
						<Route
							path='/your-story'
							element={isSmallScreen ? <>your story </> : <Navigate to='/' replace />}
						/>
						<Route path='/view_story/:id' element={<ViewStoryPage />} />
						<Route
							path='/*'
							element={
								<HomePage categories={categories} newStoryAdded={newStoryAdded} />
							}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
