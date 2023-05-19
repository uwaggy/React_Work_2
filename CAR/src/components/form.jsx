// import { useState } from "react"

const Form = () => {
    // const CheckboxExample=()=>{
    //     const[isChecked, SetIsChecked] =useState(false);

    //     const HandleCheckboxChange =(event)=>{
    //         SetIsChecked(event.target.checked);
    //     };
    // }

    return (
        <div className="one">
            <form className="form">
                <h1>CAR SELL FORM</h1>
                Car Make:
                <input type="text" placeholder="Car Make" required="required" /><br />
                Car Model
                <input type="text" placeholder="Car Model" required="required" /><br />
                Year:
                <input type="date" /><br />
                Mileage
                <input type="number" placeholder="Mileage" required="required" /><br />
                Condition:<br />
                <input type="radio" value="Female" />Excellent
                <input type="radio" value="Female" />Good
                <input type="radio" value="Female" />Fair
                <input type="radio" value="Male" /> Poor<br />
                Features:<br />
                <input type="checkbox" value="Air Conditional" />Air Conditional<br />
                <input type="checkbox" value="Air Conditional" />Power Steering<br />
                <input type="checkbox" value="Air Conditional" />Power Windows<br /> <input type="checkbox" value="Air Conditional" />ABS<br />
                <input type="checkbox" value="Air Conditional" />Navigation system<br />
                Transmission:
                <select value="Rwanda">
                    <option>SELECT</option>
                    <option>Automatic</option>
                    <option>Manual</option>
                </select><br />
                Price Range:<br />
                <input type="range" id="priceRange" min="0" max="100" /><br />
                Contact Number:<br />
                <input type="number" placeholder="TEL" required="required" /><br />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
export default Form