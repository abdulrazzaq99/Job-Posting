import PropTypes from "prop-types";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobCard = ({ index, job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [originalDescription] = useState(job.description);

  const description = showFullDescription
    ? originalDescription
    : `${originalDescription.substring(0, 90)}...`;
  return (
    <>
      <div key={index} className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{description}</div>

          <button
            onClick={() =>
              setShowFullDescription((previousState) => !previousState)
            }
            className="text-indigo-500 hover:text-indigo-600"
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>

          <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className="inline text-lg" />
              {job.location}
            </div>
            <a
              href={`/job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

JobCard.propTypes = {
  index: PropTypes.number.isRequired,
  job: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default JobCard;
