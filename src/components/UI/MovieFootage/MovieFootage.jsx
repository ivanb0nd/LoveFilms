import React from 'react';
import FootageSlider from '../Footages/Footages';
import classes from './MovieFootage.module.css';

const MovieFootage = ({ footageData }) => {

	return (
		<>
			<h2 className={classes.title}>Кадры из фильма</h2>
			{footageData.length === 0
				? <div className={classes.notReady}>
					<p className={classes.text}>Кадры к фильму ещё не готовы <br /> Мы работаем над этим </p>
					<span className={classes.emoji}>👨‍🔧</span>
				</div>
				: <FootageSlider footageData={footageData} />
			}
		</>
	)
}

export default MovieFootage