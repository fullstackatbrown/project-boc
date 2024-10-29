interface Day {
    day: String,
    hours: String[],
    info?: String
}

let dates: Day[] = [
    {day: "Monday", hours: ["2pm - 4pm"], info: "(Gas Available \n 3pm - 4pm)"},
    {day: "Tuesday", hours: ["11am - 4pm", "5pm - 6pm"]},
    {day: "Wednesday", hours: ["7:30pm - 8:30pm"]},
    {day: "Thursday", hours: ["4:30pm - 5:30pm"], info: "(Gas Available)"},
    {day: "Friday", hours: ["4pm - 5pm"], info: "(Gas Available)"}
];

export default function Schedule() {
    return <>
        <table className="table-fixed w-full bg-green-200 border-4 border-green-800 max-w-5xl text-2xl font-bold ">
            <tbody>
                
                <tr className="border border-gray-300 px-4 py-2">
                    {dates.map((day) => <td className="border-4 border-green-800 px-4 py-2 align-text-top">{dayToCol(day)}</td>)}
                </tr>
                
            </tbody>
        </table>
    </>
}

function dayToCol(day: Day) {
    return (
        <div className="whitespace-pre-line vertical-align: text-top;">
            <p className="mb-12">{day.day}</p>
            {day.hours.map((hour) => <p className="mb-3">{hour}</p>)}
            <p className="mb-6">{day.info ? day.info : ""}</p>
        </div>
    )
}