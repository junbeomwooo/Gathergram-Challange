import MemberPage from "@/components/MemberPage";

type PageProps = {
  params: Promise<{ email: string }>;
};

export default async function page({ params }: PageProps) {
  const { email } = await params;

  return (
    <>
      <MemberPage email={email} />
    </>
  );
}
