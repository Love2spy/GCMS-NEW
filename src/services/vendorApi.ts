import axios from 'axios';
import { Vendor } from '../types';

const MOCK_VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'TechServ Solutions',
    location: 'Arlington, VA',
    contact: '(703) 555-0123',
    email: 'contact@techserv.com',
    specialties: ['IT Services', 'Cybersecurity', 'Cloud Solutions'],
    rating: 4.8,
    pastPerformance: [
      {
        projectName: 'Federal Cloud Migration',
        contractValue: 2500000,
        completionDate: '2023-12-31',
        description: 'Successfully migrated federal agency systems to cloud infrastructure'
      }
    ]
  },
  {
    id: 'v2',
    name: 'MedEquip Pro',
    location: 'Baltimore, MD',
    contact: '(410) 555-0189',
    email: 'sales@medequippro.com',
    specialties: ['Medical Equipment', 'Healthcare Supplies'],
    rating: 4.5,
    pastPerformance: [
      {
        projectName: 'VA Hospital Equipment Supply',
        contractValue: 1800000,
        completionDate: '2023-10-15',
        description: 'Ongoing medical equipment supply and maintenance contract'
      }
    ]
  }
];

export const searchVendors = async (params: {
  query?: string;
  specialty?: string;
  location?: string;
}) => {
  // Simulating API call with mock data
  const filteredVendors = MOCK_VENDORS.filter(vendor => {
    const matchQuery = !params.query || 
      vendor.name.toLowerCase().includes(params.query.toLowerCase()) ||
      vendor.specialties.some(s => s.toLowerCase().includes(params.query.toLowerCase()));
    
    const matchSpecialty = !params.specialty ||
      vendor.specialties.some(s => s.toLowerCase().includes(params.specialty.toLowerCase()));
    
    const matchLocation = !params.location ||
      vendor.location.toLowerCase().includes(params.location.toLowerCase());
    
    return matchQuery && matchSpecialty && matchLocation;
  });

  return filteredVendors;
};