export const generateWriteUp = (writeupType: string, options: any) => {
  switch (writeupType) {
    case 'general':
      return `Greetings from the National Institute of Technology, Kurukshetra, Haryana, India.
Respected Sir/Ma'am,
We are thrilled to bring Techspardha'23 from 19th to 22nd January 2023.
Techspardha is the annual techno-managerial festival of the National Institute of Technology, Kurukshetra.
Consider it as an opportunity to spread your reach over 30 NITs as it is one of North India's largest technical festivals witnessing participation from nationwide colleges and universities in addition to guest lectures from CEOs of reputable firms and professors of reputed institutions.
Students are provided with an opportunity to showcase their skills and talents in a wide spectrum of events that test not only their technical know-how but also their managerial and soft skills. The events are aimed at encouraging students to come out of textbooks and apply their knowledge in a real-life setup.
With an ingenious crowd of 12,000 folks at work, we shall provide you with all the publicity you need. Our website, mobile app, local sources of endorsement, as well as our growing social media reach, will make this an even more fantastic opportunity for promoting your brand. Also, as per your requirement and target market, we offer various events such as Excalibur, Encoder, Hackathon, and many more.
I assure you that, at the end of the day, you will be satisfied and glad to interact with NIT Kurukshetra students.
I am excited to collaborate with you and look forward to hearing from you soon. Please find attached the prospectus to get greater insight into our fest.
 
Thanks & Regards,
${options.name}
Sponsorship Head, Team Techspardha
NIT Kurukshetra
Mob: ${options.phone}`

    case 'hackathon':
      return `We are thrilled to bring Techspardha'23 from 19th to 22nd January 2023. 
Techspardha is the annual techno-managerial festival of the National Institute of Technology, Kurukshetra.
Consider it as an opportunity to spread your reach over 30NITs as it is one of North India's largest technical festivals witnessing participation from nationwide colleges and universities in addition to guest lectures from CEOs of reputable firms and professors of reputed institutions.
Students are provided with an opportunity to showcase their skills and talents in a wide spectrum of events that test not only their technical know-how but also their managerial and soft skills. The events are aimed at encouraging students to come out of textbooks and apply their knowledge in a real-life setup.
With an ingenious crowd of 12,000 folks at work, we shall provide you with all the publicity you need. Our website, mobile app, local sources of endorsement, as well as our growing social media reach, will make this an even more fantastic opportunity for promoting your brand. Also, as per your requirement and target market, we offer various events such as Excalibur, Encoder, Hackathon, and many more.
Hackshetra’23, the annual hackathon of Techspardha'23 is back once again from 16th to 17th January 2023 providing developers all around the country an opportunity to participate and work on the trending tech themes and to come up with solutions for common day-to-day lives. 
Date: 16th to 17th January 2023
This time it’s an offline 24 hours long marathon where you can work on any technology including Cloud Computing using Firebase/AWS/Azure, Machine Learning, Alexa Skills, and literally anything that you can take out of your toolbox.
Our previous sponsors include HackerEarth, Jetbrains, Skillenza, Coding Blocks, and Stryker and the events were a huge success as we were able to attract the participation of over 600 students. Some project themes included Healthcare, Travel and Tourism, Waste management, Games, etc.

Rules :
• It is a team event (3 members).
• First elimination will be based on the proposed solution and design submitted by the teams.
• Second elimination will be carried out after a few hours into the event based on the progress made by the teams.

We have started all our preparations for it at full throttle, and we will ensure massive participation in the hackathon this year too. Your support will significantly enhance the experience of the participants.     
I assure you that, at the end of the day, you will be satisfied and delighted to interact with NIT Kurukshetra students.
I am excited to collaborate with you and look forward to hearing from you soon.
     
Thanks & Regards,
${options.name}
Sponsorship Head, Team Techspardha
NIT Kurukshetra
Mob: ${options.phone}`

    case 'coding-platform':
      return `Greetings from the National Institute of Technology, Kurukshetra, Haryana, India.
Respected Sir/Ma'am,
We are thrilled to bring Techspardha'23 from 19th to 22nd January 2023. 
Techspardha is the annual techno-managerial festival of the National Institute of Technology, Kurukshetra.
Consider it as an opportunity to spread your reach over 30NITs as it is one of North India's largest technical festivals witnessing participation from nationwide colleges and universities in addition to guest lectures from CEOs of reputable firms and professors of reputed institutions.
Students are provided with an opportunity to showcase their skills and talents in a wide spectrum of events that test not only their technical know-how but also their managerial and soft skills. The events are aimed at encouraging students to come out of textbooks and apply their knowledge in a real-life setup.
With an ingenious crowd of 12,000 folks at work, we shall provide you with all the publicity you need. Our website, mobile app, local sources of endorsement, as well as our growing social media reach, will make this an even more fantastic opportunity for promoting your brand. Also, as per your requirement and target market, we offer various events such as Excalibur, Encoder, Hackathon, and many more.
         
We are organizing a Coding Contest known as "Encoder" as an event of Techspardha on 20th January 2023 (tentatively), and we would love to have you on board as a sponsor for this event. 
Techspradha’s annual competitive programming contest ‘Encoder’ is the biggest coding event held during the fest in which one has to solve a given set of questions in a limited time duration on prestigious coding platforms.
It is a short programming contest where you can show off your programming skills, compete with the best minds across the planet, win exciting prizes, be recognized, or simply solve for fun.
Rules :
         
1. There will be ACM Style Ranklist- Users are ranked according to the most problems solved. 
2. Ties will be broken by the total time for each user in ascending order of time. 
3. There is no partial scoring.
         
We have started all our preparations for it at full throttle, and we will ensure massive participation in this contest this year. Your support will significantly enhance the experience of all the participants.         
I assure you that, at the end of the day, you will be satisfied and delighted to interact with NIT Kurukshetra students.
I am excited to collaborate with you and look forward to hearing from you soon.
         
Thanks & Regards,
${options.name}
Sponsorship Head, Team Techspardha
NIT Kurukshetra
Mob: ${options.phone}`
  }
}