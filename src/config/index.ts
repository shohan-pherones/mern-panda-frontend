import { OrderStatus } from "@/types";

export const cuisineList: string[] = [
  "Italian",
  "Japanese",
  "Mexican",
  "Indian",
  "French",
  "Chinese",
  "Thai",
  "Greek",
  "Spanish",
  "Mediterranean",
  "Korean",
  "Vietnamese",
  "American",
  "Middle Eastern",
  "Brazilian",
  "Caribbean",
  "German",
  "Russian",
  "Turkish",
  "Moroccan",
  "Argentinian",
  "Peruvian",
  "Australian",
  "British",
  "Swedish",
  "Indonesian",
  "Ethiopian",
  "Jamaican",
  "Filipino",
];

export const ORDER_STATUS: {
  label: String;
  value: OrderStatus;
  progress: number;
}[] = [
  { label: "Placed", value: "placed", progress: 0 },
  { label: "Awaiting Restaurant Confirmation", value: "paid", progress: 25 },
  { label: "In Progress", value: "inProgress", progress: 50 },
  { label: "Out for Delivery", value: "outForDelivery", progress: 75 },
  { label: "Delivered", value: "delivered", progress: 100 },
];
