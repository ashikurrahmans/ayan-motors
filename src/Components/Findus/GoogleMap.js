import React from "react";

const GoogleMap = () => {
  return (
    <>
      <section className="h-[500px] bg-cover ">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.609216696672!2d90.41020561442866!3d23.868006584531482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5b50c58d53d%3A0x39854d12cf5e2470!2sAyaan%20motors!5e0!3m2!1sen!2sbd!4v1660600847929!5m2!1sen!2sbd"
        ></iframe>
      </section>
    </>
  );
};

export default GoogleMap;
