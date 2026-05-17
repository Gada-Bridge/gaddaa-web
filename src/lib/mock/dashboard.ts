export interface User {
  name: string;
  balanceKobo: number;
  portfolioGrowth: number;
}

export interface SavingsGoal {
  id: string;
  name: string;
  targetKobo: number;
  currentKobo: number;
  unlockDate: string;
  category: 'apartment' | 'vacation' | 'education' | 'business' | string;
}

export interface AjoCircle {
  id: string;
  name: string;
  memberCount: number;
  nextPayoutDate: string;
  isUserTurn: boolean;
}

export interface Transaction {
  id: string;
  name: string;
  amountKobo: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  category: string;
  type: 'debit' | 'credit';
}

export const mockUser: User = {
  name: 'Chinedu',
  balanceKobo: 45020050, // ₦450,200.50
  portfolioGrowth: 12.5,
};

export const mockSavingsGoals: SavingsGoal[] = [
  {
    id: '1',
    name: 'New Apartment',
    targetKobo: 200000000, // ₦2,000,000
    currentKobo: 150000000, // ₦1,500,000
    unlockDate: '2024-12-31',
    category: 'apartment',
  },
  {
    id: '2',
    name: 'Summer Vacation',
    targetKobo: 100000000, // ₦1,000,000
    currentKobo: 40000000, // ₦400,000
    unlockDate: '2024-08-15',
    category: 'vacation',
  },
  {
    id: '3',
    name: 'Tech Setup',
    targetKobo: 50000000, // ₦500,000
    currentKobo: 12500000, // ₦125,000
    unlockDate: '2024-10-01',
    category: 'education',
  },
];

export const mockAjoCircles: AjoCircle[] = [
  {
    id: '1',
    name: 'Tech Founders Circle',
    memberCount: 12,
    nextPayoutDate: '2024-11-15',
    isUserTurn: true,
  },
  {
    id: '2',
    name: 'Family Savings',
    memberCount: 6,
    nextPayoutDate: '2024-12-01',
    isUserTurn: false,
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: 'GDA-92011',
    name: 'Amazon Web Services',
    amountKobo: -4250000, // -₦42,500.00
    date: '2024-10-24',
    status: 'completed',
    category: 'Subscription',
    type: 'debit',
  },
  {
    id: 'GDA-92012',
    name: 'Interest Earned',
    amountKobo: 824015, // +₦8,240.15
    date: '2024-10-23',
    status: 'completed',
    category: 'Investment',
    type: 'credit',
  },
  {
    id: 'GDA-92013',
    name: 'Transfer to Adekunle',
    amountKobo: -5000000, // -₦50,000.00
    date: '2024-10-21',
    status: 'pending',
    category: 'Transfer',
    type: 'debit',
  },
  {
    id: 'GDA-92014',
    name: 'Netflix Subscription',
    amountKobo: -450000, // -₦4,500.00
    date: '2024-10-20',
    status: 'completed',
    category: 'Entertainment',
    type: 'debit',
  },
  {
    id: 'GDA-92015',
    name: 'Salary Deposit',
    amountKobo: 85000000, // +₦850,000.00
    date: '2024-10-15',
    status: 'completed',
    category: 'Income',
    type: 'credit',
  },
];
