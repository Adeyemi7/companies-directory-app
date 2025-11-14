// src/hooks/useJobSearch.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export type JobItem = {
  job_id: string;
  job_title?: string;
  job_employment_type?: string;
  employer_logo?: string;
  employer_name?: string;
  job_country?: string;
  job_google_link?: string;
  job_description?: string;
  job_highlights?: {
    Qualifications?: string[];
    Responsibilities?: string[];
  };
};

type SearchResponse = {
  data: JobItem[]; // RapidAPI returns an array on .data.data in original code, but we'll adapt
};

const PER_PAGE = 20;

async function fetchJobs(query: string, page = 1): Promise<JobItem[]> {
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/search`,
    headers: {
      "X-RapidAPI-Key": 'fa16cf9049msha69b8bc4b4e3462p1d7538jsn801aa670647b', // <-- put your key in .env or secure storage
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      query,
      page: page.toString(),
    },
  };

  const res = await axios.request(options);
  // API shape used earlier was response.data.data
  const results: JobItem[] = res.data?.data ?? [];
  return results;
}

/**
 * useJobSearch - returns infinite list behavior
 * key depends on query
 */
export function useJobSearch(query: string) {
  return useInfiniteQuery({
    queryKey: ["jobs", query],
    queryFn: async ({ pageParam = 1 }) => {
      if (!query || query.trim() === "") return [];
      const items = await fetchJobs(query, pageParam);
      return items;
    },
    enabled: query.trim().length > 0, // don't run when query is empty
    getNextPageParam: (lastPage, allPages) => {
      // If last page returned fewer items than PER_PAGE, assume no more
      if (!lastPage || lastPage.length === 0) return undefined;
      if (lastPage.length < PER_PAGE) return undefined;
      return allPages.length + 1; // next page index
    },
    initialPageParam: 1, // Required in v5
    staleTime: 1000 * 60 * 2, // 2 minutes
    gcTime: 1000 * 60 * 5, // renamed from cacheTime
  });
}
