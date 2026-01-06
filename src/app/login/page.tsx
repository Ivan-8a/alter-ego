import { Suspense } from "react";
import LoginPage from "./LoginPage";

export default async function Page({ searchParams }: { searchParams: Promise<{ redirect?: string }> }) {
  const params = await searchParams;
  const redirectTo = params.redirect || '/';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage redirectTo={redirectTo} />
    </Suspense>
  );
}
