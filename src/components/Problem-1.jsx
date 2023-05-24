import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [data, setData] = useState([]);
  console.log(data.map((item) => item.name));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const status = e.target[1].value;
    const newData = { name, status };
    setData((prevData) => [...prevData, newData]);
  };

  const handleClick = (value) => {
    setShow(value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-auto">
              <input type="text" className="form-control" placeholder="Status" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                if (show === "all") {
                  return (
                    <tr className="text-info  text-justify" key={index}>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                    </tr>
                  );
                } else if (show === "active") {
                  if (item.status === "active") {
                    return (
                      <tr className="text-primary text-justify" key={index}>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                      </tr>
                    );
                  }
                } else if (show === "completed") {
                  if (item.status === "completed") {
                    return (
                      <tr className="text-success text-justify" key={index}>
                        <td>{item.name}</td>

                        <td>{item.status}</td>
                      </tr>
                    );
                  }
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
