import { Table, TableHead } from './ui/table'
import React from 'react'
import { TableBody, TableCaption, TableCell, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

function AppiledJobTable() {
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
                    [1,2,3,4].map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell>10-02-2025</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right"><Badge className='bg-amber-950 text-white'>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                  }
              </TableBody>
           </Table>
    </div>
  )
}

export default AppiledJobTable
