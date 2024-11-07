import axios from 'axios';

const SAM_API_KEY = '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';
const SAM_API_BASE_URL = 'https://api.sam.gov/opportunities/v2';

interface SAMOpportunity {
  noticeId: string;
  title: string;
  agency: string;
  postedDate: string;
  responseDeadline: string;
  description: string;
  naicsCode: string;
  type: string;
  setAside: string;
}

export const searchOpportunities = async (searchParams: {
  keyword?: string;
  naicsCode?: string;
  setAside?: string;
}) => {
  try {
    const response = await axios.get(`${SAM_API_BASE_URL}/search`, {
      headers: {
        'api_key': SAM_API_KEY
      },
      params: {
        ...searchParams,
        limit: 10,
        postedFrom: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
      }
    });

    return response.data.opportunities;
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    throw error;
  }
};

export const getOpportunityDetails = async (noticeId: string) => {
  try {
    const response = await axios.get(`${SAM_API_BASE_URL}/notice/${noticeId}`, {
      headers: {
        'api_key': SAM_API_KEY
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching opportunity details:', error);
    throw error;
  }
};