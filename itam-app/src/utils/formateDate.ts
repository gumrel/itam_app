export function formatCurrentDate() {
	const now = new Date();
	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	];

	const day = now.getDate();
	const month = months[now.getMonth()];
	const year = now.getFullYear();

	return `${day} ${month} ${year}`;
}
