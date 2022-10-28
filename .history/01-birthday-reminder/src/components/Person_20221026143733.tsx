import styled from "styled-components";
export interface PersonType {
  id: number;
  name: string;
  age: number;
  image: string;
}
const Person = ({ id, name, age, image }: PersonType) => {
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <Content>
        <h3>{name}</h3>
        <p>{age}</p>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  align-items: start;
  margin: 1.5rem auto;
  img {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }
  p {
    color: var(--clr-paragraph);
    font-size: 2rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export default Person;
