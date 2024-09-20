import React, { useEffect, useState } from "react";
import axios from "axios";
const ServicePage = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get("http://localhost:2024/api/service/service-data")
          .then((response) => {
            if (response.data) {
              setServiceData(response.data.getServiceData);
              console.log(serviceData);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
            {serviceData?.map((item) => (
          <div className="col-md-4 col-lg-3 col-xl-3 ">
              <div
                className="card border-success mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">{item.title}</div>
                <div className="card-body text-success">
                  <h5 className="card-title">{item.price}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
          </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ServicePage;
