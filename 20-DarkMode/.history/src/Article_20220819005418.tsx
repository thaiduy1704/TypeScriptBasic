import moment from 'moment';
import styled from 'styled-components';
import { IArticle } from './typing';

const Article = ({title,date,length,snippet}:IArticle) => {
	return <div>Article</div>;
};

const Container = styled.article`
  margin:5rem 0;
  

`

export default Article;
