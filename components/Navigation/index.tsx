import Link from "next/link";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  padding: 20px 30px;

  background-color: white;
  color: #191919;
`;

const List = styled.ul`
    display: flex;
  list-style: none;

  & > li {
    margin-left: 10px;
  }
`

export default function index() {
  return (
    <Container>
      <Link href="">ale3oula</Link>
      <List>
        <li>About</li>
        <li>What I do</li>
        <li>About</li>
      </List>
    </Container>
  );
}
