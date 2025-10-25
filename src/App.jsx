import { useState } from "react";
import "./app.css"
export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [Image, setImage] = useState();
  const btn = () => {

    setShowMenu(!showMenu)
  };

  return <>
    <section className="Exercise">
      <div className="Profil">
        <img src={Image} alt="" />
        <input type="file" name="image" id="image" placeholder="upload an image" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
      </div>
      <div className="Link">
        <a href="#home">Home
        </a>
        <a href="#contact"> Contact
        </a>
        <a href="#product"> product
        </a>
        <a href="Bestdeals"> best deals</a>
        <a href="account"> Account</a>
      </div>
      <div className="Customize">
        <button onClick={btn}>custumize</button>
        {showMenu && (
          <div className="menu">
            <p>Text</p>
            <p>bg-color</p>
            <p>image</p>
            <p>font</p>
          </div>

        )}
      </div>
    </section>
  </>
}