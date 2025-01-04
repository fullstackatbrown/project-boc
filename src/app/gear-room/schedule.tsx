type Day = {
  day: string;
  hours: string[];
  info?: string;
};

let dates: Day[] = [
  {
    day: "Monday",
    hours: ["2pm - 4pm"],
    info: "Gas Available (3pm - 4pm)",
  },
  { day: "Tuesday", hours: ["11am - 4pm", "5pm - 6pm"] },
  { day: "Wednesday", hours: ["7:30pm - 8:30pm"] },
  { day: "Thursday", hours: ["4:30pm - 5:30pm"], info: "Gas Available" },
  { day: "Friday", hours: ["4pm - 5pm"], info: "Gas Available" },
];

function Td(props: { children: React.ReactNode }) {
  return <td className="p-[0.24em]">{props.children}</td>;
}

export default function Schedule() {
  return (
    <div className="flex justify-center">
      <table className="table-fixed w-full max-w-5xl text-2xl">
        <tbody className="divide-y divide-black">
          <tr className="divide-x divide-black px-4 py-2 text-center font-bold">
            <Td>DAY</Td>
            <Td>HOURS</Td>
            <Td>INFO</Td>
          </tr>
          {dates.map((day, index) => (
            <DayRow key={day.day} day={day} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DayRow({ day }: { day: Day }) {
  return (
    <tr className="divide-x divide-black px-4 py-2 text-center">
      <Td>{day.day}</Td>
      <Td>
        {day.hours.map((hour, index) => (
          <div key={hour}>{hour}</div>
        ))}
      </Td>
      <Td>{day.info ? day.info : ""}</Td>
    </tr>
  );
}
