import React from "react";

const Carousel = () => {
  // Daftar gambar untuk carousel
  const images = [
    {
      src: "https://c0.wallpaperflare.com/preview/469/518/472/soil-dirt-texture-earth.jpg",
      alt: "First slide",
      caption: "Fertilizer",
      description:
        "Some representative placeholder content for the first slide.",
    },
  ];

  return (
    <div className="carousel-wrapper">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{
                position: "relative",
                height: "90vh", // Tinggi sesuai kebutuhan Anda
              }}
            >
              <img
                src={image.src}
                className="d-block w-100"
                alt={image.alt}
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)", // Warna overlay gelap
                }}
              ></div>
              <div
                className="carousel-caption text-white"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h1>{image.caption}</h1>
                <p>{image.description}</p>
                <div className="d-flex justify-content-center mt-5">
                  <form className="d-flex col-md-12" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-secondary" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
