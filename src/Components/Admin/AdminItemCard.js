import React from "react";
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminItemCard({ data }) {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={`http://localhost:5000/uploads/${data.coverImage}`} alt="t shirt 1" />

      <div className="background-filter"></div>
      <div className="title-container">{data.name}</div>

      <div className="slide-up-container">
        <div className="price-quantity">
          <div className="price">{data.price}</div>
          <div onClick={
            () => {
              axios
                .get("http://localhost:5000/delItm?id=" + data.itemId)
                .then((res) => {

                })
                .catch((err) => {
                  console.error(err);
                });

                window.location.reload();
            }

          }><DeleteIcon sx={{ color: "red" }} /></div>
        </div>

      </div>
    </Container>
  );
}

export default AdminItemCard;

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
  }

  .background-filter {
    width: 100%;
    height: 100%;
    background-color: var(--dark-gray);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .title-container {
    width: 100%;
    font-size: var(--font-size-sub-heading);
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--light-gray);
    font-weight: var(--font-w-600);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-up-container {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: -100%;
    left: 0;
    background-color: var(--dark-gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    transition: all 0.5s ease;
    cursor: default;

    .price-quantity {
      padding-top: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price,
      .quantity {
        color: var(--light-gray);
        cursor: default;
      }
    }

    .delivery {
      margin-bottom: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        background-color: var(--light-gray);
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          background-color: var(--light-gray-alt);
        }
      }
    }
  }

  &:hover {
    .slide-up-container {
      bottom: 0;
    }
  }
`;
