import Category from './Category';
import styles from './CategoriesCarousel.module.css';

const CategoriesCarousel = ({categories, selectedCategory, setSelectedCategory }) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.categoriesContainer}>
				{categories.map((category, index) => {
					return (
						<Category
							key={index}
							category={category}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CategoriesCarousel;
