import React from 'react';
import { Calendar, Clock, Truck } from 'lucide-react';

interface CollectionEvent {
  id: string;
  date: string;
  time: string;
  status: 'scheduled' | 'en-route' | 'completed';
  wasteType: string;
}

const CollectionSchedule: React.FC = () => {
  const schedules: CollectionEvent[] = [
    {
      id: '1',
      date: '2024-03-20',
      time: '09:00 AM',
      status: 'scheduled',
      wasteType: 'Recyclable'
    },
    {
      id: '2',
      date: '2024-03-20',
      time: '02:30 PM',
      status: 'en-route',
      wasteType: 'Organic'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-accent-purple';
      case 'en-route': return 'bg-accent-green';
      case 'completed': return 'text-secondary';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-card-bg rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary flex items-center gap-2">
          <Calendar className="w-5 h-5 text-accent-purple" />
          Collection Schedule
        </h2>
      </div>

      <div className="space-y-4">
        {schedules.map((event) => (
          <div 
            key={event.id}
            className="bg-app-bg rounded-lg p-4 border border-border-color"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${getStatusColor(event.status)}`}>
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-text-primary font-medium">{event.wasteType}</p>
                  <p className="text-text-secondary text-sm">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <span className={`px-3 py-1 rounded-full text-sm ${
                event.status === 'en-route' 
                  ? 'bg-accent-green/20 text-accent-green' 
                  : 'bg-accent-purple/20 text-accent-purple'
              }`}>
                {event.status === 'en-route' ? 'En Route' : 'Scheduled'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSchedule;