const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResumeContent(userData) {
  const prompt = `You are an expert professional resume writer. Given the following raw user data, generate polished, ATS-friendly resume content. 

INSTRUCTIONS:
- Improve wording with strong action verbs (Led, Developed, Implemented, Optimized, etc.)
- Quantify achievements where possible (percentages, dollar amounts, team sizes)
- Write a compelling 2-3 sentence professional summary
- Organize skills into technical and soft skills
- Keep bullet points concise and impactful (start each with an action verb)
- Return ONLY valid JSON, no markdown, no code fences

USER DATA:
${JSON.stringify(userData, null, 2)}

REQUIRED JSON SCHEMA (return exactly this structure):
{
  "summary": "2-3 sentence professional summary",
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "dates": "Start – End",
      "bullets": ["Achievement 1", "Achievement 2", "Achievement 3"]
    }
  ],
  "skills": {
    "technical": ["Skill1", "Skill2"],
    "soft": ["Skill1", "Skill2"]
  },
  "education": [
    {
      "degree": "Degree Name",
      "school": "School Name",
      "year": "Year",
      "gpa": "GPA if provided"
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "1-2 sentence polished description",
      "tech": ["Tech1", "Tech2"]
    }
  ],
  "certifications": []
}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a professional resume writer. Always respond with valid JSON only. No markdown formatting, no code fences, no explanations.',
      },
      { role: 'user', content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 2500,
  });

  const content = response.choices[0].message.content.trim();

  // Try to parse JSON, cleaning up if needed
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    // Sometimes the model wraps in code fences — strip them
    const cleaned = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim();
    parsed = JSON.parse(cleaned);
  }

  return parsed;
}

module.exports = { generateResumeContent };
