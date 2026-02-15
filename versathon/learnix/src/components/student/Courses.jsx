function Courses() {
  const courses = ["Math", "Physics", "AI", "Data Structures"];

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course}</h3>
          <button>Start Course</button>
        </div>
      ))}
    </div>
  );
}

export default Courses;
