import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'

const App = () => {
  const jobPosts = [
    {
      brandLogoUrl: "https://tse4.mm.bing.net/th/id/OIP.-HKxrKpPq0xxGRafZSAFVQHaHa?cb=12&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Netflix",
      datePosted: "5 days ago",
      postOfJob: "Marketing Coordinator",
      tag1: "part-time",
      tag2: "junior",
      wagePerHourUSD: 12,
      location: "Kathmandu, Nepal"
    },
    {
      brandLogoUrl: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      companyName: "Amazon",
      datePosted: "2 days ago",
      postOfJob: "Software Engineer",
      tag1: "full-time",
      tag2: "senior",
      wagePerHourUSD: 25,
      location: "Lalitpur, Nepal"
    },
    {
      brandLogoUrl: "https://www.companyfolders.com/blog/media/2015/01/apple-300x300.jpg",
      companyName: "Apple Tech",
      datePosted: "1 day ago",
      postOfJob: "UI/UX Designer",
      tag1: "full-time",
      tag2: "junior",
      wagePerHourUSD: 18,
      location: "Pokhara, Nepal"
    },
    {
      brandLogoUrl: "https://www.companyfolders.com/blog/media/2015/01/bmw-300x300.jpg",
      companyName: "BMW",
      datePosted: "3 days ago",
      postOfJob: "Graphic Designer",
      tag1: "part-time",
      tag2: "senior",
      wagePerHourUSD: 16,
      location: "Biratnagar, Nepal"
    },
    {
      brandLogoUrl: "https://www.companyfolders.com/blog/media/2015/01/cisco-300x171.jpg",
      companyName: "Cisco Co.",
      datePosted: "4 days ago",
      postOfJob: "Content Writer",
      tag1: "part-time",
      tag2: "junior",
      wagePerHourUSD: 10,
      location: "Kathmandu, Nepal"
    },
    {
      brandLogoUrl: "https://www.companyfolders.com/blog/media/2015/01/dc-comics-300x300.jpg",
      companyName: "DC Comics",
      datePosted: "6 days ago",
      postOfJob: "Data Analyst",
      tag1: "full-time",
      tag2: "senior",
      wagePerHourUSD: 28,
      location: "Chitwan, Nepal"
    },
    {
      brandLogoUrl: "https://www.companyfolders.com/blog/media/2015/01/dominos-300x300.jpg",
      companyName: "Domino's Pizza",
      datePosted: "2 days ago",
      postOfJob: "Backend Developer",
      tag1: "full-time",
      tag2: "junior",
      wagePerHourUSD: 22,
      location: "Kathmandu, Nepal"
    },
    {
      brandLogoUrl: "https://www.companyfolders.com/blog/media/2015/01/hidden-fedex-arrow.jpg",
      companyName: "FedEx",
      datePosted: "7 days ago",
      postOfJob: "Social Media Manager",
      tag1: "part-time",
      tag2: "senior",
      wagePerHourUSD: 14,
      location: "Lalitpur, Nepal"
    },
    {
      brandLogoUrl: "https://tse2.mm.bing.net/th/id/OIP.YvCcRPgHyArXI8Su1M_d1QHaHd?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Google",
      datePosted: "8 days ago",
      postOfJob: "Machine Learning Engineer",
      tag1: "full-time",
      tag2: "senior",
      wagePerHourUSD: 30,
      location: "Kathmandu, Nepal"
    },
    {
      brandLogoUrl: "https://tse4.mm.bing.net/th/id/OIP.2ARkwk6WKG2IUJngn_p56QHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "IBM",
      datePosted: "3 days ago",
      postOfJob: "Customer Support",
      tag1: "part-time",
      tag2: "junior",
      wagePerHourUSD: 9,
      location: "Butwal, Nepal"
    }
  ];

  return (
    <div className='parent'>
      {jobPosts.map(function (elem) { return <Card company={elem.companyName} logo={elem.brandLogoUrl} tag={elem.tag1} tag2={elem.tag2} post={elem.postOfJob} wage={elem.wagePerHourUSD} place={elem.location} date={elem.datePosted} /> })}

    </div>
  )
}

export default App