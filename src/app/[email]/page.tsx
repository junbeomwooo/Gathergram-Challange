export default function page({params: {email}}:{params: {email:string}}) {
  
  return (
    <div>
      <h1>Nice</h1>
      <h2>{email}</h2>
    </div>
  );
}