import {useEffect, useState} from 'react'
import { Section, Wrapper, H1, FormContainer, LoaderContainer, LoaderWrapper, H2, Span, GridContainer, Title } from './styles'
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
  const [ searchedResults, setSearchedResults] = useState(null)
  const [ searchTimeout, setSearchTimeout] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://server-ai-pi.vercel.app/api/v1/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if(response.ok) {
          const result = await response.json();

          setAllPosts(result.data.reverse());
        }

      } catch (error) {
        alert(error)

      } finally {
        setLoading(false)
      }
    }

    fetchPosts();
  }, [])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);

    setSearchTimeout(
    setTimeout(() => {
      const searchSResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
       item.prompt.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

       setSearchedResults(searchSResults);


    }, 500)
    );
  }

  return (
    <Section>
      <Wrapper>
        <H1>AI Images</H1>
      </Wrapper>

      <FormContainer>
        <FormField 
          labelName="Search Posts"
          type="text"
          name="text"
          placeholder="Search Posts"
          value={searchText}
          handleChange={handleSearchChange}
        />
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
                  data={searchedResults}
                  title="No search results found"
                />
              ) : (
                <RenderCards 
                  data={allPosts}
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