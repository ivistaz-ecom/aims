"use client";
import { useState, useRef, useEffect } from "react";

const TableComponent = () => {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const yearOptions = [
    "All Years",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  const data = [
    {
      rank: 1,
      name: "Ms. Nandhana S Nambiar",
      course: "BBA Aviation",
      year: 2024,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Mr. Praveen Kumar V",
      course: "BHM",
      year: 2024,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Stanzin Angmo",
      course: "BHM",
      year: 2024,
      university: "Bangalore University",
    },
    {
      rank: 7,
      name: "Ms. Smruthi S	",
      course: "BBA Aviation",
      year: 2024,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Gayatri Singh",
      course: "BHM",
      year: 2023,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Mr. Mahesh Kumar Sah",
      course: "BHM",
      year: 2023,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Mr. Louis Sudeep",
      course: "BHM",
      year: 2023,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Ms. Vijeya Pavithra R N",
      course: "MFA",
      year: 2022,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Anusha Patil",
      course: "MFA",
      year: 2022,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Ms. Bhoomika Chandraiah",
      course: "BHM",
      year: 2021,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Mr. Sanjeev Choudhary",
      course: "BHM",
      year: 2021,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Ms. Tanya Shree",
      course: "MFA",
      year: 2020,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Keerthana R",
      course: "MFA",
      year: 2020,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Rajalakshmi",
      course: "MSW",
      year: 2020,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Gayathri M",
      course: "MCA",
      year: 2020,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Ms. Sukanya S",
      course: "MSW",
      year: 2020,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Ms. Dorothy",
      course: "MSW",
      year: 2020,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Ms. Vinutha C",
      course: "MFA",
      year: 2020,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Farzana Anzum",
      course: "MCA",
      year: 2019,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Megha B",
      course: "MCA",
      year: 2019,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Mr. Rahul Kumar Gupta",
      course: "MMTM",
      year: 2019,
      university: "Bangalore University",
    },
    {
      rank: 9,
      name: "Ms. Srijana Yadav",
      course: "BBA",
      year: 2019,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Ms. Nethravathi G R",
      course: "MCA",
      year: 2018,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Mr. Abhilash Kaushik",
      course: "MA (English)",
      year: 2018,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Simran Lal",
      course: "BCA",
      year: 2018,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Nikita Dangol",
      course: "MSW",
      year: 2018,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Ms. Gomes Shameen Fiona",
      course: "MTTM",
      year: 2018,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Asmita Thapar",
      course: "MSW",
      year: 2017,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Aditi Bhadra",
      course: "MSW",
      year: 2017,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Anugraha Ramamurthy",
      course: "MBA",
      year: 2017,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Ms. Pragati Katuwal",
      course: "MSW",
      year: 2017,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Mr. Ajmakin David",
      course: "MCA",
      year: 2017,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Lukram Goodyrani",
      course: "MA (English)",
      year: 2016,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Mr. Basanta Sapkota",
      course: "BHM",
      year: 2016,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Mr. Sachin Kamat",
      course: "BHM",
      year: 2016,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Ms. Yukta Mohana Agarwal	",
      course: "BCA",
      year: 2015,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Darshika C",
      course: "MSW",
      year: 2014,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Padmaja I P",
      course: "MA (English)",
      year: 2014,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Ms. Sweety Aggrawal",
      course: "MCA",
      year: 2012,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Namakula Elizabeth Mary",
      course: "MA (English)",
      year: 2012,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Ms. Soumi Dutta",
      course: "MSW",
      year: 2012,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Ms. Lakshmi Raj N G",
      course: "MTA",
      year: 2012,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Mr. Rikdev Bhattacharya",
      course: "MBA",
      year: 2012,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Ms. Amrita Mukherjee",
      course: "MSW",
      year: 2011,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Ms. Usha N Bhat",
      course: "MTA",
      year: 2011,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Ms. Charitra H. G.",
      course: "MA (English)",
      year: 2010,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Snehal Kasat",
      course: "MBA",
      year: 2010,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Mr. Prashanth Shetty",
      course: "MBA",
      year: 2010,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Mr. Smruthi Ranjan Debata",
      course: "MCA",
      year: 2009,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Ms. Hema",
      course: "BCA",
      year: 2009,
      university: "Bangalore University",
    },
    {
      rank: 4,
      name: "Ms. Biva Jahari",
      course: "MTA",
      year: 2008,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Mr. Ramakrishna",
      course: "MTA",
      year: 2008,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Ms. Darshana Chetia",
      course: "MTA",
      year: 2007,
      university: "Bangalore University",
    },
    {
      rank: 1,
      name: "Mr. Kaushik Chatterjee",
      course: "MCA",
      year: 2007,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "	Ms. Manasa G K",
      course: "MBA",
      year: 2007,
      university: "Bangalore University",
    },
    {
      rank: 5,
      name: "Ms. Amita Vinod",
      course: "MSW",
      year: 2007,
      university: "Bangalore University",
    },
    {
      rank: 2,
      name: "Ms. Preethu Rose",
      course: "MCA",
      year: 2006,
      university: "Bangalore University",
    },
  ];

  // 🔎 Apply filters: search + year
  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.course.toLowerCase().includes(search.toLowerCase());

    const matchesYear =
      selectedYear === "All Years" || item.year.toString() === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* Search and Year Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 bg-[#0A1F63] text-white placeholder-white"
        />
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-6 py-2 bg-[#0C2165] text-white font-semibold rounded-lg flex items-center justify-between min-w-[120px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            <span>{selectedYear}</span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {yearOptions.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => handleYearSelect(year)}
                  className={`w-full px-4 py-2 text-left ${
                    selectedYear === year ? "bg-[#0C2165] text-white" : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table Container with max height and scroll */}
      <div className="overflow-x-auto overflow-y-auto max-h-[500px] border rounded-none">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#531675] text-white text-left">
              <th className="p-3 border-r">Rank</th>
              <th className="p-3 border-r">Name</th>
              <th className="p-3 border-r">Course</th>
              <th className="p-3 border-r">Year</th>
              <th className="p-3">University</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr
                  key={index}
                  className="border border-black text-gray-800 text-left hover:bg-gray-50"
                >
                  <td className="p-3 border-r border-black">{row.rank}</td>
                  <td className="p-3 bg-[#e0f9f4] border-r border-black">
                    {row.name}
                  </td>
                  <td className="p-3 border-r border-black">{row.course}</td>
                  <td className="p-3 bg-[#e0f9f4] border-r border-black">
                    {row.year}
                  </td>
                  <td className="p-3">{row.university}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
