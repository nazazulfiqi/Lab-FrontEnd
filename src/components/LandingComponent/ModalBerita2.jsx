import React, { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";

function ModalBerita2() {
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
          <Modal.Title>Tata Cara Berpakaian Lab</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/pakaian1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/pakaian2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBerita2;
