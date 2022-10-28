interface ISingleMoveInList {
	imdbID: string;
	Poster: string;
	Title: string;
	Year: string;
}
interface IMovieInfo {
	Plot: string;
	Poster: string;
	Title: string;
	Year: string;
}
interface IError {
	show: boolean;
	msg: string;
}

export { IError, IMovieInfo, ISingleMoveInList };
