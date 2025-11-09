import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface PieChartData {
  name: string;
  value: number;
  [key: string]: any;
}

interface DietDistributionPieChartProps {
  data: PieChartData[];
  title?: string;
  height?: number;
  colors?: string[];
}

const DEFAULT_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', '#00c49f'];

export default function DietDistributionPieChart({ 
  data, 
  title = "Diet Distribution", 
  height = 300,
  colors = DEFAULT_COLORS
}: DietDistributionPieChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-48 flex items-center justify-center text-gray-500">
        No data available
      </div>
    );
  }

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent > 0.05 ? (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <div className="w-full">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colors[index % colors.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: any, name: string) => [value, name]}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              wrapperStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}