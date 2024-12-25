"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function ScheduleModal({ isOpen, onClose }) {
    const [selectedDay, setSelectedDay] = useState("Mon");
    const [selectedDate, setSelectedDate] = useState(""); // Initialize as an empty string
    const [selectedTime, setSelectedTime] = useState(""); // Initialize as an empty string
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Generate time intervals (1-hour intervals starting from 12 AM)
    const timeIntervals = Array.from({ length: 24 }, (_, i) => {
        const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
        const period = i >= 12 ? "PM" : "AM";
        return `${hour}:00 ${period}`;
    });

    // Ensure date and time values are only set after the component mounts
    useEffect(() => {
        const today = new Date();
        setSelectedDate(format(today, "yyyy-MM-dd")); // Set default date to today
        setSelectedTime("12:00 AM"); // Default time
    }, []);

    if (!isOpen) return null; // Prevent rendering if modal is not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {/* Modal Container */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Schedule Detail</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>

                {/* Form Content */}
                <form>
                    {/* Test Suite */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Test Suite</label>
                        <input
                            type="text"
                            value="Demo Suite"
                            disabled
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100 text-gray-500"
                        />
                    </div>

                    {/* Start Date and Start Time (Row) */}
                    <div className="mb-4 flex space-x-4">
                        {/* Start Date */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                min={format(new Date(), "yyyy-MM-dd")} // Prevent selecting past dates
                            />
                        </div>

                        {/* Start Time */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                            <select
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                {timeIntervals.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Run Weekly on Every */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Run Weekly on Every</label>
                        <div className="grid grid-cols-7 gap-2">
                            {days.map((day) => (
                                <button
                                    key={day}
                                    type="button"
                                    onClick={() => setSelectedDay(day)}
                                    className={`py-2 px-4 rounded-md border ${selectedDay === day
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                                        }`}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 border border-red-300"
                        >
                            Cancel Schedule
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
