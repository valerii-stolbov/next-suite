import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextSuite: CMS',
  description: 'NextSuite CMS dashboard',
};

export default function DashboardPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">NextSuite: CMS</h1>
      <p className="mt-1 max-w-3xl">Content management system on NextSuite</p>
    </main>
  );
}
