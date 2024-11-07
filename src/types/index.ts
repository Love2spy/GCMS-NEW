export interface Opportunity {
  id: string;
  title: string;
  agency: string;
  noticeId: string;
  postedDate: string;
  responseDeadline: string;
  description: string;
  naicsCode: string;
  type: string;
  setAside: string;
  status: 'new' | 'analyzing' | 'bidding' | 'submitted' | 'won' | 'lost';
}

export interface BidAnalysis {
  id: string;
  opportunityId: string;
  technicalCapability: 'yes' | 'no' | 'partial';
  pastPerformance: 'yes' | 'no' | 'partial';
  resourceAvailability: 'yes' | 'no' | 'partial';
  riskAssessment: string;
  decision: 'bid' | 'no_bid';
  notes?: string;
}

export interface Template {
  id: string;
  name: string;
  category: 'past_performance' | 'technical' | 'pricing' | 'quote_request' | 'cover_letter' | 'capability_statement';
  content: string;
  tags: string[];
}

export interface PricingCalculation {
  id: string;
  opportunityId: string;
  laborRates: {
    role: string;
    rate: number;
    hours: number;
  }[];
  materials: {
    item: string;
    quantity: number;
    unitPrice: number;
  }[];
  overhead: number;
  profit: number;
  totalPrice: number;
}

export interface Milestone {
  id: string;
  contractId: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in_progress' | 'completed' | 'delayed';
  value?: number;
}

export interface Subcontractor {
  id: string;
  name: string;
  location: string;
  contact: string;
  email: string;
  specialties: string[];
  rating: number;
  status: 'new' | 'contacted' | 'waiting_response' | 'quoted' | 'approved' | 'rejected';
  statusUpdatedAt: string;
  notes?: string;
  pastPerformance: {
    projectName: string;
    contractValue: number;
    completionDate: string;
    description: string;
  }[];
  quotes?: {
    opportunityId: string;
    amount: number;
    submittedAt: string;
    validUntil: string;
    status: 'pending' | 'accepted' | 'rejected';
  }[];
}