import "./App.css";
import songList from "./static/songs";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Home from "./pages/Home";
import SongDetails from "./pages/Songs/SongDetails";

function App() {
  const { Header, Content } = Layout;
  songList.sort((a, b) => {
    return new Date(b.publishedDate) - new Date(a.publishedDate);
  });

  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/songs">Add a Song</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {/* <div className="site-layout-content">
          </div> */}
          <Switch>
            <Route path="/" exact>
            <Home data={songList} />
            </Route>
            <Route path="/songs/:id">
              <SongDetails data={songList} />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
