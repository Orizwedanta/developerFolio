import React, {lazy, Suspense} from "react";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  // Membuat tiruan data objek kosong 'prof' agar GithubProfileCard tidak eror
  const dummyProf = {
    hireable: "No"
  };

  return (
    <Suspense fallback={renderLoader()}>
      <GithubProfileCard prof={dummyProf} />
    </Suspense>
  );
}
