export interface Pagination {
  total: number;
  lastPage: number;
  perPage: number;
  currentPage: number;
  from: number;
  to: number;
}

export interface PaginateParams {
  currentPage: number;
  perPage: number;
}

export interface WithPagination<T = unknown> {
  data: T;
  pagination: Pagination;
}
