import React from 'react';
import { Trophy, Clock } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: 'Zero Waste Week',
    description: 'Reduce your waste production to zero for a week',
    points: 500,
    daysLeft: 5
  },
  {
    id: 2,
    title: 'Plastic Free Challenge',
    description: 'Avoid single-use plastics for 3 days',
    points: 300,
    daysLeft: 2
  }
];

const Challenges: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-indigo-900 font-poppins">Sustainability Challenges</h2>
      </div>

      <div className="grid gap-6">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                {challenge.points} pts
              </span>
            </div>
            <p className="text-gray-600 mb-4">{challenge.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {challenge.daysLeft} days left
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;