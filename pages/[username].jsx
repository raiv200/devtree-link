import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import { supabase } from "../utils/supabaseClient";

const usernameClasses = {
  container: "min-h-screen  bg-gray-100 dark:bg-gray-900 pt-8",
  container__p:" text-center mx-auto mt-40 font-ibm text-4xl font-semibold text-gray-900 dark:text-gray-100",
  box: "flex flex-col items-center w-[330px] md:w-[800px] md:max-w-4xl space-y-8 mx-auto pt-12",
  box__p1:"text-center font-ibm text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100",
  box__p2:"cursor-pointer text-gray-800 dark:text-gray-100 text-lg font-medium font-ibm px-2 py-1 opacity-80  rounded-lg hover:text-gray-50 hover:bg-gray-800/80 dark:hover:bg-gray-50/30 transition duration-300 ease-in",
};

const username = () => {
  const router = useRouter();

  const [results, setResults] = useState([]);
  const [newUser, setNewUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = router.query;

  useEffect(() => {
    setIsLoading(true);

    const fetchUsers = async () => {
      const { data } = await supabase
        .from("devusers")
        .select("*")
        .eq("userName", username);

      setResults(data);

      data.map((user) => setNewUser(user.userName));
      console.log("Data fetched :", data);
    };

    fetchUsers();
    setIsLoading(false);
  }, [username, newUser]);

  console.log("Is this what I want", newUser);

  return (
    <div className={usernameClasses.container}>
      {isLoading ? (
        <p className={usernameClasses.container__p}>Loading....</p>
      ) : (
        <>
          {newUser === username ? (
            <UserProfile username={username} data={results} />
          ) : (
            <div className={usernameClasses.box}>
              <p className={usernameClasses.box__p1}>
                User has not created his profile yet.
              </p>
              <p className={usernameClasses.box__p1}>Or</p>
              <p className={usernameClasses.box__p1}>
                May not have added any links yet, go to links tab and add your
                social/dev profiles links.
              </p>
              <Link href="/">
                <p className={usernameClasses.box__p2}>Go to Devtree.link</p>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default username;
