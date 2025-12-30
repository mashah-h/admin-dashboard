import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


function AnalyticsChart({data,title}){
    return(
        <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AnalyticsChart;