import { useState } from "react";
import "./App.css";
import { useGetCourseByIdQuery, useGetCoursesByFilterQuery } from "./app/apis/coursesApi";

function App() {
  const { data, error, isLoading } = useGetCoursesByFilterQuery({page:1,size:10,filter:"nestjs"});

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.results.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <img src={course.image_480x270} alt={course.title} />
          </div>
        ))
      ) : null}
    </div>
  );
}

export default App;
