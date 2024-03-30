import Link from "next/link";

function Dashboard () {
  return (
    <>
      <div>This is Dashboard.</div>

      <Link href = "/dashboard/setting">Setting</Link>
     <div><Link href = "/dashboard/analytics">Analytics</Link></div>
    </>
  )
}
export default Dashboard;