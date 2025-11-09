export interface Recipe {
  recipe_name: string;
  diet_type: string;
  cuisine_type: string;
  protein: number;
  carbs: number;
  fat: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
}

export interface NutritionalInsights {
  summary: {
    total_recipes: number;
    total_diet_types: number;
    total_cuisine_types: number;
    most_common_diet: string;
    most_common_cuisine: string;
  };
  macronutrients: Record<string, {
    Protein: number;
    Carbs: number;
    Fat: number;
  }>;
  nutrient_ranges: Record<string, {
    min: number;
    max: number;
    average: number;
    median: number;
  }>;
  diet_distribution: ChartData;
}

export interface ScatterDataPoint {
  x: number;
  y: number;
  diet_type: string;
  recipe_name: string;
  color: string;
}

export interface ScatterPlotData {
  chart_type: string;
  title: string;
  x_axis: string;
  y_axis: string;
  data: ScatterDataPoint[];
  diet_types: string[];
  colors: Record<string, string>;
}

export interface HeatmapCell {
  x: number;
  y: number;
  value: number;
  row_label: string;
  col_label: string;
}

export interface HeatmapData {
  chart_type: string;
  title: string;
  labels: string[];
  data: HeatmapCell[];
  min_value: number;
  max_value: number;
}

export interface PaginationInfo {
  current_page: number;
  total_pages: number;
  total_recipes: number;
  page_size: number;
  has_next: boolean;
  has_previous: boolean;
}

export interface RecipesResponse {
  recipes: Recipe[];
  pagination: PaginationInfo;
  filters: {
    diet_type: string;
    search_term: string;
  };
}

export interface ClusterInfo {
  cluster_id: number;
  size: number;
  avg_protein: number;
  avg_carbs: number;
  avg_fat: number;
  common_diet_types: Record<string, number>;
  sample_recipes: string[];
}

export interface ClustersResponse {
  clusters: Record<string, ClusterInfo>;
  total_clusters: number;
  features_used: string[];
  clustering_method: string;
}

export interface DietTypesResponse {
  diet_types: string[];
  diet_counts: Record<string, number>;
  total_types: number;
}