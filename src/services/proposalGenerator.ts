import { Template, Opportunity, PricingCalculation } from '../types';

interface ProposalSection {
  title: string;
  content: string;
}

export const generateProposal = (
  opportunity: Opportunity,
  templates: Template[],
  pricing: PricingCalculation
): ProposalSection[] => {
  const sections: ProposalSection[] = [
    {
      title: 'Cover Page',
      content: generateCoverPage(opportunity)
    },
    {
      title: 'Technical Approach',
      content: generateTechnicalSection(opportunity, templates)
    },
    {
      title: 'Past Performance',
      content: generatePastPerformance(templates)
    },
    {
      title: 'Pricing',
      content: generatePricingSection(pricing)
    }
  ];

  return sections;
};

const generateCoverPage = (opportunity: Opportunity): string => {
  return `
# ${opportunity.title}
Solicitation Number: ${opportunity.id}
Agency: ${opportunity.agency}

Submitted by: [Company Name]
Date: ${new Date().toLocaleDateString()}

DUNS: [DUNS Number]
CAGE Code: [CAGE Code]
  `;
};

const generateTechnicalSection = (opportunity: Opportunity, templates: Template[]): string => {
  const technicalTemplate = templates.find(t => t.category === 'technical');
  return technicalTemplate?.content || 'Technical approach content will be generated here.';
};

const generatePastPerformance = (templates: Template[]): string => {
  const pastPerfTemplate = templates.find(t => t.category === 'past_performance');
  return pastPerfTemplate?.content || 'Past performance content will be generated here.';
};

const generatePricingSection = (pricing: PricingCalculation): string => {
  const laborTotal = pricing.laborRates.reduce((sum, item) => sum + (item.rate * item.hours), 0);
  const materialsTotal = pricing.materials.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  
  return `
## Price Breakdown

### Labor Costs
${pricing.laborRates.map(rate => `- ${rate.role}: $${rate.rate} x ${rate.hours}hrs = $${rate.rate * rate.hours}`).join('\n')}

Total Labor: $${laborTotal}

### Materials
${pricing.materials.map(material => `- ${material.item}: $${material.unitPrice} x ${material.quantity} = $${material.unitPrice * material.quantity}`).join('\n')}

Total Materials: $${materialsTotal}

### Summary
- Subtotal: $${laborTotal + materialsTotal}
- Overhead (${pricing.overhead}%): $${(laborTotal + materialsTotal) * (pricing.overhead / 100)}
- Profit (${pricing.profit}%): $${(laborTotal + materialsTotal) * (pricing.profit / 100)}

Total Price: $${pricing.totalPrice}
  `;
};