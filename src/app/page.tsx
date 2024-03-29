import Link from "next/link";

function Home () {
  return (
    <>
      <div>This is homepage. Click on the Dashboard</div>

      <Link href = "/dashboard">Dashboard</Link>
     <div><Link href = "/blog">Blog</Link></div>
     <div><Link href = "/contact-us">Contact-us</Link></div>
    </>
  )
}

export default Home;