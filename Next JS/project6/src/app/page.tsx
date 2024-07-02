import Image from "next/image";
import Img1 from "../../public/banner1.jpg";
import Img2 from "../../public/banner2.jpg";
import Img3 from "../../public/banner3.jpg"



export default function Home() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <Image src={Img1} height={400} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <Image src={Img2} height={400} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
  <Image src= {Img3} height={400} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
   

  );
}