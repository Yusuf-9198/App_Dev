import React from "react";

// function Card(props) {
//     // console.log("props", props);
//     console.log(props.username);
//     return (
//         <div> hello Card</div>
//     )
// }

// another method:- 

function Card({ username, btntext = "visit me" }) {
    // console.log("props", props);
    console.log(username);


    return (
        <>
            <div className="max-w-xs rounded-md shadow-md bg-black text-white">
                <img
                    src="https://images.pexels.com/photos/12909944/pexels-photo-12909944.jpeg"
                    alt="Card image cap"
                    className="object-cover object-center w-full rounded-t-md h-72"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <p className="text-3xl font-semibold tracking-wide">{username} </p>
                        <p > NIT Student </p>
                    </div>
                    <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-white">
                        {btntext}
                    </button>
                </div>
            </div>


        </>
    )
}
export default Card