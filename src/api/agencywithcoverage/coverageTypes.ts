import { ApiResponse, References } from '../../common/api-repsonse';

export interface AgenciesWithCoverageResponse extends ApiResponse {
  data: {
    limitExceeded: boolean;
    list: AgencyWithCoverage[];
    references: References;
  };
}

export interface AgencyWithCoverage {
  agencyId: string;
  lat: number;
  latSpan: number;
  lon: number;
  lonSpan: number;
}
