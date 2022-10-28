import styled from "styled-components";
export interface PersonType {
  id: number;
  name: string;
  age: number;
  image: string;
}
const Person = ({ id, name, age, image }: PersonType) => {
  return <div>Person</div>;
};

const Wrapper = styled.article`
  display: flex;
  align-items: center;
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

export default Person;
