import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DashboardFilters({onFilterChange}) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleApply = () => {
        onFilterChange({startDate, endDate});
    };

    return (
        <div className='flex flex-col sm:flex-row gap-4 items-center mb-4'>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <button
                onClick={handleApply}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
                Apply
            </button>
        </div>

    );
}
export default DashboardFilters;