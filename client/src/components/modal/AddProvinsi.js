import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  message,
  Upload,
  DatePicker,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Modal } from "react-bootstrap";
import "antd/dist/antd.min.css";
import "../../index.css";
import { InboxOutlined } from "@ant-design/icons";
import { API } from "../../config/api";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange(info) {
    const { status } = info.file;

    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export default function AddProvinsi({ showProvinsi, handleCloseProvinsi }) {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    diresmikan: "",
    pulau: "",
  });

  const { nama, diresmikan, pulau } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      publicDate: e.format("DD-MM-YYYY"),
    });
  };

  // const handleSubmit = useMutation(async (e) => {
  //   try {
  //     e.preventDefault();
  //     console.log(e);
  //     // Configuration Content-type
  //     const config = {
  //       headers: {
  //         "Content-type": "multipart/form-data",
  //       },
  //     };
  //     console.log(form);

  //     // Data body
  //     const formData = new FormData();
  //     formData.append("nama", form.nama);
  //     formData.append("diresmikan", form.diresmikan);
  //     formData.append("pulau", form.pulau);
  //     formData.append("file", form.file[1].originFileObj);

  //     console.log(formData);
  //     // Insert data product to database
  //     const response = await API.post("/provinsi", formData, config);
  //     console.log(response);

  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  // const onFinish = (e) => handleSubmit.mutate(e);
  return (
    <>
      <Modal
        dialogClassName="modal-add"
        show={showProvinsi}
        onHide={handleCloseProvinsi}
        backdrop="static"
        centered
      >
        <Modal.Header className="me-5" style={{ width: "100%" }} closeButton>
          <Modal.Title
            className="mt-3 ms-2 "
            style={{ padding: "20px", fontWeight: "700", fontSize: "40px" }}
          >
            Tambah Data Provinsi
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column align-items-center ">
          <Row className="justify-content-center  ">
            <Col span={20} className="d-flex  justify-content-center pt-4">
              <div>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item>
                    <Input
                      style={{
                        backgroundColor: "rgba(210, 210, 210, 0.25)",
                        border: "2px solid #BCBCBC",
                        color: "#333333",
                        width: "995px",
                        height: "50px",
                        borderRadius: "5px",
                      }}
                      placeholder="Nama Provinsi"
                      name="nama"
                      value={nama}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item>
                    <DatePicker
                      style={{
                        backgroundColor: "rgba(210, 210, 210, 0.25)",
                        border: "2px solid #BCBCBC",
                        color: "#333333",
                        width: "995px",
                        height: "50px",
                        borderRadius: "5px",
                      }}
                      placeholder="Diresmikan Pada"
                      name="diresmikan"
                      value={diresmikan}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      style={{
                        backgroundColor: "rgba(210, 210, 210, 0.25)",
                        border: "2px solid #BCBCBC",
                        color: "#333333",
                        width: "995px",
                        height: "50px",
                        borderRadius: "5px",
                      }}
                      placeholder="Pulau"
                      name="pulau"
                      value={pulau}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Dragger className="mb-3" name="file" onChange={handleChange}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      === Upload Logo Provinsi ===
                    </p>
                  </Dragger>
                </Form>
              </div>
            </Col>
          </Row>

          <Button
            className="mt-5 text-white"
            style={{
              backgroundColor: "#393939",
              width: "350px",
              height: "50px",
              fontWeight: "800",
              border: "2px solid #393939",
            }}
            // onClick={onFinish}
          >
            Tambah Data Provinsi
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
