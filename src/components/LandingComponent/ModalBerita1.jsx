import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalBerita1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className="d-flex py-2 px-2 py-lg-2 px-lg-3 mt-3 mb-4 mb-lg-4 mt-lg-2 align-items-center justify-content-center mt-0 primary-berita"
        variant="primary-berita"
        onClick={handleShow}
      >
        Lihat Berita
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jadwal Praktikum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <img
            src="assets/images/ATA-2324.jpeg"
            className="img-fluid"
            alt=""
          />{" "}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBerita1;
