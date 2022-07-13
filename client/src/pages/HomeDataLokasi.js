import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import React, { useState } from "react";
import "../index.css";
import { Navbar, Container, Button } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Card, Divider } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

import jawatimur from "../assets/jawatimur.png";
import jawatengah from "../assets/jawatengah.png";
import jawabarat from "../assets/jawabarat.png";

import AddProvinsi from "../components/modal/AddProvinsi";
import AddKabupaten from "../components/modal/AddKabupaten";

export default function Home() {
  //FOR PROVINSI MODAL
  const [showProvinsi, setShowProvinsi] = useState(false);
  const handleCloseProvinsi = () => setShowProvinsi(false);
  const handleShowProvinsi = () => setShowProvinsi(true);
  //FOR KABUPATEN MODAL
  const [showKabupaten, setShowKabupaten] = useState(false);
  const handleCloseKabupaten = () => setShowKabupaten(false);
  const handleShowKabupaten = () => setShowKabupaten(true);
  const { Meta } = Card;
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
              1st menu item
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
              2nd menu item
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );
  return (
    <>
      <div className="container-fluid">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <div className="text-in-navbar">Provinsi & Kabupaten</div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Button
                  variant="outline-secondary"
                  className="login-btn "
                  onClick={() => {
                    handleShowProvinsi();
                  }}
                >
                  Tambah Provinsi
                </Button>
                <Button
                  className="register-btn ms-5"
                  onClick={() => {
                    handleShowKabupaten();
                  }}
                >
                  Tambah Kabupaten
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="content-home-page container ">
          <Col>
            <div>
              <Dropdown
                className="bg-primary text-white p-2 drop-down-home"
                overlay={menu}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Choose Here
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="cards-on-home" style={{ minWidth: "90vw" }}>
              <div className="card-on-home me-5">
                <Card
                  hoverable
                  style={{
                    width: 250,
                    borderRadius: "8px",
                  }}
                  cover={
                    <img className="img-logo" alt="example" src={jawatimur} />
                  }
                >
                  <Divider style={{ marginTop: "0px", marginBottom: "2px" }} />
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        marginTop: "0px",
                      }}
                    >
                      Jawa Timur
                    </div>
                    <div>10 November 1945</div>
                    <Button style={{ width: "150px", marginTop: "5px" }}>
                      Detail
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="card-on-home">
                <Card
                  hoverable
                  style={{
                    width: 250,
                    borderRadius: "8px",
                  }}
                  cover={
                    <img className="img-logo" alt="example" src={jawatengah} />
                  }
                >
                  <Divider style={{ marginTop: "0px", marginBottom: "2px" }} />
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        marginTop: "0px",
                      }}
                    >
                      Jawa Tengah
                    </div>
                    <div>19 Januari 1850</div>
                    <Button style={{ width: "150px", marginTop: "5px" }}>
                      Detail
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
        <AddProvinsi
          showProvinsi={showProvinsi}
          handleCloseProvinsi={handleCloseProvinsi}
        />
        <AddKabupaten
          showKabupaten={showKabupaten}
          handleCloseKabupaten={handleCloseKabupaten}
        />
      </div>
    </>
  );
}
