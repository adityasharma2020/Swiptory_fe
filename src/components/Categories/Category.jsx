import styles from './Category.module.css';
import { useState } from 'react';

const Category = ({ category, selectedCategory, setSelectedCategory }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<div>
			{/* container */}
			<div onClick={() => setSelectedCategory(category.key)} className={styles.mainContainer}>
				<img
					className={!loaded ? `${styles.loading}` : ''}
					onLoad={() => setLoaded(true)}
					src={category.img}
					alt=''
				/>

				<p>{category.name}</p>
			</div>
		</div>
	);
};

export default Category;
