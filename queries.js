exports.userDataQuery = username => `
  query getUserProfile($username: String!) { 
      allQuestionsCount { 
          difficulty 
          count 
      } 

      matchedUser(username: $username) { 
          contributions { 
              points 
          } 
          profile { 
              reputation 
              ranking 
          } 
          submissionCalendar 
          submitStats { 
              acSubmissionNum { 
                  difficulty 
                  count 
                  submissions 
              } 
              totalSubmissionNum { 
                  difficulty 
                  count 
                  submissions 
              } 
          } 
      } 
  }
`;
