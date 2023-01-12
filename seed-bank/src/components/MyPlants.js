import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MyPlants = ({ profileData }) => {
  return (
    <div className=" flex flex-row grow">
      {/* The profile card */}
      <div class="flex flex-col  ... border-2 grow ">
        <h2>Profile Information</h2>
        <div class="shrink w-2/12  px-4">
          <img
            alt="seeds by time logo"
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
            src="https://res.cloudinary.com/de2i2agjs/image/upload/v1668538514/Seeds_By_Time-1_3_nsf525.png"
          ></img>
        </div>
        <div class="flex-none w-64 h-14 ...">Username: {profileData.email}</div>
        <div class="flex-none h-14 ...">Hardiness Zone: {profileData.zone}</div>
        <div class="flex-none w-14 h-14 ...">
          Member Since: {profileData.created_at}
        </div>
      </div>
      {/* Plant information card */}
      <div class="flex flex-col ... border-2 grow">
        <h2>Plant Data</h2>
        <div class="flex-none w-14 h-14 ...">01</div>
        <div class="shrink w-64 h-14 ...">02</div>
        <div class="flex-none w-14 h-14 ...">03</div>
        <div class="flex-none w-14 h-14 ...">03</div>
        <div class="flex-none w-14 h-14 ...">03</div>
        <div class="flex-none w-14 h-14 ...">03</div>
        <div class="flex-none w-14 h-14 ...">03</div>
        <div class="flex-none w-14 h-14 ...">03</div>
        <div class="flex-none w-14 h-14 ...">03</div>
        <div class="flex-none w-14 h-14 ...">03</div>
      </div>
    </div>
  );
};

export default MyPlants;
