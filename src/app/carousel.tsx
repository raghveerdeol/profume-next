import { promises as fs } from "fs";
import Image from "next/image";

export default async function Carousel() {

    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const data = JSON.parse(file);

        return (
            <>
            <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        {data.map((item: any, index: number)=> (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <Image src={`/images${item.imageUrl}`} className="d-block w-100" alt="..." width={100} height={500} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                        </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        );
    }