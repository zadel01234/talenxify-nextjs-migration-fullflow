// import { NextResponse } from 'next/server';

// // POST handler for creating a new job
// export async function POST(request) {
//     try {
//         const body = await request.json();

//         // Validate required fields
//         const requiredFields = [
//             'jobOrGigs',
//             'jobCategory',
//             'jobTitle',
//             'jobType',
//             'budget',
//             'experienceLevel',
//             'location',
//             'skills',
//             'descriptionHTML'
//         ];

//         for (const field of requiredFields) {
//             if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
//                 return NextResponse.json(
//                     { message: `Missing required field: ${field}` },
//                     { status: 400 }
//                 );
//             }
//         }

//         // Add server-side metadata
//         const jobData = {
//             ...body,
//             id: generateJobId(), // Generate unique ID
//             status: 'active',
//             createdAt: new Date().toISOString(),
//             updatedAt: new Date().toISOString(),
//         };

//         // TODO: Save to database
//         // Example with Prisma:
//         // const job = await prisma.job.create({ data: jobData });

//         // Example with MongoDB:
//         // const job = await Job.create(jobData);

//         // For now, just log and return
//         console.log('Job created:', jobData);

//         return NextResponse.json(
//             {
//                 success: true,
//                 message: 'Job posted successfully',
//                 data: jobData
//             },
//             { status: 201 }
//         );

//     } catch (error) {
//         console.error('Error creating job:', error);
//         return NextResponse.json(
//             { message: 'Internal server error', error: error.message },
//             { status: 500 }
//         );
//     }
// }

// // GET handler for fetching jobs (optional)
// export async function GET(request) {
//     try {
//         // TODO: Fetch from database
//         // const jobs = await prisma.job.findMany();

//         const jobs = []; // Placeholder

//         return NextResponse.json(
//             {
//                 success: true,
//                 data: jobs
//             },
//             { status: 200 }
//         );

//     } catch (error) {
//         console.error('Error fetching jobs:', error);
//         return NextResponse.json(
//             { message: 'Internal server error', error: error.message },
//             { status: 500 }
//         );
//     }
// }

// // Helper function to generate unique job ID
// function generateJobId() {
//     return `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
// }