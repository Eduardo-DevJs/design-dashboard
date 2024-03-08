import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}
export default function Card({ children }: CardProps) {
  return <div className="p-5 bg-white rounded-xl">{children}</div>;
}
