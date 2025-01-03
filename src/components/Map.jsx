const Map = () => {
  return (
    <div className="map-responsive">
      <iframe
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d642.6605299215523!2d-74.10568909972368!3d40.574983502631355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24eb4be9c3b3f%3A0xd61b0f8c28296190!2sDiscount%20King!5e0!3m2!1sen!2sus!4v1735082631504!5m2!1sen!2sus"
        }
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 10 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Google Maps"
      ></iframe>
    </div>
  );
};
export default Map;
