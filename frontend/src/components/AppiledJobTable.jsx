import { Table, TableHead } from './ui/table'
import React from 'react'
import { TableBody, TableCaption, TableCell, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

function AppiledJobTable() {
  const {allAppliedJobs} =useSelector(store=>store.job);
  return (
    <div>
           <Table>
              <TableCaption> A list of your Applied Jobs</TableCaption>
              <TableHeader>
                   <TableRow>
                     <TableHead>Data</TableHead>
                     <TableHead>Job role</TableHead>
                     <TableHead>Company</TableHead>
                     <TableHead className='text-right'>Status</TableHead>
                   </TableRow>
              </TableHeader>
              <TableBody>
                  {
                   allAppliedJobs.length<=0 ?<span>You haven't Applied for any job yet.</span> :allAppliedJobs.map((appliedJob)=>(
                        <TableRow key={appliedJob._id}>
                            <TableCell>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                            <TableCell>{appliedJob?.job?.title}</TableCell>
                            <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                            <TableCell className="text-right"><Badge className={`${appliedJob?.status.toLowerCase() ==="rejected" ? 'bg-red-400 text-white':appliedJob?.status.toLowerCase() ==="pending" ? 'bg-gray-400 text-white':'bg-green-500 text-white'} `}>{appliedJob?.status}</Badge></TableCell>
                        </TableRow>
                    ))
                  }
              </TableBody>
           </Table>
    </div>
  )
}

export default AppiledJobTable
