import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/Layouts/BaseLayout";
import Home from "./pages/Home";

import "gardevoir/dist/index.min.css";
import './assets/scss/styles.scss'

function App() {
	return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
		</BrowserRouter>
	);
}

export default App;
