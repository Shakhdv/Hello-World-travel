import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExcursion } from "../../features/excursionSlice";
import styles from "./Excursions.module.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Comments from "../commentsss/Commentss";
const OneExcursion = () => {
  const dispatch = useDispatch();
  const excursion = useSelector((state) => state.excursion.excursion);

  const { id } = useParams();

  const oneExcursion = excursion?.find((excursion) => excursion._id === id);

  useEffect(() => {
    dispatch(getExcursion());
  }, [dispatch]);

  return (
    <div className={styles.qq}>
      <div className={styles.oneExcursion} key={oneExcursion?._id}>
          <img
            className={styles.oneExcursionImage}
            src={`http://localhost:3077/${oneExcursion?.image}`}
            alt=""
          />
        <div className={styles.excursionText}>
          <h2 className={styles.excursionName}>{oneExcursion?.name}</h2>
          <div className={styles.excursionDescr}>{oneExcursion?.descr}</div>
          <div className={styles.excursionDescr}>{oneExcursion?.moreDescr}</div>
          <div className={styles.excursionPriceAndRating}>
            <div className={styles.excursionPrice}>
              Цена: {oneExcursion?.price} рублей
            </div>
            <div className={styles.excursionRating}>
              {oneExcursion?.rating} ⭐
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default OneExcursion;
