import Link from "next/link";

function Dashboard () {
  return (
    <>
      <div>This is Dashboard.</div>

      <Link href = "/dashboard/setting/password">Password</Link>
     <div><Link href = "/dashboard/setting/profile">Profile</Link></div>
    </>
  )
}
export default Dashboard;