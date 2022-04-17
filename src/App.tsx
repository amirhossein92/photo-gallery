import { Layout } from "antd";

import ProductGallery from "./components/product/ProductGallery";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <ProductGallery />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
