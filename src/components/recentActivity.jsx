function RecentActivity() {
    return(
        <div className="bg-white p-5 rounded-xl shadow overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 text-left">
                        <th className="px-4 py-2">User</th>
                        <th className="px-4 py-2">Activity</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>                    
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{row.user}</td>
                            <td className="px-4 py-2">{row.activity}</td>
                            <td className="px-4 py-2">{row.date}</td>
                            <td className="px-4 py-2">
                                <span className={`px-2 py-1 rounded-full text-sm ${
                                    row.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                    row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                }`}>
                                    {row.status}

                                </span>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default RecentActivity;