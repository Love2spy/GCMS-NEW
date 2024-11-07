import { create } from 'zustand';
import type { 
  Opportunity, 
  BidAnalysis, 
  Template, 
  PricingCalculation,
  Milestone,
  Subcontractor
} from '../types';

interface Store {
  opportunities: Opportunity[];
  bidAnalyses: BidAnalysis[];
  templates: Template[];
  pricingCalculations: PricingCalculation[];
  milestones: Milestone[];
  subcontractors: Subcontractor[];
  
  // Opportunities
  addOpportunity: (opportunity: Opportunity) => void;
  updateOpportunity: (id: string, opportunity: Partial<Opportunity>) => void;
  removeOpportunity: (id: string) => void;
  
  // Bid Analysis
  addBidAnalysis: (analysis: BidAnalysis) => void;
  updateBidAnalysis: (id: string, analysis: Partial<BidAnalysis>) => void;
  
  // Templates
  addTemplate: (template: Template) => void;
  updateTemplate: (id: string, template: Partial<Template>) => void;
  removeTemplate: (id: string) => void;
  
  // Pricing
  addPricingCalculation: (calculation: PricingCalculation) => void;
  updatePricingCalculation: (id: string, calculation: Partial<PricingCalculation>) => void;
  
  // Milestones
  addMilestone: (milestone: Milestone) => void;
  updateMilestone: (id: string, milestone: Partial<Milestone>) => void;
  removeMilestone: (id: string) => void;

  // Subcontractors
  addSubcontractor: (subcontractor: Subcontractor) => void;
  updateSubcontractor: (id: string, subcontractor: Partial<Subcontractor>) => void;
  removeSubcontractor: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  opportunities: [],
  bidAnalyses: [],
  templates: [],
  pricingCalculations: [],
  milestones: [],
  subcontractors: [],

  // Opportunities
  addOpportunity: (opportunity) =>
    set((state) => ({
      opportunities: [...state.opportunities, opportunity],
    })),
  updateOpportunity: (id, opportunity) =>
    set((state) => ({
      opportunities: state.opportunities.map((o) =>
        o.id === id ? { ...o, ...opportunity } : o
      ),
    })),
  removeOpportunity: (id) =>
    set((state) => ({
      opportunities: state.opportunities.filter((o) => o.id !== id),
    })),

  // Bid Analysis
  addBidAnalysis: (analysis) =>
    set((state) => ({
      bidAnalyses: [...state.bidAnalyses, analysis],
    })),
  updateBidAnalysis: (id, analysis) =>
    set((state) => ({
      bidAnalyses: state.bidAnalyses.map((a) =>
        a.id === id ? { ...a, ...analysis } : a
      ),
    })),

  // Templates
  addTemplate: (template) =>
    set((state) => ({
      templates: [...state.templates, template],
    })),
  updateTemplate: (id, template) =>
    set((state) => ({
      templates: state.templates.map((t) =>
        t.id === id ? { ...t, ...template } : t
      ),
    })),
  removeTemplate: (id) =>
    set((state) => ({
      templates: state.templates.filter((t) => t.id !== id),
    })),

  // Pricing
  addPricingCalculation: (calculation) =>
    set((state) => ({
      pricingCalculations: [...state.pricingCalculations, calculation],
    })),
  updatePricingCalculation: (id, calculation) =>
    set((state) => ({
      pricingCalculations: state.pricingCalculations.map((c) =>
        c.id === id ? { ...c, ...calculation } : c
      ),
    })),

  // Milestones
  addMilestone: (milestone) =>
    set((state) => ({
      milestones: [...state.milestones, milestone],
    })),
  updateMilestone: (id, milestone) =>
    set((state) => ({
      milestones: state.milestones.map((m) =>
        m.id === id ? { ...m, ...milestone } : m
      ),
    })),
  removeMilestone: (id) =>
    set((state) => ({
      milestones: state.milestones.filter((m) => m.id !== id),
    })),

  // Subcontractors
  addSubcontractor: (subcontractor) =>
    set((state) => ({
      subcontractors: [...state.subcontractors, subcontractor],
    })),
  updateSubcontractor: (id, subcontractor) =>
    set((state) => ({
      subcontractors: state.subcontractors.map((s) =>
        s.id === id ? { ...s, ...subcontractor } : s
      ),
    })),
  removeSubcontractor: (id) =>
    set((state) => ({
      subcontractors: state.subcontractors.filter((s) => s.id !== id),
    })),
}));