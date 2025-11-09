import { Recipe } from '../../types';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export default function RecipeCard({ recipe, className = '' }: RecipeCardProps) {
  return (
    <div className={`recipe-card ${className}`}>
      <h4 className="font-semibold text-sm mb-1 text-gray-900">
        {recipe.recipe_name}
      </h4>
      <p className="text-xs text-gray-600 mb-2">
        {recipe.diet_type} | {recipe.cuisine_type}
      </p>
      <div className="flex flex-wrap gap-1">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
          P: {recipe.protein}g
        </span>
        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
          C: {recipe.carbs}g
        </span>
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
          F: {recipe.fat}g
        </span>
      </div>
      
      {/* Nutritional summary */}
      <div className="mt-2 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Total: {Math.round(recipe.protein + recipe.carbs + recipe.fat)}g
        </div>
      </div>
    </div>
  );
}