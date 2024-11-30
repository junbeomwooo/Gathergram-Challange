import MemberPage from "@/components/MemberPage";

export default async function page({

  params,
}: {
  params: { email: string};
}) {

  const { email  } = await params;
  
  return (
    <>
      <MemberPage email={email} />
    </>
  );
}
