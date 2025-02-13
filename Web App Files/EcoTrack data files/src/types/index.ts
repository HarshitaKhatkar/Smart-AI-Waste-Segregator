export interface WasteCategory {
  id: string;
  name: string;
  storagePercentage: number;
  weight: number;
  description: string;
  icon: string;
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface HistoryEntry {
  id: string;
  category: string;
  weight: number;
  timestamp: string;
}

export interface FeedbackData {
  name: string;
  email: string;
  message: string;
}