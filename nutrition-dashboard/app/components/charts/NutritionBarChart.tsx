import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartData {
  dietType: string;
  protein: number;
  carbs: number;
  fat: number;
}

interface NutritionBarChartProps {
  data: BarChartData[];
  title?: string;
  height?: number;
}

export default function NutritionBarChart({ data, title = "Macronutrient Analysis", height = 300 }: NutritionBarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-48 flex items-center justify-center text-gray-500">
        No data available
      </div>
    );
  }

  return (
    <div className="w-full">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="dietType" 
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis fontSize={12} />
            <Tooltip 
              formatter={(value: any, name: string) => [value + 'g', name]}
              labelStyle={{ color: '#374151' }}
            />
            <Bar dataKey="protein" fill="#8884d8" name="Protein" />
            <Bar dataKey="carbs" fill="#82ca9d" name="Carbs" />
            <Bar dataKey="fat" fill="#ffc658" name="Fat" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}