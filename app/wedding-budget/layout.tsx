import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding budget tracker',
  description: 'Track wedding spending and remaining budget',
};

export default function WeddingBudgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
