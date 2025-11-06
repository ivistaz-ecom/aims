import Link from 'next/link'
import React from 'react'

const ActsandStatues = () => {
    return (
        <>
            <div>
                <div className="px-4 lg:px-8 bg-[#E1F9F4]">
                    <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-0'>
                        <div className='text-center lg:w-[80%] py-10'>
                            <h1 className='text-4xl font-bold text-[#0C2165]'>
                                Acts and Statutes
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-8">
                <div className='container mx-auto flex flex-col py-10 space-y-4'>
                    <div>
                        <h4 className='text-2xl text-bold'>
                            AIMS Statutes & Policies
                        </h4>
                        <ul className='list-disc list-inside space-y-2'>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Infrastructure policy.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Infrastructure and Maintenance Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Antiragging policy.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Anti-Ragging Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Sexual harrassment.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Policy for Prevention of Sexual Harassment
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Code of Conduct faculty and staff.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Code of Conduct – Faculty and Staff
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Faculty development activities.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Policy for Sponsorship of Faculty for Development Activities
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Student grievances and redressal.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Students Grievance Redressal Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Policy of Promotion equity.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Policy for Promotion of Equity
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Code of Conduct-Students.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Code of Conduct – Students
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Code of Ethics.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Code of Ethics
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="" target='_blank' noopener noreferrer>
                                    Environment & Sustainability Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/IT Policy.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    IT Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/HR Policy_merged.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    HR Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="" target='_blank' noopener noreferrer>
                                    ER Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Admission policy.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Admission Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="" target='_blank' noopener noreferrer>
                                    Research Policy
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/acts-and-statutes-moa/Library Policy and Procedures.pdf" target='_blank' noopener noreferrer className="underline underline-offset-2">
                                    Library Policies and Procedures
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="" target='_blank' noopener noreferrer>
                                    Student Exit Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ActsandStatues
