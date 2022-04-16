import { Layout } from "antd";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <PhotoGallery />
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
