// "use client";
// import Image from "next/image";
// import {
//   RadialBarChart,
//   RadialBar,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Total",
//     count: 30,
//     fill: "white",
//   },
//   {
//     name: "Girls",
//     count: 15,
//     fill: "#FAE27C",
//   },
//   {
//     name: "Boys",
//     count: 15,
//     fill: "#C3EBFA",
//   },
// ];

// const CountChart = () => {
//   return (
//     <div className="bg-white rounded-xl w-full h-full p-4">
//       {/* TITLE */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-lg font-semibold">Students</h1>
//         <Image src="/moreDark.png" alt="" width={20} height={20} />
//       </div>
//       {/* CHART */}
//       <div className="relative w-full h-[75%]">
//         <ResponsiveContainer>
//           <RadialBarChart
//             cx="50%"
//             cy="50%"
//             innerRadius="40%"
//             outerRadius="100%"
//             barSize={32}
//             data={data}
//           >
//             <RadialBar background dataKey="count" />
//           </RadialBarChart>
//         </ResponsiveContainer>
//         <Image
//           src="/maleFemale.png"
//           alt=""
//           width={50}
//           height={50}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         />
//       </div>
//       {/* BOTTOM */}
//       <div className="flex justify-center gap-16">
//         <div className="flex flex-col gap-1">
//           <div className="w-5 h-5 bg-lamaSky rounded-full" />
//           <h1 className="font-bold">15</h1>
//           <h2 className="text-xs text-gray-300">Boys (50%)</h2>
//         </div>
//         <div className="flex flex-col gap-1">
//           <div className="w-5 h-5 bg-lamaYellow rounded-full" />
//           <h1 className="font-bold">15</h1>
//           <h2 className="text-xs text-gray-300">Girls (50%)</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountChart;

"use client";

import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  const data = [
    {
      name: "Total",
      count: boys + girls,
      fill: "white",
    },
    {
      name: "Girls",
      count: girls,
      fill: "#FAE27C",
    },
    {
      name: "Boys",
      count: boys,
      fill: "#C3EBFA",
    },
  ];

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Male and Female"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">{boys}</h1>
          <h2 className="text-xs text-gray-300">Boys ({((boys / (boys + girls)) * 100).toFixed(1)}%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">{girls}</h1>
          <h2 className="text-xs text-gray-300">Girls ({((girls / (boys + girls)) * 100).toFixed(1)}%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
