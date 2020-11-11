import styled from 'styled-components';

const Wrapper = styled.div``;

const NoteContentPage = ({ id }) => {
  return <Wrapper>{id}</Wrapper>;
};

export async function getServerSideProps({ query }) {
  return {
    props: {
      id: query.id,
    },
  };
}

export default NoteContentPage;
