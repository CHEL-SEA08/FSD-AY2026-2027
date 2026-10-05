const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const dbName = "studentDB";
const collectionName = "students";


async function main() {

    try {

        // Connect to MongoDB
        await client.connect();

        console.log("Connected to MongoDB!");


        // Select database
        const db = client.db(dbName);


        // Select collection
        const collection = db.collection(collectionName);


        // Student data
        const students = [

            {
                studentId: 101,
                name: "Anita",
                department: "CSE",

                subjects: [
                    {
                        subject: "DBMS",
                        marks: 85,
                        grade: "A"
                    },
                    {
                        subject: "AI",
                        marks: 90,
                        grade: "A+"
                    },
                    {
                        subject: "Web Development",
                        marks: 78,
                        grade: "B+"
                    }
                ]
            },


            {
                studentId: 102,
                name: "Rahul",
                department: "CSE",

                subjects: [
                    {
                        subject: "DBMS",
                        marks: 75,
                        grade: "B+"
                    },
                    {
                        subject: "AI",
                        marks: 82,
                        grade: "A"
                    },
                    {
                        subject: "Web Development",
                        marks: 88,
                        grade: "A"
                    }
                ]
            },


            {
                studentId: 103,
                name: "Priya",
                department: "AIML",

                subjects: [
                    {
                        subject: "DBMS",
                        marks: 92,
                        grade: "A+"
                    },
                    {
                        subject: "AI",
                        marks: 95,
                        grade: "A+"
                    },
                    {
                        subject: "Web Development",
                        marks: 89,
                        grade: "A"
                    }
                ]
            },


            {
                studentId: 104,
                name: "Kiran",
                department: "AIML",

                subjects: [
                    {
                        subject: "DBMS",
                        marks: 68,
                        grade: "B"
                    },
                    {
                        subject: "AI",
                        marks: 74,
                        grade: "B+"
                    },
                    {
                        subject: "Web Development",
                        marks: 80,
                        grade: "A"
                    }
                ]
            }

        ];


        // Delete old records
        await collection.deleteMany({});


        // Insert student records
        await collection.insertMany(students);

        console.log("Student records inserted successfully!");


        // Read student records
        const currentStudents = await collection.find({}).toArray();


        console.log("\n====================================");
        console.log("CURRENT STUDENT DATA");
        console.log("====================================");


        currentStudents.forEach(student => {

            console.log("\nStudent ID:", student.studentId);

            console.log("Name:", student.name);

            console.log("Department:", student.department);

            console.log("Subjects:");

            student.subjects.forEach(subject => {

                console.log(
                    "  ",
                    subject.subject,
                    "Marks:",
                    subject.marks,
                    "Grade:",
                    subject.grade
                );

            });

        });


        // Calculate grade summary
        const result = await collection.aggregate([

            {
                $unwind: "$subjects"
            },


            {
                $group: {

                    _id: "$studentId",

                    name: {
                        $first: "$name"
                    },

                    department: {
                        $first: "$department"
                    },

                    totalMarks: {
                        $sum: "$subjects.marks"
                    },

                    averageMarks: {
                        $avg: "$subjects.marks"
                    },

                    highestMarks: {
                        $max: "$subjects.marks"
                    },

                    lowestMarks: {
                        $min: "$subjects.marks"
                    }

                }
            },


            {
                $project: {

                    _id: 0,

                    studentId: "$_id",

                    name: 1,

                    department: 1,

                    totalMarks: 1,

                    averageMarks: {
                        $round: [
                            "$averageMarks",
                            2
                        ]
                    },

                    highestMarks: 1,

                    lowestMarks: 1

                }
            },


            {
                $sort: {
                    averageMarks: -1
                }
            }

        ]).toArray();


        console.log("\n====================================");
        console.log("STUDENT GRADE SUMMARY");
        console.log("====================================");

        console.table(result);

    }


    catch (error) {

        console.log("MongoDB Error:");

        console.log(error);

    }


    finally {

        await client.close();

        console.log("\nMongoDB connection closed.");

    }

}


main();
