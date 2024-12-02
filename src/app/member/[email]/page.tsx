import MemberPage from "@/components/MemberPage";

export default function page({ params }: { params: { email: string } }) {
  const { email } = params;

  return (
    <>
      <MemberPage email={email} />
    </>
  );
}
