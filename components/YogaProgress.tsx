interface YogaProgressProps {
  completedClasses: number;
  totalClasses: number;
}

const YogaProgress: React.FC<YogaProgressProps> = ({ completedClasses, totalClasses }) => {
  const percentage = (completedClasses / totalClasses) * 100;

  return (
    <div className="p-4 max-w-md mx-auto">
      <p className="text-gray-700 font-medium mb-2">
        Book and attend {totalClasses} yoga classes within a month.
      </p>
      <div className="text-gray-500 mb-2 text-right">
        {completedClasses}/{totalClasses}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default YogaProgress;
