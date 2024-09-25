import PropTypes from "prop-types"; // Import PropTypes
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

// Validasi props menggunakan PropTypes
Generating.propTypes = {
  className: PropTypes.string, // Memastikan className adalah string
};

export default Generating;
