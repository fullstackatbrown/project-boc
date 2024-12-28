import React from "react";

const gearList = [
  { item: "Sleeping bag", weeklyRentalFee: 4, price: 100 },
  { item: "Sleeping pad", weeklyRentalFee: 1, price: 20 },
  { item: "2-person tent", weeklyRentalFee: 2, price: 100 },
  { item: "4-person tent", weeklyRentalFee: 4, price: 200 },
  { item: "Headlamp", weeklyRentalFee: 1, price: 15 },
  { item: "Stove", weeklyRentalFee: 3, price: 30 },
  { item: "Gas", weeklyRentalFee: 3, price: 10 },
  { item: "Crash pad", weeklyRentalFee: 2, price: 100 },
  { item: "Backpack", weeklyRentalFee: 4, price: 130 },
  { item: "Bear canister", weeklyRentalFee: "free", price: 60 },
  { item: "Sleeping bag liner", weeklyRentalFee: 1, price: 30 },
  { item: "Snow shoes", weeklyRentalFee: 3, price: 120 },
  { item: "Clothes", weeklyRentalFee: 1, price: 30 },
  { item: "Climbing shoes", weeklyRentalFee: 1, price: 45 },
  { item: "Pot/Pan", weeklyRentalFee: 1, price: 20 },
  { item: "Cooking utensil", weeklyRentalFee: 1, price: 10 },
  { item: "Dry bag", weeklyRentalFee: 1, price: 20 },
  { item: "Trekking poles", weeklyRentalFee: 2, price: 20 },
  { item: "Tarp", weeklyRentalFee: 2, price: 30 },
  { item: "Trowel", weeklyRentalFee: 1, price: 15 },
  { item: "Crazy Creek chair", weeklyRentalFee: 1, price: 20 },
];

const GearTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Weekly Rental Fee</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {gearList.map((gear, index) => (
            <tr key={index}>
              <td>{gear.item}</td>
              <td>{gear.weeklyRentalFee}</td>
              <td>${gear.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GearTable;
