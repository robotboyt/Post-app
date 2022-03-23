import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AllPostsPage from './pages/AllPosts';
import NewPostPage from './pages/NewPost';
import Layout from './component/layout/Layout';
function App() {
  return (
    <div>
      <Layout>
        <Switch> 
          <Route path='/' exact>
            <AllPostsPage />
          </Route>
          <Route path="/new-post">
            <NewPostPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
