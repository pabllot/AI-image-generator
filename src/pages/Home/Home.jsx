import {useState} from 'react'
import { Section, Wrapper, H1, Paragraph, FormContainer, LoaderContainer, LoaderWrapper, H2, Span, GridContainer, Title } from './styles'
import { Loader, Card, FormField } from '../../components'

const RenderCards = ({data, title}) => {
  if(data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }
  return (
    <Title>{title}</Title>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null)
  const [searchText, setSearchText] = useState('')

  return (
    <Section>
      <Wrapper>
        <H1>The Community Showcase</H1>
        <Paragraph>Browse through a collection of imaginative images generated by AI</Paragraph>
      </Wrapper>

      <FormContainer>
        <FormField />
      </FormContainer>

      <LoaderContainer>
        {loading ? (
         <LoaderWrapper>
            <Loader/>
          </LoaderWrapper>
        ) : (
          <>
            {searchText && (
            <H2>Showing results for <Span>{searchText}</Span></H2>
            )}
            <GridContainer>
              {searchText ? (
                <RenderCards
                  data={[]}
                  title="No search results found"
                />
              ) : (
                <RenderCards 
                  data={[]}
                  title="No posts found"
                />
              )}
            </GridContainer>
          </>
        )}
      </LoaderContainer>

    </Section>
  )
}

export default Home