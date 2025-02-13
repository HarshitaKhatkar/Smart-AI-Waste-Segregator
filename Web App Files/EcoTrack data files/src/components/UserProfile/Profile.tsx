import React from 'react';
import { User, Award, Star, Phone, Mail } from 'lucide-react';

const Profile: React.FC = () => {
  const userStats = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    level: 15,
    points: 2500,
    badges: ['Eco Warrior', 'Recycling Expert', 'Zero Waste Champion']
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-t-2xl p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-poppins">{userStats.name}</h2>
              <p className="text-emerald-100">Level {userStats.level} Eco Warrior</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>{userStats.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>{userStats.phone}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Achievements</h3>
              <div className="bg-emerald-50 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-6 h-6 text-emerald-600" />
                  <span className="text-lg font-semibold text-emerald-700">{userStats.points} Points</span>
                </div>
                <div className="w-full bg-emerald-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-emerald-600 mt-1">500 points to next level</p>
              </div>

              <div className="space-y-3">
                {userStats.badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-700">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;