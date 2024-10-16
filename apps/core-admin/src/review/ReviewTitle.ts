import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "description";

export const ReviewTitle = (record: TReview): string => {
  return record.description?.toString() || String(record.id);
};
