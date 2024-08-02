import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  // console.log(id);
  // // we can use searchparams to use query string of the data tot get state of this ,in any component.
  // // this is important taht,we were now able to pass data into all kinds of different components without having to store it in any new  peice of state like useState hook and this is power of reactrouter hook.
  // const [serachParams, setSearchParams] = useSearchParams();
  // const lat = serachParams.get("lat");
  // const lng = serachParams.get("lng");
  // // console.log(id);

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    // get city is a function and when i use in dependency array ,cause this useEffect shuld be infinite loops  because i know function and object will re-created and cause this useEffect work on infinite loops , to prevent this we mustly use useCallBack for getCity function in CitiesContext to prevent this problem
    [id, getCity]
  );

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    // <>
    //   <h1>City {id}</h1>
    //   <h3>
    //     position:{lat}:{lng}
    //   </h3>
    // </>
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div className={styles.backBtn}>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
