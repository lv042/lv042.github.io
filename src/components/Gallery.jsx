import { Jumbotron } from "./home/migration";
import Windmill from "../assets/gallery/windmill.jpg";
import Brown from "../assets/gallery/brown.jpg";
import Bridge from "../assets/gallery/IMG_20230629_232430.jpg";
import Tower from "../assets/gallery/IMG_20230629_232902.jpg";
import Bike from "../assets/gallery/IMG_20230629_233121.jpg";
import Tower2 from "../assets/gallery/IMG_20230630_012758.jpg";

const Gallery = () => {
    return (
        <Jumbotron
            fluid
            id="gallery"
            style={{
                background: `linear-gradient(-20deg, #3465D1, #65C7F7, #0052D4)`,
                backgroundSize: "100% 100%",
            }}
            className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
            <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div style={{ position: "relative" }}>
                        <img
                            src={Windmill}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Windmill"
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "5px",
                                left: "10px",
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Weesp
                        </div>
                    </div>

                    <div style={{ position: "relative" }}>
                        <img
                            src={Bike}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Bike"
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "5px",
                                left: "10px",
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Rotterdam
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div style={{ position: "relative" }}>
                        <img
                            src={Brown}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Skyscraper"
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "5px",
                                left: "10px",
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Rotterdam
                        </div>
                    </div>

                    <div style={{ position: "relative" }}>
                        <img
                            src={Tower2}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Skyscraper"
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "5px",
                                left: "10px",
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Rotterdam
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div style={{ position: "relative" }}>
                        <img
                            src={Bridge}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Bridge"
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "5px",
                                left: "10px",
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Rotterdam
                        </div>
                    </div>

                    <div style={{ position: "relative" }}>
                        <img
                            src={Tower}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="The Valley"
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "5px",
                                left: "10px",
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Amsterdam
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
};

export default Gallery;
