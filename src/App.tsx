import { Layout } from "antd";

import Topic from "pages/Topic";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <Topic />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
