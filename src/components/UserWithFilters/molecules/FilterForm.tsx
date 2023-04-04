import React from "react";
import Input from "../../Login/atoms/Input";
import {SlCalender} from "react-icons/sl"
import Button from "../../Login/atoms/Button";

const FilterForm = () => {
  return (
    <form action="">
      <label htmlFor="">Organization</label>
      <select name="" id="">
        <option value="">Select</option>
      </select>

      <label htmlFor="">Username</label>
      <Input placeholder="User" type="text" value="" />

      <label htmlFor="">Email</label>
      <Input placeholder="Email" type="text" value="" />

      <label>Date</label>
      <span>
        <Input placeholder="Date" type="text" value="" />  <SlCalender/>
      </span>

        <label htmlFor="">Phone Number</label>
        <Input placeholder="Phone Number" type="number" value="" /> 

        <label htmlFor="">Status</label>
        <select name="" id="">
            <option value=""> Select</option>
        </select>

        <span>
            <Button onClick={() => console.log("i")} text="Reset" />
            <Button onClick={() => console.log("i")} text="Filter" />
        </span>
    </form>
  );
};

export default FilterForm;
