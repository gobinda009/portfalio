"use client"
import React from "react"
import styles from "./Education.module.css"

export default function Education() {
    const educationData = [
        {
            degree: 'Full Stack Web Development Program',
            institution: 'Geekster, Gurugram Haryana',
            duration: 'Feb 2023 - March 2024',
            cgpa: 'N/A',
            description: 'In my Bachelor of Engineering in Computer Science and Engineering at Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, I built a strong foundation in programming (C, C++, Java, Python), data structures, algorithms, computer architecture, and operating systems. I also studied computer networks, discrete mathematics, electronics, artificial intelligence, database management, and software engineering, enhancing my technical skills through hands-on projects and collaborative experiences.'
        },
        {
            degree: 'Bachelor of Engineering in Computer Science and Engineering',
            institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V), Bhopal',
            duration: '2015 - 2019',
            cgpa: '7.32/10',
            description: 'The Full Stack Web Development Program equips learners with skills across various tech stacks, including Java Spring Boot, HTML, CSS, JavaScript, and React. Through hands-on projects, participants gain practical experience building full-stack applications, mastering both backend development and frontend design. The program encourages real-world application of knowledge, allowing students to create dynamic, responsive web applications while expanding their expertise in multiple technologies.'
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'Jawahar Navodaya Vidyalaya, Purulia (WB)',
            duration: '2014 - 2015',
            percentage: '78.20%',
            description: 'I have completed my 12th (Higher Secondary) from Jawahar Navodaya Vidyalaya, Purulia (WB), where I specialized in Physics, Chemistry, Mathematics (PCM), and Computer Science. JNV is known for its rigorous academic curriculum and emphasis on holistic development, providing a strong foundation in both academics and extracurricular activities.'
        },
        {
            degree: 'Secondary Education',
            institution: 'Jawahar Navodaya Vidyalaya, Purulia (WB)',
            duration: '2012 - 2013',
            cgpa: '9.4/10',
            description: 'I have completed my 10th standard from Jawahar Navodaya Vidyalaya, Purulia (WB), with subjects including Mathematics, Science, Social Science, Bengali, and English. JNV provides a well-rounded education, fostering both academic excellence and personal growth through a balanced curriculum.'
        }
    ]

    return (
        <div className="main-me" style={{ marginTop: "30px", marginLeft: "160px", marginRight: "160px" }}>
            <section className={styles.education}>
                <div className={styles.educationContainer}>
                    {educationData.map((edu, index) => (
                        <div className={styles.educationCard} key={index}>
                            <h3 className={styles.educationDegree}>{edu.degree}</h3>
                            <p className={styles.educationInstitution}>{edu.institution}</p>
                            <p className={styles.educationDuration}>{edu.duration}</p>
                            {edu.percentage ? (
                                <p className={styles.educationPercentage}>Percentage: {edu.percentage}</p>
                            ) : (
                                <p className={styles.educationCGPA}>CGPA: {edu.cgpa}</p>
                            )}
                            <p className={styles.educationDescription}>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
