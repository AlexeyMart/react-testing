import { AppRoutesApi } from "../constants";

export const mockData: Record<AppRoutesApi, any> = {
  [AppRoutesApi.fetchUsers]: [
    { name: "Bruce Wayne" },
    { name: "Clark Kent" },
    { name: "Princess Diana" },
  ],
};
