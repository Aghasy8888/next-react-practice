import { YogaProgress } from '@/components';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <YogaProgress completedClasses={2} totalClasses={20} />
    </div>
  );
};

export default App;
