'use client'
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import SidebarComponent from '@/component/sidebar/teacherSidebar';

// Types for our data structures
interface AttendanceRecord {
  Timestamp: string;
  Latitude: number;
  Longitude: number;
  Address: string;
}

const TeacherAttendanceTracker: React.FC = () => {
  // State hooks
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [isAttendanceRunning, setIsAttendanceRunning] = useState(false);

  // Geocoding API URL
  const geocodingApiUrl = "https://nominatim.openstreetmap.org/reverse?format=jsonv2";

  // Fetch address from coordinates
  const fetchAddress = async (lat: number, lon: number): Promise<string> => {
    try {
      const response = await fetch(`${geocodingApiUrl}&lat=${lat}&lon=${lon}`);
      const data = await response.json();
      return data.display_name || "Address not found";
    } catch (error) {
      console.error("Error fetching address:", error instanceof Error ? error.message : 'Unknown error');
      return "Address not found";
    }
  };

  // Start attendance tracking
  const startAttendance = () => {
    if (navigator.geolocation) {
      setIsAttendanceRunning(true);
      alert("Starting attendance...");

      const intervalId = setInterval(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const timestamp = new Date().toLocaleString();
          const address = await fetchAddress(latitude, longitude);
          
          const newRecord: AttendanceRecord = {
            Timestamp: timestamp,
            Latitude: latitude,
            Longitude: longitude,
            Address: address
          };

          setAttendanceData(prevData => [...prevData, newRecord]);
        }, (error) => {
          console.error("Error fetching geolocation:", error.message);
          alert("Failed to fetch geolocation.");
        });
      }, 5000);

      // Store interval ID to allow stopping later
      (window as any).attendanceInterval = intervalId;
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Stop attendance tracking
  const stopAttendance = () => {
    clearInterval((window as any).attendanceInterval);
    setIsAttendanceRunning(false);
    alert("Attendance recording stopped.");
  };

  // Export attendance data
  const exportAttendanceData = () => {
    if (attendanceData.length === 0) {
      alert("No attendance data to export.");
      return;
    }

    alert("Exporting data...");
    const completeData = attendanceData;

    const worksheet = XLSX.utils.json_to_sheet(completeData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");
    XLSX.writeFile(workbook, "TeacherAttendance.xlsx");
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <SidebarComponent />
      <div className="flex-1 p-10 overflow-y-auto dark:bg-neutral-800">
        <h2 className="text-2xl font-semibold text-white mb-8">
          Teacher Attendance Tracker
        </h2>

        <div className="bg-gray-700 shadow-md rounded-lg p-6 mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <button 
              onClick={startAttendance}
              disabled={isAttendanceRunning}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors 
                         disabled:bg-green-300 disabled:cursor-not-allowed"
            >
              Start Attendance
            </button>
            <button 
              onClick={stopAttendance}
              disabled={!isAttendanceRunning}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors 
                         disabled:bg-red-300 disabled:cursor-not-allowed"
            >
              Stop Attendance
            </button>
            <button 
              onClick={exportAttendanceData}
              disabled={attendanceData.length === 0}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors 
                         disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              Export Data
            </button>
          </div>

          {attendanceData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="border border-gray-600 p-3 text-left text-white">Timestamp</th>
                    <th className="border border-gray-600 p-3 text-left text-white">Latitude</th>
                    <th className="border border-gray-600 p-3 text-left text-white">Longitude</th>
                    <th className="border border-gray-600 p-3 text-left text-white">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record, index) => (
                    <tr key={index} className="hover:bg-gray-600">
                      <td className="border border-gray-600 p-3 text-white">{record.Timestamp}</td>
                      <td className="border border-gray-600 p-3 text-white">{record.Latitude.toFixed(6)}</td>
                      <td className="border border-gray-600 p-3 text-white">{record.Longitude.toFixed(6)}</td>
                      <td className="border border-gray-600 p-3 text-white">{record.Address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-300 py-4">
              No attendance records yet. Start tracking to see data.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendanceTracker;