import { Layout } from "antd";
import ProductGallery from "./components/Product/ProductGallery";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <ProductGallery items={[]} />
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
