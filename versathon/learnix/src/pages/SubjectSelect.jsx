function SubjectSelect({ setSelectedSubject }) {
  const subjects = [
    "Data Structures",
    "Operating Systems",
    "Computer Networks",
  ];

  return (
    <div className="flex justify-center py-24 px-4">
      
      {/* Bigger Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-14 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center mb-14 text-gray-800">
          Select Subject
        </h1>

        <div className="flex flex-col gap-8 items-center">
          {subjects.map((subject) => (
            <div
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className="cursor-pointer w-96 bg-gray-50 border border-gray-200
                         rounded-2xl p-6 text-center 
                         shadow-md hover:shadow-xl
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {subject}
              </h2>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default SubjectSelect;
