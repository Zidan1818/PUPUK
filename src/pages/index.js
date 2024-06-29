import React from "react";
import Carousel from "./components/carousel";

const Index = () => {
  // Daftar kartu-kartu untuk ditampilkan
  const cards = [
    {
      imgSrc:
        "https://asset.kompas.com/crops/P5UF6sNb4CUY-7xJ81zS3BnEt3k=/7x0:1000x662/750x500/data/photo/2021/01/20/6007b74724c75.jpg",
      title: "Card 1",
      description: "Some quick example text for card 1.",
      buttonLabel: "Go somewhere",
      buttonUrl: "#",
    },
    {
      imgSrc:
        "https://asset.kompas.com/crops/P5UF6sNb4CUY-7xJ81zS3BnEt3k=/7x0:1000x662/750x500/data/photo/2021/01/20/6007b74724c75.jpg",
      title: "Card 1",
      description: "Some quick example text for card 1.",
      buttonLabel: "Go somewhere",
      buttonUrl: "#",
    },
    {
      imgSrc:
        "https://asset.kompas.com/crops/P5UF6sNb4CUY-7xJ81zS3BnEt3k=/7x0:1000x662/750x500/data/photo/2021/01/20/6007b74724c75.jpg",
      title: "Card 2",
      description: "Some quick example text for card 2.",
      buttonLabel: "Go somewhere",
      buttonUrl: "#",
    },
    {
      imgSrc:
        "https://asset.kompas.com/crops/P5UF6sNb4CUY-7xJ81zS3BnEt3k=/7x0:1000x662/750x500/data/photo/2021/01/20/6007b74724c75.jpg",
      title: "Card 3",
      description: "Some quick example text for card 3.",
      buttonLabel: "Go somewhere",
      buttonUrl: "#",
    },
  ];

  return (
    <div>
      <Carousel />
      <div className="container mt-5">
        <h1 className="font-weight-bold">Result</h1>
        <p>Lorem ipsum</p>
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={card.imgSrc} className="card-img-top" alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href={card.buttonUrl} className="btn btn-outline-success">
                    {card.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
