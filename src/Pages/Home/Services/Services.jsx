import { useEffect, useState } from "react";
import ServiceData from "./ServiceData";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceData
                    key={service._id}
                    service={service}
                    ></ServiceData>)
                }
            </div>
        </div>
    );
};

export default Services;