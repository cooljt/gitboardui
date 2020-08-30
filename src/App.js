import React, { useState, useEffect } from 'react';
import { Container, Box } from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DisplayCard from "./components/DisplayCard";

import {getPythonRepos} from "./api/githubApi";

const testData = {
  title: "storybookjs",
  summary: "📓 The UI component explorer. Develop, document, & test for React, Vue, Angular, Ember, Web Components, & more!",
  image: "https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2020/06/top-7-ui-libraries-and-kits-for-react.png?w=730&ssl=1",
  link: "https://github.com/storybookjs/storybook"
}

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(status => true);
    getPythonRepos().then(repos => {
      console.log(repos);
      setRepos(cur => repos.data);
      setLoading(cur => false);
    })
  }, [])

  const renderRepos = () => {
    return repos.map(data =>
      <GridListTile key={data.id} cols={1}>
        <DisplayCard key = {data.id} title = {data.name} summary={data.description} image={testData.image} link={data.html_url} />
      </GridListTile> 
      )
  }

  return (
    <div style={{background: '#F7F7FF'}}>
      <Container>
        <h1>Git Board</h1>
        <GridList cellHeight={360} cols={3}>
          {loading && <h1>Loading ..... </h1>}
          {!loading && renderRepos()}
        </GridList>
      </Container>
    </div>
  );
}

export default App;
