
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';


const site = {
	site_name : "react test",
	site_title : "my first site with react",
	nav : [
    { "link": "nav1", "text": "my link" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" },
  ]
}

function App() {
  return (
    <>
      <Header data={site}/>
      <Footer data={site}/>
    </>
  );
}

export default App;
