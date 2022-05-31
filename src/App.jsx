import { useState } from "react";
import "./App.css";
import { useGetCourseByIdQuery, useGetCoursesByFilterQuery } from "./app/apis/coursesApi";

function App() {
  const { data, error, isLoading } = useGetCoursesByFilterQuery({page:1,size:10,filter:"solid-clean"});

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.results.map((course) => (
          <>
            <h3>{course.title}</h3>
            <img src={course.image_480x270} alt={course.title} />
          </>
        ))
      ) : null}
    </div>
  );
}

export default App;
