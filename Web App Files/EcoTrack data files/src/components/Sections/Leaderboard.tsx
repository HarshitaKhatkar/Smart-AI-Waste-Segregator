import React from 'react';
import { Trophy, Medal } from 'lucide-react';

const leaderboardData = [
  { id: 1, name: 'John Doe', points: 1250, recyclables: 45 },
  { id: 2, name: 'Jane Smith', points: 980, recyclables: 38 },
  { id: 3, name: 'Mike Johnson', points: 850, recyclables: 32 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-indigo-900 font-poppins">Top Recyclers</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        {leaderboardData.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border-b last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                {index === 0 ? (
                  <Medal className="w-5 h-5 text-yellow-500" />
                ) : (
                  <span className="font-semibold text-indigo-600">{index + 1}</span>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.recyclables} items recycled</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-indigo-600">{user.points}</span>
              <p className="text-sm text-gray-500">points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;