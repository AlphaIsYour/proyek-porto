import PropTypes from "prop-types";

const CompanyLogos = ({ className, logos = [] }) => {
  // Menambahkan 'logos' sebagai props
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {logos.map(
          (
            logo,
            index // Menggunakan 'logos' di sini
          ) => (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={index}
            >
              <img
                src={logo}
                width={134}
                height={28}
                alt={`Company Logo ${index}`}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

// Validasi props
CompanyLogos.propTypes = {
  className: PropTypes.string, // className harus bertipe string
  logos: PropTypes.array, // Menambahkan validasi untuk logos
};

export default CompanyLogos;
