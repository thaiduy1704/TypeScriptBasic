import moment from 'moment';
import styled from 'styled-components';
import { IArticle } from './typing';

const Article = ({ title, date, length, snippet }: IArticle) => {
	return <Container>
    
  </Container>
};

const Container = styled.article`
	margin: 5rem 0;
	.info {
		margin-bottom: 2rem;
	}
`;

export default Article;
