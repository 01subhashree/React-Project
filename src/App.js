import "./components/project.css";
import Project from './components/Project';
import Textarea from "./Textarea.js";

function App() {
  const images =[
    "https://1.bp.blogspot.com/-NP0zmaopjRE/UhhnlfaNsrI/AAAAAAAAEuE/Z5HQX6Jhqik/s1600/a+(9).jpg",
    "https://www.thewowstyle.com/wp-content/uploads/2015/07/autunm-desktop-natural-hd-wallpapers.jpg",
    "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/sstk-vegan-food.jpg",
    "https://a.cdn-hotels.com/gdcs/production74/d462/9fe21145-585c-4e7f-9373-24ed559ec010.jpg"
]
  return (
    <div >
      <Project source={images}/>
      <Textarea/>
    </div>
  );
}

export default App;
