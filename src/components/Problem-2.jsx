import axios from "axios";
import { useEffect, useState } from "react";

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`https://contact.mediusware.com/api/contacts/?page= ${currentPage}`, {
        params: {
          page: currentPage,
          //   country: showModalB ? "US" : null,
          //   even: onlyEven,
          //   search: searchText,
        },
      });
      const newContacts = response.data;

      setContacts(newContacts.results);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            data-target="#exampleModalA"
            data-toggle="modal"
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            data-toggle="modal"
            data-target="#exampleModalB"
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
      {/* modal */}
      <div
        class="modal fade"
        id="exampleModalA"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalA"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalA">
                Modal A
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="d-flex justify-content-center align-items-center">
                <div className="col-4">
                  <button
                    style={{
                      backgroundColor: "#46139f",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
                    // data-target="#exampleModalA"
                    data-toggle="modal"
                    type="button"
                  >
                    All Contact
                  </button>
                </div>
                <div className="col-4">
                  <button
                    style={{
                      backgroundColor: "#ff7f50",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
                    data-toggle="modal"
                    data-target="#exampleModalB"
                    type="button"
                    className="btn btn-primary"
                  >
                    US Contact
                  </button>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">
                    Closed
                  </button>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Phone</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.phone}</td>
                            <td>{item.country.name}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal end */}

      {/* modal B */}
      <div
        class="modal fade"
        id="exampleModalB"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalA"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalA">
                Modal B
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="d-flex justify-content-center align-items-center">
                <div className="col-4">
                  <button
                    style={{
                      backgroundColor: "#46139f",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
                    id="exampleModalA"
                    type="button"
                    className="btn btn-success"
                  >
                    All Contact
                  </button>
                </div>
                <div className="col-4">
                  <button
                    style={{
                      backgroundColor: "#ff7f50",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    US Contact
                  </button>
                </div>
                <div className="col-4">
                  <button type="button" data-dismiss="modal" className="btn btn-danger">
                    Closed
                  </button>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Phone</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{`item.id`}</td>
                            <td>{`item.phone`}</td>
                            <td>{`item.country.name`}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* modal end */}

      {/* ------end*---- */}
    </div>
  );
};

export default Problem2;
