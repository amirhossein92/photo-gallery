import { Layout } from "antd";
import ProductGallery from "./components/product/ProductGallery";

import "./styles/main.scss";
import useFetchProducts from "hooks/query/useFetchProducts";

function App() {
  const { data: products } = useFetchProducts();

  return (
    <div className="App">
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <ProductGallery items={products} />
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
