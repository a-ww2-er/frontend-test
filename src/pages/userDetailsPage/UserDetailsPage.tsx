import Button from "../../components/Login/atoms/Button";
import BackButton from "../../components/UserDetails/atoms/BackButton";
import UserDetails from "../../components/UserDetails/molecules/UserDetails";
import UserPanel from "../../components/UserDetails/molecules/UserPanel";
import "../../styles/detailspage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "./../../components/UserDetails/atoms/Loading";
import { DetailsContext } from "../../context/globalContext";

export type DetailsProps = {
  data: any;
};

const UserDetailsPage = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/9`
        );
        setData(result.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };
  
    fetchData()
    console.log(id)

  }, []);
  return (
    <>
      {/* {isLoading ? (
        <tr>
          <td>
            <Loading />
          </td>
        </tr>
      ) : ( */}
        <div className="details_container">
          <BackButton />
          <div className="details_container_title">
            <h1>User Details</h1>{" "}
            <span>
              <Button
                onClick={() => console.log("I")}
                text="Blacklist User"
                className="blacklist"
              />
              <Button
                onClick={() => console.log("I")}
                text="Activate User"
                className="activate"
              />
            </span>
          </div>
          {/* <DetailsContext.Provider value={data}> */}
            <UserPanel />
            <UserDetails />
          {/* </DetailsContext.Provider> */}
        </div>
  
    </>
  );
};

export default UserDetailsPage;


// const debouncedFetchData = debounce(fetchData, 500);
// debouncedFetchData();



  // const debounce = <T extends (...args: any[]) => any>(
  //   fn: T,
  //   delay: number
  // ) => {
  //   let timeoutId: ReturnType<typeof setTimeout> | null;

  //   return (...args: Parameters<T>): Promise<ReturnType<T>> =>
  //     new Promise((resolve) => {
  //       if (timeoutId) {
  //         clearTimeout(timeoutId);
  //       }

  //       timeoutId = setTimeout(() => {
  //         timeoutId = null;
  //         resolve(fn(...args));
  //       }, delay);
  //     });
  // };
