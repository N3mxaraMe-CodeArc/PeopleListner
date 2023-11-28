import PropTypes from 'prop-types';

const ErrorMessage = ({ errors }) => {
   return (
      <div>
         {errors.map((error, index) => (
        <div key={index} className="alert alert-danger" role="alert">
          <h2 className="text-center">Error</h2>
          <p>{error}</p>
        </div>
      ))}
      </div>
   )
}

ErrorMessage.propTypes = {
   errors: PropTypes.array.isRequired,
}

export default ErrorMessage
