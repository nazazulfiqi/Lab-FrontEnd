import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ModalBerita1 from "./ModalBerita1";
import ModalBerita2 from "./ModalBerita2";

function Berita() {
  return (
    <section
      className="container container-laporan"
      id="berita"
      data-aos="fade-up"
    >
      <div className="row mx-0 px-0">
        <div className="col-lg-12 px-0 col-12 col-md-12"></div>
        <div className="row mx-0 text-center text-white">
          <h1 className="title-laporan mb-3 mb-2">Berita Praktikum</h1>
          <p className="desc-hero text-center mb-4">
            Berikut adalah berita tentang praktikum di laboratorium.
          </p>
          <Carousel className="pb-5" interval={1000}>
            <CarouselItem>
              <div className="col-lg-8 col-md-12 col-12 mb-3 mx-auto ">
                <div
                  className="card mb-3 col-lg-12 card-berita"
                  style={{ overflow: "hidden" }}
                >
                  <div className="row g-0">
                    <div className="col-md-5 col-5 my-auto mx-auto">
                      <img
                        src="assets/images/ATA-2425.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7 col-7">
                      <div className="card-body">
                        <p className="judul-berita text-start">
                          Jadwal Praktikum
                        </p>
                        <p className="rangkum-berita nama-struktur text-start">
                          Berikut adalah Jadwal Praktikum ATA 2024/2025
                        </p>

                        <ModalBerita1 />
                        <p className="tanggal-berita text-end masa-jabatan ">
                          Last Updated: 10-03-2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="col-lg-8 col-md-12 col-12 mb-3 mx-auto overflow">
                <div className="card mb-3 col-lg-12 card-berita overflow-hidden">
                  <div className="row g-0">
                    <div className="col-md-5 col-4 my-auto mx-auto">
                      <img
                        src="assets/images/pakaian1.jpg"
                        height={120}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7 col-8">
                      <div className="card-body">
                        <p className="judul-berita text-start">
                          Tata Cara Berpakaian Lab
                        </p>
                        <p className="rangkum-berita nama-struktur text-start desc-berita">
                          Berikut ini adalah Tata cara berpakaian yang baik dan
                          benar di Laboratorium SI/MI.
                        </p>

                        <ModalBerita2 />
                        <p className="tanggal-berita text-end  masa-jabatan">
                          Last updated 1 months ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Berita;
