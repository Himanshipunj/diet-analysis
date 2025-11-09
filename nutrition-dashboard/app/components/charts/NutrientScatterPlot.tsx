import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ScatterPointData {
  x: number;
  y: number;
  dietType: string;
  recipeName: string;
}

interface NutrientScatterPlotProps {
  data: ScatterPointData[];
  xLabel?: string;
  yLabel?: string;
  title?: string;
  height?: number;
}

export default function NutrientScatterPlot({ 
  data, 
  xLabel = "X Nutrient", 
  yLabel = "Y Nutrient", 
  title = "Nutrient Relationship",
  height = 300 
}: NutrientScatterPlotProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-48 flex items-center justify-center text-gray-500">
        No data available
      </div>
    );
  }

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow-lg">
          <p className="text-sm font-medium">{data.recipeName}</p>
          <p className="text-xs text-gray-600">{data.dietType}</p>
          <p className="text-xs">{`${xLabel}: ${data.x}g`}</p>
          <p className="text-xs">{`${yLabel}: ${data.y}g`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="x" 
              type="number" 
              name={xLabel}
              fontSize={12}
            />
            <YAxis 
              dataKey="y" 
              type="number" 
              name={yLabel}
              fontSize={12}
            />
            <Tooltip content={customTooltip} />
            <Scatter dataKey="y" fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}