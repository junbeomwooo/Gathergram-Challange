import MemberPage from "@/components/MemberPage";

type PageProps = {
  params: { email: string };
};

export default function page({ params }: PageProps) {
  const { email } = params;

  return (
    <>
      <MemberPage email={email} />
    </>
  );
}
