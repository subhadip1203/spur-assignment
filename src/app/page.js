"use client";

import React, { useState } from "react";
import ScheduleModal from "@/app/components/ScheduleModal";

export default function DashboardCalendar() {
    const events = [
        { title: "Demo Suite", time: "11:00 AM", day: 1 }, // Monday
        { title: "Authentication", time: "8:00 AM", day: 3 }, // Wednesday
    ];

    const hours = Array.from({ length: 24 }, (_, i) => `${i === 0 ? 12 : i > 12 ? i - 12 : i}:00 ${i >= 12 ? "PM" : "AM"}`);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Scheduled Suites</h1>
                <div className="flex items-center space-x-4">
                    {/* Schedule Test Button */}
                    <button onClick={openModal} className="bg-blue-600 text-white flex items-center px-4 py-2 rounded-md hover:bg-blue-700 shadow-md">
                        <span className="mr-2">+</span> Schedule Test
                    </button>

                    {/* Modal Component */}
                    <ScheduleModal isOpen={isModalOpen} onClose={closeModal} />


                    {/* Week Navigation */}
                    <div className="flex items-center space-x-2">
                        <button className="bg-gray-200 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-300 shadow-sm">
                            &lt;
                        </button>
                        <span className="text-lg font-medium text-gray-700">Week of 10/09/24</span>
                        <button className="bg-gray-200 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-300 shadow-sm">
                            &gt;
                        </button>
                    </div>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-8 gap-px bg-gray-300 border-t border-gray-300 rounded-lg overflow-hidden">
                {/* Column Headers */}
                <div className="bg-gray-100"></div>
                {days.map((day, index) => (
                    <div
                        key={`day-${index}`}
                        className="bg-gray-100 text-center font-semibold text-gray-700 py-2 border-b border-gray-300"
                    >
                        {day}
                    </div>
                ))}

                {/* Time and Calendar Rows */}
                {hours.map((hour, rowIndex) => (
                    <React.Fragment key={`hour-row-${rowIndex}`}>
                        {/* Hour Column */}
                        <div
                            key={`hour-${rowIndex}`}
                            className="bg-gray-100 text-right pr-2 font-medium text-gray-600 py-4 border-r border-gray-300"
                        >
                            {hour}
                        </div>
                        {days.map((_, colIndex) => (
                            <div
                                key={`cell-${rowIndex}-${colIndex}`}
                                className="bg-white h-20 relative border-r border-gray-300"
                            >
                                {events.map(
                                    (event, i) =>
                                        event.time === hour && event.day === colIndex && (
                                            <div
                                                key={`event-${i}-${rowIndex}-${colIndex}`}
                                                className="absolute top-2 left-2 bg-blue-50 border border-blue-400 text-blue-600 text-sm font-medium px-3 py-1 rounded-md shadow"
                                            >
                                                {event.title}
                                                <br />
                                                <span className="text-xs">{event.time}</span>
                                            </div>
                                        )
                                )}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
