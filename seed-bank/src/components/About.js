import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col  pl-12 pr-12 pt-10">
        <h1 className="text-2xl pb-3 underline ">Seeds by Time</h1>
        <p className="ml-5">
          When you are new to gardening it can be hard to figure out what you
          want to plant and and so I wanted to make an app that you can use to
          make that process a little easier. Just enter your zipcode and a list
          of plants you can grow from seed along with the average days to
          maturity and some helpful links to articles about each plant if you
          are looking for more information. This app was made in two and half
          days so there are likely a number of bugs! My contact information is
          at the bottom of the site along with a link to the github repository,
          so if you find any bugs or planting errors or you have some
          suggestions for improvements please let me know.
        </p>
        <h2 className="text-xl pb-3 pt-3 underline">
          Seeds by Time 2.0 -- What is coming
        </h2>
        <ul className="list-disc ml-5">
          <div className="text-black underline">More Zones</div>
          <li>
            Right now my database only has information on zones 3-8, and I would
            like to account for all zones within the lower 48 states of the US.
            I have not found any reliable data or APIs for this so if anyone
            knows of anything please let me know.
          </li>
          <div className="text-black underline">Track plantings</div>
          <li>
            The other main feature of the site which will be added soon is
            planting seeds and keeping track of them in the app. You will be
            able to click on a button and add a plant to your "plantings". In
            your user dashboard will be some helpful tips for caring for that
            particular plants, and the site will send you notifications to
            remind you to water and an estimated harvest time.
          </li>
          <li className="text-black">A mobile app of this site for Android.</li>
        </ul>
      </div>
      <div className="flex flex-col  pl-12 pr-12 pt-10">
        <h2 className="text-xl pb-3 pt-3 ">Contact</h2>
        <p className="ml-5">Shoot me an email: max.philip1@gmail.com</p>
        <p className="ml-5">
          Checkout the repo on{" "}
          <a href="https://github.com/mphilip9" className="text-blue-500 ">
            github
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
